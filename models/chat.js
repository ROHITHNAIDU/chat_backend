const Chat = require("../schemas/chat");

//function to add chat data
let chatInsert = async (params) => {
    let query = {
        user: {
            _id: params.sender_id
        },
        receiver_id: params.receiver_id, 
        sender_id: params.sender_id,
        createdAt: params.chatdate,
        text: params.text
    }
    let add = new Chat(query)
    let result = await add.save()
    return result
}

//function to list chat
let getChatList = async (params) => {
    let result = await Chat.find(
        { 
            $or: [
                 {
                     $and: [{ receiver_id:params.receiver_id}, {sender_id:params.sender_id}]
                 },
                 {   
                     $and: [{ receiver_id:params.sender_id}, {sender_id:params.receiver_id}] 
                 }
                ]
            }).sort({"createdAt":-1})
    return result
}

module.exports = {
    chatInsert,
    getChatList
};