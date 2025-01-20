"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
/* Initializes the express router */
const router = (0, express_1.Router)();
/* Sets the headers and HTTP request, executing a corresponding controller function on hit */
router.post('/', controller_1.postCharacter);
router.get('/', controller_1.getAllCharacters);
router.delete('/', controller_1.deleteOldCharacters);
exports.default = router;
