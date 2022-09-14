import request from "supertest";
import app from "../../server";
import { Server } from "http";

let server: Server;

describe("Product Routes handling", () => {
  server = app.listen();

  it("should have a index route", async () => {
    const response = await request(server).get("/products");
    expect(response.status).toBe(200);
  });

  it("should have a show route", async () => {
    const response = await request(server).get("/products/1");
    expect(response.status).toEqual(200);
  });

  it("Unauthorized to create product without a valid token", async () => {
    const response = await request(server).post("/products");
    expect(response.status).toEqual(401);
  });
});
