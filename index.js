const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

app.listen(() => console.log("Bad Start Go Go ...."));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const client = new Discord.Client({
  intents: 32767
});
///Put Here Prefix Of Ur Bot
var status = [`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`,`TNA BYPASS 2.9`, `TNA BYPASS 2.9`];
const botowner = ["901089592072085554"];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`This Bot Maked By : Mr-Nour`);
  client.user.setStatus("dnd");
  var time = Math.floor(5000);
  setInterval(function() {
    var lengthesof = status.length;
    var amounter = Math.floor(Math.random() * lengthesof);
    client.user.setActivity(status[amounter], { type: "PLAYING" });
  }, time);
});

app.post("/uptime_devtools", (req, res) => {
 console.log("uptime is run by Developer tools")
  res.send({
    msg: "done uptime",
    access: "by_devtools",
  })
})

client.login(process.env.token);

