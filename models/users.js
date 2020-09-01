const Users = require("../schemas/users");

//function to fetch the user details based on email and password
let loginUser = async (request) => {
    const userinfo = await Users.find({email: request.email, password: request.password})
    return userinfo
}

//function to add newuser
let userRegistration = async (params) => {
    let query = {
        name: params.name,
        displayname: params.displayname,
        email: params.email,
        password: params.password
    }
    let add = new Users(query)
    let result = await add.save()
    return result
}

let userList = async () => {
    const userinfo = await Users.find()
    return userinfo
}
module.exports = {
    loginUser,
    userRegistration,
    userList
};