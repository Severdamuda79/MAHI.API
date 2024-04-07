module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "leave by itself" : "kicked by the administrator";
 if (type == "data attechment") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝗡𝗮𝗵𝗶.. 𝗞𝗮𝗿 𝗥𝗮𝗵𝗶 𝗔𝗯 𝗠𝗲 𝗧𝘂𝗷𝗵𝗲 𝗔𝗱𝗱 ${name} 𝗝𝗮 𝗦𝗶𝗺𝗿𝗮𝗻 𝗝𝗲𝗲 𝗟𝗲 𝗔𝗽𝗻𝗶 𝗭𝗶𝗻𝗱𝗮𝗴𝗶 😁 `, event.threadID)
   } else api.sendMessage(`𝗟𝗼 𝗣𝗵𝗶𝗿 𝗔𝗱𝗱 𝗞𝗮𝗿 𝗗𝗶𝘆𝗮 𝗧𝘂𝗺𝗲 😏 ${name} 𝗕𝗮𝘁𝗮𝗼 𝗞𝘆𝗮 𝗨𝗸𝗵𝗮𝗱 𝗟𝗼 𝗚𝗲 𝗠𝗲𝗿𝗮 .😹 `, event.threadID);
  })
 }
}
