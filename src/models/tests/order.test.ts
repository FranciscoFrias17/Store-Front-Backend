import { Order, OrderProduct, OrderStore } from "../order";

const store = new OrderStore();

const testOrder: Order = {
  status: "active",
  userId: 1,
};

const testOrderProduct: OrderProduct = {
  orderId: 1,
  productId: 1,
  quantity: 5,
};

describe("Order Model", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  it("should have a show method", () => {
    expect(store.show).toBeDefined();
  });

  it("should have a create method", () => {
    expect(store.create).toBeDefined();
  });

  it("should have a showUserOrders method", () => {
    expect(store.showUserOrders).toBeDefined();
  });

  it("should have a addProduct method", () => {
    expect(store.addProduct).toBeDefined();
  });

  it("addProduct method should add a product to an order", async () => {
    const orderProduct: OrderProduct = await store.addProduct(testOrderProduct);
    const { orderId, productId, quantity } = orderProduct;

    expect(orderId).toEqual(testOrderProduct.orderId);
    expect(productId).toEqual(testOrderProduct.productId);
    expect(quantity).toEqual(testOrderProduct.quantity);
  });
});
