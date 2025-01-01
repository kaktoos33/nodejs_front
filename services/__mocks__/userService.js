
const postRegister = async (body) => {
    console.log("Mocked register");
    return Promise.resolve({
        data: {
            user: {
                firstName: "Mehdi",
                lastName: "Anoosheh",
                city: "Manchester",
                state: "Manchest",
                email: `med.anooshe32@gmail.com`,
                zipCode: "456789",
            },
            message: "Successful registration",
        }
    });

};
const postLogin = async (body) => {
    console.log("Mocked login");
    return Promise.resolve({
        data: {
            user: {
                firstName: "Mehdi",
                lastName: "Anoosheh",
                city: "Manchester",
                state: "Manchest",
                email: `med.anooshe32@gmail.com`,
                zipCode: "456789",
            },
            message: "Login successful",
            logged: true,
        }
    });
};

module.exports = { postRegister, postLogin };