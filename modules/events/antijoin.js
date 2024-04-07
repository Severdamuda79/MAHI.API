module.exports.config = {
 name: "antijoin",
 eventType: ["log:subscribe"],
 version: "1.0.0",
 credits: "D-Jukie",
 description: "set hone ke bad new member ko group me rehne nhi dega"
};

module.exports.run = async function ({ event, api, Threads, Users }) {
 	let data = (await Threads.getData(event.threadID)).data
 	if (data.newMember == false) return;
 	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) return
    else if(data.newMember == true) {
    var memJoin = event.logMessageData.addedParticipants.map(info => info.userFbId)
			for (let idUser of memJoin) {
					await new Promise(resolve => setTimeout(resolve, 1000));
					api.removeUserFromGroup(idUser, event.threadID, async function (err) {
                        if (err) return data["newMember"] = false;
                            await Threads.setData(event.threadID, { data });
                              global.data.threadData.set(event.threadID, data);
                    })
			}
 	return api.sendMessage(`» 𝘆𝗼𝘂𝗿 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗰𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆 𝗶𝗻 𝗮𝗻𝘁𝗶 𝗷𝗼𝗶𝗻 𝗺𝗼𝗱𝗲, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝘂𝗿𝗻 𝗶𝘁 𝗼𝗳𝗳 𝗯𝗲𝗳𝗼𝗿𝗲 𝘃𝗮𝗹𝗶𝗱𝗮𝘁𝗶𝗻𝗴 𝗡𝗲𝘄 𝗠𝗲𝗺𝗯𝗲𝗿 👻`, event.threadID);
 }
}