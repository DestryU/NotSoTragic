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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeOldCharacters = exports.fetchAllCharacters = exports.insertCharacter = void 0;
const supabaseClient_1 = __importDefault(require("../../supabaseClient"));
/* Database function that inserts a character. Must be of the Character shape */
const insertCharacter = (character) => __awaiter(void 0, void 0, void 0, function* () {
    const { char_name, char_race, char_class, personality, backstory } = character;
    const { data, error } = yield supabaseClient_1.default
        .from('characters')
        .insert([
        { char_name, char_race, char_class, personality, backstory }
    ])
        .select();
    if (error) {
        throw new Error(error.message);
    }
    return data[0];
});
exports.insertCharacter = insertCharacter;
/* Database function that fetches all data from the 'chatacters' table */
const fetchAllCharacters = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabaseClient_1.default
        .from('characters')
        .select('*');
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.fetchAllCharacters = fetchAllCharacters;
const removeOldCharacters = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const cutoffDate = new Date(now.getTime() - (1000 * 60 * 60 * 24 * 30));
    const { data, error, count } = yield supabaseClient_1.default
        .from('characters')
        .delete()
        .lt('created_at', cutoffDate.toISOString());
    if (error) {
        throw new Error(error.message);
    }
    return count || 0;
});
exports.removeOldCharacters = removeOldCharacters;
