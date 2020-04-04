const Discord = require("discord.js");
const myid = ['Your ID']
const client = new Discord.Client();


client.login("Njk1ODQwNjk5NzY0OTY1Mzg2.XogEeg.crmbswpVWASN1OKgCVWRJoLHFi8");




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

  if (message.content === '$hilala') {

    const sleep = require('util').promisify(setTimeout);
    (async function main() {
      let i = 10;
      while (i--) {
        message.channel.send(makeid(5));
        if(i % 2 === 0 )  message.channel.send(makeid(5) + "  " +makeid(i));
        await sleep(1000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


