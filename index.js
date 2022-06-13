const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});



const Discord = require("discord.js")

const Screenshoter = require("discord-screenshot");

const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("idle");
client.user.setActivity('Hello !', { type: 'WATCHING' });
});

const Database = require("./utils/accounts")
const DatabaseU = require("./utils/users")
const mongoose = require("mongoose");
const accounts = require("./utils/accounts");

const devs = ["746838966296117400","947825706593812500"];

let prefix = '!';

let Price1 = 26316;
let Price2 = 25000;


client.mongoose = require("./db")

client.on("message" , async message => {
let args = message.content.split(" ")

if(args[0].toLowerCase() === "!buy") {
 if (!args[1]) return message.reply("!buy visa")
 if (args[1] === "visa"){

 

/*if (message.member.roles.cache.find(r => r.name === "Server Booster")) {
      Price1 = 6316;
  Price2 = 6000;
    } else {
     Price1 = 7369;
 Price2 = 7000;
    }*/

const userData = await DatabaseU.findOne({id:message.author.id}) || await new DatabaseU({_id: mongoose.Types.ObjectId(),id:message.author.id}).save();
if(userData.isBuy) return message.channel.send("You are already in a buy collection")

let accounts = await Database.find({ guildId:message.guild.id })
if(accounts.length < 1) return message.channel.send("There's no accounts in our shop try again later")

await DatabaseU.updateOne({id:message.author.id},{isBuy:true})

let msgg = `:moneybag: | ${message.author.username}, has transferred \`$${Price2}\` to <@!746838966296117400>`
const res = response => response.content.includes(msgg) && response.author.id === "567703512763334685" || response.content === "$delete"

message.channel.send(new Discord.MessageEmbed().setColor('GOLD').setDescription(`**\`\`\`js
You Have 4 Minutes To Type ↓
#credits <@!746838966296117400> ${Price1}\`\`\`**`))
.then(() => {
message.channel.awaitMessages(res, { max: 1, time: 240000, errors: ['time'] })
.then(async collected => {
if(collected.first().content === "$delete") return;
let arr = []

accounts.forEach(account => {
arr.push(`${account.email}`)
})

let result = arr[Math.floor(Math.random() * arr.length)]

message.author.send(`||${result}||

اسم الفيزا : Ahmed kamal
 البلد : Egypt
الشارع : Helwan
المنطقة : Helwan
eltbin
State: Maadi
zip code / postel code :11912

https://youtu.be/OCpW5uYdX3w طريقة التفعيل : 
لو سعودي افتح vpn 
لما تستخدمهم عرفني اقفل التيكت وماتنساش تسيب رأيكـ هنا ♥️
<#985592603384877107>`)

let lastValue = result.split(":")
await Database.findOneAndDelete({email:lastValue[0]})

message.channel.send("Check your dm.")

let photo = Screenshoter.screenshot(`https://discord.com/channels/@me/${message.author.id}`)

const channel = message.guild.channels.cache.get("985592732418473994")
channel.send(`**تم تسليم فيزا لـ <@!${message.author.id}>**`)

let clientRole =  message.guild.roles.cache.find(role => role.name === "・عميل");


let member = message.guild.members.cache.get(message.author.id);
member.roles.add(clientRole)
await DatabaseU.updateOne({id:message.author.id},{isBuy:false})


})
.catch(async err => {
console.error(err)
message.channel.send("Time ended please try again")
await DatabaseU.updateOne({id:message.author.id},{isBuy:false})
});
});


 }}else if(args[0].toLowerCase() === "!addvisa") {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return;
let accounts = message.content.split(" ")
accounts = accounts[1].split(",")

let arr = []

for(let account of accounts) {
arr.push(account)
let accountData = account.split(":")
await new Database({_id: mongoose.Types.ObjectId(),guildId:message.guild.id, addedById:message.author.id,email:accountData[0]}).save();
}

message.channel.send(`Done added ${arr.length} Visa`)

}else if(args[0].toLowerCase() === "!stock") {
Database.count({}, function( err, count){
message.channel.send({embed:{color:"GREEN",description:"there's " + count + " in stock"}})
})

}

})




client.on('message', async message => {
    if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  const args = message.content.slice(prefix.length).trim().split(' ');

  if (message.content.startsWith(prefix + 'give')){

  if (!devs.includes(message.author.id)) return;


  let user = message.guild.members.cache.get(args[1]) || message.mentions.members.first();

  if (!user) return message.reply("**You Should Mention Someone**")

   let accounts = await Database.find({ guildId:message.guild.id })
if(accounts.length < 1) return message.channel.send("There's no visa in our shop try again later")
               
               
                    message.channel.send(new Discord.MessageEmbed().setColor('GOLD').setDescription(`** ${user} \`\`\`js
Your Visa In Your Dm :>\`\`\`**`))


                
              
let arr = []

accounts.forEach(account => {
arr.push(`${account.email}`)
})

let result = arr[Math.floor(Math.random() * arr.length)]

message.author.send(`||${result}||

اسم الفيزا : Ahmed kamal
 البلد : Egypt
الشارع : Helwan
المنطقة : Helwan
eltbin
State: Maadi
zip code / postel code :11912

https://youtu.be/OCpW5uYdX3w طريقة التفعيل : 
لو سعودي افتح vpn 
لما تستخدمهم عرفني اقفل التيكت وماتنساش تسيب رأيكـ هنا ♥️
<#985592603384877107>`)

let lastValue = result.split(":")
await Database.findOneAndDelete({email:lastValue[0]})

let roleW = message.guild.roles.cache.find(role => role.name === "・عميل");

user.roles.add(roleW);

client.channels.cache.get("985592732418473994").send(`**تم تسليم فيزا لـ ${user}**`);

                    
                }})





                

client.on('message', async message => {
  if (message.author.bot) return;
if (message.channel.type == "dm") return;

const args = message.content.slice(prefix.length).trim().split(' ');

if (message.content.startsWith(prefix + 'rstock')){

  if (!devs.includes(message.author.id)) return;
  

  accounts.deleteMany({ }, function(err) {
    if (!err) {
      message.channel.send("Done Deleted All Visa")

            message.type = 'notification!';
    }
    else {
            message.type = 'error';
    }
});




}})



client.mongoose.init()


client.login(process.env.token);

require('./server.js')()
