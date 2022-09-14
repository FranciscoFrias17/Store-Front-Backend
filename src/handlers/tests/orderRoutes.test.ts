import request from "supertest";
import { OrderStore } from "../../models/order";
import app from "../../server";
import { Server } from "http";

const store = new OrderStore();
let server: Server;

describe("Order Routes handling", () => {
  server = app.listen();

  it("should have a index route", async () => {
    const response = await request(server).get("/orders");
    expect(response.status).toBe(200);
  });

  it("should have a show route", async () => {
    const response = await request(server).get("/orders/1");
    expect(response.status).toEqual(200);
  });

  it("Unauthorized to get user order without a token", async () => {
    const response = await request(server).get("/orders/1/users");
    expect(response.status).toEqual(401);
  });

  it("Unauthorized to create order without a valid token", async () => {
    const response = await request(server).post("/orders");
    expect(response.status).toEqual(401);
  });

  it("Unauthorized to add product to order without a valid token", async () => {
    const response = await request(server).post("/orders/1/products");
    expect(response.status).toEqual(401);
  });
});
