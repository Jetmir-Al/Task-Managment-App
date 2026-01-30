import request from "supertest";
import app from "../app";

describe("Auth routes", () => {
    it("should return 401 if invalid credencials", async () => {
        const res = await request(app)
            .post("/auth/login")
            .send({
                email: "test@gmail.com",
                password: "123456"
            });

        expect(res.status).toBe(401);
    });
    it("should return 400 if email is missing", async () => {
        const res = await request(app)
            .post("/auth/login")
            .send({
                password: "123456",
            });

        expect(res.status).toBe(400);
    });
    it("should login successfully", async () => {
        const res = await request(app)
            .post("/auth/login")
            .send({
                email: "jeta@gmail.com",
                password: "jetaa",
            });

        expect(res.status).toBe(200);
        expect(res.headers["set-cookie"]).toBeDefined();
    });

});
