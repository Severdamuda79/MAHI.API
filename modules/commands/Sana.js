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
	if (event.body.indexOf("Sana Baby")==0 || event.body.indexOf("@Sana Shaikh")==0 || event.body.indexOf("Sana")==0 || event.body.indexOf("Abdul ki bestie")==0) {
		var msg = {
				body: "❤️𝐘𝐄𝐇 𝐇𝐀𝐈 𝐒𝐀𝐍𝐀 𝐀𝐁𝐃𝐔𝐋 𝐊𝐈 𝐁𝐄𝐒𝐓𝐈𝐄 🙈",
				attachment: fs.createReadStream(__dirname + `/cache/Sana.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }