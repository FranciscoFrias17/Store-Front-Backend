"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
let server;
describe("User Routes handling", () => {
    server = server_1.default.listen();
    it("Unauthorized to access users without a valid token", async () => {
        const response = await (0, supertest_1.default)(server).get("/users");
        expect(response.status).toEqual(401);
    });
    it("Unauthorized to access user without a valid token", async () => {
        const response = await (0, supertest_1.default)(server).get("/users/1");
        expect(response.status).toEqual(401);
    });
    it("Should create a new user", async () => {
        const response = await (0, supertest_1.default)(server).post("/users").send({
            first_name: "test",
            last_name: "user",
            password: "password",
        });
        expect(response.status).toEqual(200);
    });
    it("Should authenticate a user", async () => {
        const response = await (0, supertest_1.default)(server).get("/user/authenticate").send({
            id: "1",
            password: "password",
        });
        expect(response.status).toEqual(200);
    });
});
