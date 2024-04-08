const fs = require("fs");
module.exports.config = {
	name: "barfi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Sana",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("SANA")==0 || event.body.indexOf("Sana")==0 || event.body.indexOf("Sana Shaikh")==0 || event.body.indexOf(".@Sana Shaikh")==0) {
		var msg = {
				body: "💝 YE  HSI SANA ABDUL KI BESTIE 🧀\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 𝐌𝐑..𝐀𝐁𝐃𝐔𝐋❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Sana.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
