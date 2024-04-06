const fs = require("fs");
module.exports.config = {
	name: "chiku3",
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
	if (event.body.indexOf("@Th'Əw Cʜɩĸʋ ßwßīīe Pīī'ew")==0 || event.body.indexOf("Abdul")==0 || event.body.indexOf("ABDUL")==0 || event.body.indexOf("ABDUL KHAN")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐀𝐁𝐃𝐔𝐋 𝐁𝐀𝐁𝐔 𝐉𝐈 𝐀𝐀 𝐆𝐀𝐘𝐄🙈",
				attachment: fs.createReadStream(__dirname + `/cache/Abdul.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }