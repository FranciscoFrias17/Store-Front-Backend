import { Product, ProductStore } from "../product";

const store = new ProductStore();

const testProduct = {
  name: "test product",
  price: 100,
};

describe("Product Model", () => {
  it("should have an index method", () => {
    expect(store.index).toBeDefined();
  });

  it("should have a show method", () => {
    expect(store.show).toBeDefined();
  });

  it("should have a create method", () => {
    expect(store.create).toBeDefined();
  });

  it("create method should add a product", async () => {
    const result = await store.create(testProduct);
    expect(result).toEqual({
      id: result.id,
      name: testProduct.name,
      price: testProduct.price,
    });
  });

  it("index method should return a list of products", async () => {
    const result = await store.index();
    expect(result.length).toBeGreaterThan(0);
  });

  it("show method should return the correct product", async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      name: "Product 1",
      price: 100,
    });
  });
});
