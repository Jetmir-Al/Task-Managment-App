import request from "supertest";
import app from "../app";

describe("Auth routes", () => {

    const agent = request.agent(app);

    it("should login successfully", async () => {
        const res = await request(app)
            .post("/api/auth/login")
            .send({
                email: "test3@gmail.com",
                password: "123456",
            });

        expect(res.status).toBe(200);
        expect(res.headers["set-cookie"]).toBeDefined();
    });

    // delete user
    it("should return 200 if success", async () => {
        const res = await agent.delete("/api/auth/deleteUser");

        expect(res.status).toBe(200);
    });

    it("should return 401 if not authorized", async () => {
        const res = await request(app)
            .delete("/api/auth/deleteUser");

        expect(res.status).toBe(401);
    });



    // //log out
    // it("should return 200 ", async () => {
    //     const res = await request(app)
    //         .post("/api/auth/logout")
    //         .send({
    //         }).withCredentials(true);

    //     expect(res.status).toBe(200);
    // });

    // it("should return 401 if not with credencials ", async () => {
    //     const res = await request(app)
    //         .post("/api/auth/logout")
    //         .send({
    //         });

    //     expect(res.status).toBe(401);
    // });



    // it("should return 400 if invalid credencials", async () => {
    //     const res = await request(app)
    //         .post("/api/auth/signup")
    //         .send({
    //             name: "",
    //             email: "test@gmail.com",
    //             password: "123456"
    //         });

    //     expect(res.status).toBe(400);
    // });
    // it("should return 409 if invalid credencials", async () => {
    //     const res = await request(app)
    //         .post("/api/auth/signup")
    //         .send({
    //             name: "test",
    //             email: "jeta@gmail.com",
    //             password: "123456"
    //         });

    //     expect(res.status).toBe(409);
    // });

    // it("should return 201 if created", async () => {
    //     const res = await request(app)
    //         .post("/api/auth/signup")
    //         .send({
    //             name: "test",
    //             email: "test1@gmail.com",
    //             password: "123456"
    //         });

    //     expect(res.status).toBe(201);
    // });
    // // login
    // it("should return 401 if invalid credencials", async () => {
    //     const res = await request(app)
    //         .post("/api/auth/login")
    //         .send({
    //             email: "test@gmail.com",
    //             password: "123456"
    //         });

    //     expect(res.status).toBe(401);
    // });
    // it("should return 400 if email is missing", async () => {
    //     const res = await request(app)
    //         .post("/api/auth/login")
    //         .send({
    //             password: "123456",
    //         });

    //     expect(res.status).toBe(400);
    // });


});
