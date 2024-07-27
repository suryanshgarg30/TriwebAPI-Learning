"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypesInteface = exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    const userName = "suryansh";
    const password = "Password";
    const age = 17;
    const result = (0, user_1.addUserToDB)(userName, password, age);
    res.send(result);
};
exports.registerUser = registerUser;
const checkTypesInteface = (req, res) => {
    let x = { x: 0, y: 4 };
    let xState = "locked";
    const myUser = {
        id: 1,
        uname: "suryansh",
        password: "password",
        age: 17,
        is_active: false,
        accountStatus: "locked",
    };
    const result = (0, user_1.updateUserData)(myUser);
    res.send(result);
};
exports.checkTypesInteface = checkTypesInteface;