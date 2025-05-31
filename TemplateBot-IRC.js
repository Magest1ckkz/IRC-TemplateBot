var config = {
	channels: [""],
	server: "",
	botName: "TemplateBot" // Change if its already taken
};

var irc = require("irc")

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});

function onMessage(from, channel, text, message){

    if(text == "t!hello"){
        bot.send("PRIVMSG", channel, "hi "+from)
    }

    if(text == "t!test"){
        bot.send("PRIVMSG", channel, "This is a testing message.")
    }
}

bot.addListener("message", onMessage)
bot.addListener("action", onMessage)

function onJoin(channel, nick, msgobj){
    if(nick.toLowerCase() == config.botName.toLowerCase()){
        console.log("Ready! The bot is now operating in the "+channel)
    }
}
bot.addListener("join", onJoin)

function onError(message){
console.log("Error:", message)
}
bot.addListener("error", onError)