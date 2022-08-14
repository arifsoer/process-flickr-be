import app from "../../src/app";
import request from "supertest";

describe("Api test base case", () => {
  test("success getting data form /public-image", async () => {
    const res = await request(app).get("/api/v1/flickr/public-image");
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty("title");
  });
});
