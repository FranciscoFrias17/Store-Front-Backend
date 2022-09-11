import client from "../database";

export type Order = {
  id?: number;
  status: string;
  userId: number;
};

export type OrderProduct = {
  id?: number;
  orderId?: number;
  productId: number;
  quantity: number;
};

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM orders";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Order> {
    try {
      const sql = "SELECT * FROM orders WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find order ${id}. Error: ${err}`);
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      const sql =
        "INSERT INTO orders (status, userId) VALUES($1, $2) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [o.status, o.userId]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not add new order ${o.id}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      const sql = "DELETE FROM orders WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Could not delete order ${id}. Error: ${err}`);
    }
  }
}
