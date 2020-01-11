const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Watching you...");
});

client.on('message', msg => {
////////////////////////////////////////////////////////////////////////////////

if(msg.content.includes('s!commands')){
   msg.channel.send({embed: {
      color: 3447003,
      title: "Command List:",
      fields: [
        { name: "Command", value: "creep\naiab\ndie\nhey", inline: true},
        { name: "Description", value: "Responds to the word 'creep'\ndecides if your are a bitch or not\nresponds to the word 'die'\nResponds to the word 'hey'", inline: true}
      ]
    }
  });
  }

////////////////////////////////////////////////////////////////////////////////

  if(msg.content.includes('creep')){
     msg.reply("Did you call me a CREEP?!", {files: ["./images/creep.png"]});
    }

  if(msg.content.includes('aiab')) {
       answers = [
          "Yes you are a bitch",
          "No you are not a bitch",
          "You might be a bitch",
       ]

       msg.channel.send(msg.author + " " + answers[Math.floor(Math.random() * answers.length)])

     }

  if(msg.content.includes("die")) {
     msg.channel.send(message.author + " No u die")
    }

  if(msg.content.includes("hey")) {
     msg.channel.send(msg.author + " Hello there, I have been waiting for you and I think i love you!")
    }

////////////////////////////////////////////////////////////////////////////////
});

client.login('NDc5NjkxNzY5Nzk4MTk3MjUw.XhfnyA.iitYfl27x8KZ5ObymXHfRC3-4Hk');
