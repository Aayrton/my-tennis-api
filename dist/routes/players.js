"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_json_1 = __importDefault(require("../data.json"));
const router = express_1.default.Router();
// Get all players
router.get('/', (req, res, next) => {
    try {
        const filteredPlayers = data_json_1.default.players.sort((a, b) => {
            if (a.id > b.id) {
                return 1;
            }
            return -1;
        });
        res.json(filteredPlayers);
    }
    catch (error) {
        return next(error);
    }
});
// Get player by id
router.get('/:id', (req, res, next) => {
    try {
        const player = data_json_1.default.players.find(({ id }) => id === parseInt(req.params.id));
        if (typeof player === 'undefined') {
            res.statusCode = 404;
            const error = new Error('Player Not Found');
            return next(error);
        }
        res.json(player);
    }
    catch (error) {
        return next(error);
    }
});
exports.default = router;
