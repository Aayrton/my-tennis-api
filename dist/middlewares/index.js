"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
    });
}
exports.errorHandler = errorHandler;
