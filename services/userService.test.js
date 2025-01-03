const service = require('./userService');

jest.mock("./userService");//./__mocks__/userService');

describe("Test service calls backend", () => {
    let id = Math.floor(Math.random() * 100);
    test("post register should return a user", async () => {
        const body = {
            firstName: "Mehdi",
            lastName: "Anoosheh",
            city: "Manchester",
            state: "Manchest",
            email: `med.anooshe${id}@gmail.com`,
            zipCode: "456789",
            passWord: "123456789"
        };
        const user = await service.postRegister(body);
        expect(user.data.message).toEqual('Successful registration');
        expect(user.data.user.firstName).toEqual('Mehdi');
    });
    test("post login should return a user", async () => {
        const user = await service.postLogin({
            email: `med.anooshe${id}@gmail.com`,
            passWord: "123456789"
        });
        expect(user.data.message).toEqual("Login successful");
        expect(user.data.user.firstName).toEqual("Mehdi");
    });
});