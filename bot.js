const Discord = require("discord.js");
const myid = ['Your ID']
const client = new Discord.Client();


client.login(process.env.TOKEN);




client.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }

  if (message.content === '$spam') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 9000; x++) {
      message.channel.send(`**hilolo Zwiiiin **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
        
      }
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});



