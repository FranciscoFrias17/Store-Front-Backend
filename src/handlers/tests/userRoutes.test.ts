import request from "supertest";
import app from "../../server";
import { Server } from "http";

let server: Server;

describe("User Routes handling", () => {
  server = app.listen();

  it("Unauthorized to access users without a valid token", async () => {
    const response = await request(server).get("/users");
    expect(response.status).toEqual(401);
  });

  it("Unauthorized to access user without a valid token", async () => {
    const response = await request(server).get("/users/1");
    expect(response.status).toEqual(401);
  });

  it("Should create a new user", async () => {
    const response = await request(server).post("/users").send({
      first_name: "test",
      last_name: "user",
      password: "password",
    });
    expect(response.status).toEqual(200);
  });

  it("Should authenticate a user", async () => {
    const response = await request(server).get("/user/authenticate").send({
      id: "1",
      password: "password",
    });
    expect(response.status).toEqual(200);
  });
});
