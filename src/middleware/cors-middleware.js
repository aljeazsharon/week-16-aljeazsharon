"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clientAccess = {
    limitedClient: {
        origin: ['http://localhost:5173', 'http://localhost:5173/*', 'http://localhost:5174', 'http://localhost:5174/*'],
        methods: ['GET', 'POST']
    },
    globalClient: {
        origin: ['http://localhost:5174', 'http://localhost:5174/*'],
        methods: ['PATCH', 'DELETE']
    }
};
exports.default = clientAccess;
