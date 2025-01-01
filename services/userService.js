const axios = require('axios');
require('dotenv').config();

const postRegister = async (body) => {
    const result = await axios.post(process.env.url + "/register", {
        firstName: body.firstName,
        lastName: body.lastName,
        city: "Manchester",
        state: "Manchest",
        email: body.email,
        zipCode: "456789",
        passWord: body.passWord
    });
    return result;

};
const postLogin = async (body) => {
    const result = await axios.post(process.env.url + "/login", {
        email: body.email,
        passWord: body.passWord
    });
    return result;
};

module.exports = { postRegister, postLogin };