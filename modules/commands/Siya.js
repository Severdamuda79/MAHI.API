const fs = require("fs");
module.exports.config = {
	name: "Siya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "haniya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sana Baby")==0 || event.body.indexOf("@Sana Shaikh")==0 || event.body.indexOf("sana")==0 || event.body.indexOf("Abdul ki babu")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐒𝐈𝐘𝐀 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
				attachment: fs.createReadStream(__dirname + `/cache/Sana.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }