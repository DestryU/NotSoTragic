"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOldCharacters = exports.getAllCharacters = exports.postCharacter = void 0;
const model_1 = require("./model");
const validator_1 = require("./validator");
/*
    Routed controller function that executes the validator and model functions.

    This currently has an issue that I can't figure out for the life of me, which is the fact
    that if I Promise anything other than 'any' the server crashes. I really need to figure
    this out, and see if I can't find help.

*/
const postCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const character = req.body;
    const validCharacter = (0, validator_1.validateCharacter)(character);
    if (!validCharacter.isValid) {
        return res.status(400).json({ error: validCharacter.error });
    }
    try {
        const data = yield (0, model_1.insertCharacter)(character);
        return res.status(201).json({ message: 'Character created', data });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        else {
            return res.status(500).json({ error: 'Something went wrong.' });
        }
    }
});
exports.postCharacter = postCharacter;
const getAllCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCharacters = yield (0, model_1.fetchAllCharacters)();
        return res.status(200).json(allCharacters);
    }
    catch (error) {
        console.error('Error fetching characters:', error);
        return res.status(500).json({ error: 'Something went wrong.' });
    }
});
exports.getAllCharacters = getAllCharacters;
const deleteOldCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, model_1.removeOldCharacters)();
        return res.status(200).json({ message: 'Old characters deleted', count: 0 });
    }
    catch (_a) {
        return res.status(500).json({ error: 'Something went wrong.' });
    }
});
exports.deleteOldCharacters = deleteOldCharacters;
