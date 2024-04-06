const fs = require("fs");
module.exports.config = {
	name: "Aryan",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ABDUL")==0 || event.body.indexOf("ABDUL")==0 || event.body.indexOf("Abdul")==0 || event.body.indexOf("@Mɽ Hʋŋteɽ")==0) {
		var msg = {
				body: "हेलो बेबी मुझे अब्दुल खान ने बनाया है। 🙂🌍🌸",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }