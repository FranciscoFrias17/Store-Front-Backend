"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
let server;
describe("Product Routes handling", () => {
    server = server_1.default.listen();
    it("should have a index route", async () => {
        const response = await (0, supertest_1.default)(server).get("/products");
        expect(response.status).toBe(200);
    });
    it("should have a show route", async () => {
        const response = await (0, supertest_1.default)(server).get("/products/1");
        expect(response.status).toEqual(200);
    });
    it("Unauthorized to create product without a valid token", async () => {
        const response = await (0, supertest_1.default)(server).post("/products");
        expect(response.status).toEqual(401);
    });
});
