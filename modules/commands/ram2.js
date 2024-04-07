const fs = require("fs");
module.exports.config = {
	name: "jai shree ram",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "ABHISHEK", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("As") ||
     react.includes("Assalamu o alaikum") || react.includes("assalamu alaikum") || react.includes("Assalamu") ||
react.includes("ASSALAMU ALAIKUM") ||react.includes("🇸🇦") ||
react.includes("Assalam alikum")) {
		var msg = {
				body: `【  WALIKUM ASSALAM 🇸🇦🇸🇦😍_________________❤️🇸🇦  】`,attachment: 
fs.createReadStream(__dirname + `/noprefix/ram.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇸🇦", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
