const Discord = require("discord.js");
const myid = ['Your ID']
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();

client.login("Njk1Mzc1MTgxNjg1OTgxMjY0.XofFWA.lzSyyc-cKrugCJWoMWJ91W0b8nU");
client2.login("Njk1ODEzNDUxMTU0NDU2NjM2.Xofpfg.K4Iujr0ad6bEiwvTMsOVsi9Q4bw");
client3.login("Njk1ODE0Mjc5MzIwMDQzNTMw.XofpqQ.wcld3N8wAsAfD8KcDZEdIbxY9G8");
client4.login("Njk1ODE3MDUzNjA4ODY5OTEw.XofsSw.iEly_QlYtJlkYmXlu8xr_SLTZtA");
client5.login("Njk1ODE5NjA0MDc3MDUxOTM0.Xofuzw.YU9rkgAUBdpvl21tnPcISyuJtNI");
client6.login("Njk1ODIwMzI0NDc3OTkyOTcx.XofvlA.q_iVOOXd-sQXsorZhp0RQJC0T3I");
client7.login("Njk1ODIxMzQ5NTk5NTc2MTA0.XofwIw.Dnw639lm4GMva6OgKhGXlm8gMDU"); 
client8.login("Njk1ODIxOTEzNDE4NjI5MTUw.Xofw4w.LvFCzCYFD4d5SF2UX4Lxh3HgnrM"); 
client9.login("Njk1ODIyNzU3NTY4NDQ2NDc1.XofxoQ.0jCslHVSnDucxJweQ64nHdLEO3s"); 
client10.login("Njk1ODIzNDYyMDUyMTM1MDMy.XofyPA.ASbXJFhpopKx2MNdAT9NSbpW81o");



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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});



client2.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});




client3.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});





client4.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});




client5.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});



client6.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});





client7.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});



client8.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});




client9.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
      }
    }());

      
    }
    if(message.content === '!rep'){
      message.channel.send("#rep "+"<@" + myid + ">")
  }

});





client10.on('message', message => {
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
        if(i % 2 != 0 )  message.channel.send(makeid(5) + "  " + makeid(i));
        await sleep(8000);
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


