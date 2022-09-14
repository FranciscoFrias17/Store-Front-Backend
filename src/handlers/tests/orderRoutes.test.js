"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const order_1 = require("../../models/order");
const server_1 = __importDefault(require("../../server"));
const store = new order_1.OrderStore();
let server;
describe("Order Routes handling", () => {
    server = server_1.default.listen();
    it("should have a index route", async () => {
        const response = await (0, supertest_1.default)(server).get("/orders");
        expect(response.status).toBe(200);
    });
    it("should have a show route", async () => {
        const response = await (0, supertest_1.default)(server).get("/orders/1");
        expect(response.status).toEqual(200);
    });
    it("Unauthorized to get user order without a token", async () => {
        const response = await (0, supertest_1.default)(server).get("/orders/1/users");
        expect(response.status).toEqual(401);
    });
    it("Unauthorized to create order without a valid token", async () => {
        const response = await (0, supertest_1.default)(server).post("/orders");
        expect(response.status).toEqual(401);
    });
    it("Unauthorized to add product to order without a valid token", async () => {
        const response = await (0, supertest_1.default)(server).post("/orders/1/products");
        expect(response.status).toEqual(401);
    });
});
