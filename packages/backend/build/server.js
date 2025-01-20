"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
/* - - - - - - - - - - */
const router_1 = __importDefault(require("./api/character/router"));
/* Sets up the use of .env variables */
dotenv_1.default.config();
/* Initializes the express server, sets the PORT variable */
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['https://notsotragic.vercel.app', 'https://notsotragic.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
/* Couples a URL with a designated router file */
app.use('/api/character', router_1.default);
/* Awknowledges the launch of the server, displaying the corresponding port */
app.listen(PORT, () => {
    console.log(`All systems green on port: ${PORT}`);
});
