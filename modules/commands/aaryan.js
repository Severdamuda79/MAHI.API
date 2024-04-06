 const fs = require("fs");
module.exports.config = {
	name: "Aaryan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Aaryan", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("@ 𝐀𝐛𝐝𝐮𝐥‣⃟ ⃝𑁍 ⃝𝐀𝐊𝐡𝐚𝐧ـ圓‣⃟𑁍") ||
     react.includes("aaryan") || 
react.includes("aryan")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗛𝗲𝗿𝗲★\n\n✦𝐌𝐫..𝐀𝐛𝐝𝐮𝐥✦\n\n☞★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  𝐌𝐫..𝐀𝐛𝐝𝐮𝐥🩷🪽✦`🥀🦋",
				attachment: fs.createReadStream(__dirname + `/noprefix/admin.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🦋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }