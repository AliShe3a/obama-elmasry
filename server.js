const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://brash-stilton.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
console.log("==================================");
console.log("1");
console.log("2");
console.log("3");
console.log("=========> Bot Online <=========");
console.log("========> TestBot <========");
console.log("=======> Token Bot **** <=======");
console.log("3");
console.log("2");
console.log("1");
console.log("====================================");
console.log("Bot Online 24/7");
///
//الاكواد

client.on("message", message => {
  //Tyler,weso
  //
  if (message.content.startsWith(prefix + "server Shop role")) {
    //Tyler,Weso
    if (message.author.bot) return; //Baron#1500
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("<a:off:647115773537419270>| **ليس لديك صلاحيات**");
    //دى بقا الرتب ال انت عاوزو يعملها
    let roleowner = message.guild.roles.find(r => r.name === "Owner");
    if (!roleowner) {
      message.guild.createRole({
        name: "Owner",
        color: "RANDOM",
        position: 1,
        hoist: true,
        permissions: "ADMINISTRATOR"
      });
    }
    let rolefounder = message.guild.roles.find(r => r.name === "Founder");
    if (!rolefounder) {
      message.guild.createRole({
        name: "Founder",
        color: "RANDOM",
        position: 2,
        hoist: true,
        permissions: [
          "CREATE_INSTANT_INVITE",
          "KICK_MEMBERS",
          "BAN_MEMBERS",
          "MANAGE_CHANNELS",
          "ADD_REACTIONS",
          "VIEW_AUDIT_LOG",
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "SEND_TTS_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "MANAGE_NICKNAMES"
        ]
      });
    }
    let rolehelper = message.guild.roles.find(r => r.name === "helper");
    if (!rolehelper) {
      message.guild.createRole({
        name: "helper",
        color: "RANDOM",
        position: 3,
        hoist: true,
        permissions: [
          "CREATE_INSTANT_INVITE",
          "KICK_MEMBERS",
          "ADD_REACTIONS",
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "MANAGE_NICKNAMES"
        ]
      });
    }
    let roleDiscordstaff = message.guild.roles.find(
      r => r.name === "Discord Staff"
    );
    if (!roleDiscordstaff) {
      message.guild.createRole({
        name: "Discord Staff",
        color: "RANDOM",
        postion: 4,
        hoist: true,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "DEAFEN_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MENTION_EVERYONE",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME"
        ]
      });
    }
    let rolestaff = message.guild.roles.find(r => r.name === "Staff");
    if (!rolestaff) {
      message.guild.createRole({
        name: "Staff",
        color: "RANDOM",
        postion: 5,
        hoist: true,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "MANAGE_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME"
        ]
      });
    }
    let roletest111 = message.guild.roles.find(r => r.name === "New Staff");
    if (!roletest111) {
      message.guild.createRole({
        name: "New Staff",
        color: "RANDOM",
        postion: 6,
        hoist: true,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "MUTE_MEMBERS",
          "READ_MESSAGE_HISTORY",
          "MOVE_MEMBERS",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });
    }
    let roletrailhelper = message.guild.roles.find(
      r => r.name === "Trail Helper"
    );
    if (!roletrailhelper) {
      message.guild.createRole({
        name: "Trail Helper",
        color: "RANDOM",
        postion: 7,
        hoist: true,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",

          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });
      message.guild.createRole({
        name: "مسؤل التشهير",
        color: "RANDOM",
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",

          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });

      message.guild.createRole({
        name: "Partners",
        color: "RANDOM",
        postion: 7,
        permissions: [
          "VIEW_CHANNEL",
          "READ_MESSAGES",
          "SEND_MESSAGES",
          "EMBED_LINKS",
          "ATTACH_FILES",
          "CONNECT",
          "SPEAK",
          "READ_MESSAGE_HISTORY",
          "USE_VAD",
          "CHANGE_NICKNAME",
          "ADD_REACTIONS"
        ]
      });
      message.guild.createRole({
        name: "Vionm",
        color: "RANDOM",
        postion: 7,
        permissions: []
      });

      message.channel.send(message.member + "**جارى انشاء الرتب**").then(m => {
        setTimeout(() => {
          m.edit("**تم انشاء الرتب بنجاح**");
        }, 3000);
      });
    }
  }
});
client.on("message", message => {
  let roletest111 = message.guild.roles.find(r => r.name === "test111");
  let roleowber = message.guild.roles.find(r => r.name === "Owner");
  let rolefounder = message.guild.roles.find(r => r.name === "Founder");
  let rolehelper = message.guild.roles.find(r => r.name === "Helper");
  let roleDiscordstaff = message.guild.roles.find(
    r => r.name === "Discord Staff"
  );
  let rolestaff = message.guild.roles.find(r => r.name === "Staff");
  let roletraihelper = message.guild.roles.find(r => r.name === "Trail Helper");

  let roles = message.guild.roles.find(
    all => all.name === "مسؤل التشهير",
    "Partners",
    "Vionm",
    "New S",
    "Super s"
  );
});

client.on("message", message => {
  let roleyoutuber = message.guild.roles.find(r => r.name === "Founder");
  let rolepubg = message.guild.roles.find(r => r.name === "مسؤل التشهير");
  let rolecsgo = message.guild.roles.find(r => r.name === "Partners");
  let rolecd = message.guild.roles.find(r => r.name === "Vionm");
  let roleow = message.guild.roles.find(r => r.name === "VIP S");
  let rolemc = message.guild.roles.find(r => r.name === "Super S");
  let rolelol = message.guild.roles.find(r => r.name === "New S");

  let roles = message.guild.roles.find(
    all => all.name === "Owner",
    "Founder",
    "Helper",
    "Discord Staff",
    "Staff",
    "New Staff",
    "Trail Helper"
  );

  if (message.content.startsWith(prefix + "server Shop room")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("<a:d6:622838885365579826> | **ليس لديك صلاحيات**");
    if (!roles)
      return message.reply(
        "**من فضلك قم بانشاء الرتب اولا اكتب v!server Shop role**"
      ); //Baron#1500
    if (roles) {
      //Baron#1500
      message.reply("**جارى انشاء الرومات**").then(c => {
        //Baron#1500
        setTimeout(() => {
          c.edit("**تم انشاء الرومات بنجاح**"); //Baron#1500
        }, 10000);
      });

      message.guild
        .createChannel(`اثــبــت-نــفــســك 💕`, "category")
        .then(tb => {
          //Baron#1500
          message.guild
            .createChannel("اثــبــت・نــفــســك", "text")
            .then(nws => {
              nws.setParent(tb);
              nws.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false,
                MENTION_EVERYONE: false //Baron#1500
              });
            });
        });

      message.guild
        .createChannel(`${message.guild.name}`, "category")
        .then(tb => {
          //Baron#1500
          message.guild.createChannel("•-أخــبــار", "text").then(wlc => {
            wlc.setParent(tb);
            wlc.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            }); //Baron#1500
            wlc.overwritePermissions(rolefounder, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            });
          }); //Baron#1500
          message.guild.createChannel("•-الــنــصـابـيـن", "text").then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(message.guild.id, {
              //Baron#1500
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            });
            ch.overwritePermissions(roleowner, {
              //Baron#1500
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false //Baron#1500
            });
          });
          message.guild.createChannel("•-انــجــاز", "text").then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false, //Baron#1500
              MENTION_EVERYONE: false
            });
            ch.overwritePermissions(roleowner, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            }); //Baron#1500
          });
          message.guild.createChannel("•-الــتـصويــت", "text").then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(rolecd, {
              SEND_MESSAGES: true, //Baron#1500
              MENTION_EVERYONE: false
            });
            ch.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            }); //Baron#1500
          });
          message.guild.createChannel("الــرتــب", "text").then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(roleow, {
              SEND_MESSAGES: false, //Baron#1500
              MENTION_EVERYONE: false
            });
            ch.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            }); //Baron#1500
          });
        });

      message.guild
        .createChannel(`أســعــار • الاعــلانــات`, "category")
        .then(tb => {
          message.guild
            .createChannel("أســعــار・الاعــلانــات", "text")
            .then(ch => {
              //Baron#1500
              ch.setParent(tb);
              ch.overwritePermissions(roleow, {
                SEND_MESSAGES: false, //Baron#1500
                MENTION_EVERYONE: false
              });
              ch.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false,
                MENTION_EVERYONE: false
              }); //Baron#1500
            });

          message.guild.createChannel("・الاعــلانــات", "text").then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(roleow, {
              SEND_MESSAGES: false, //Baron#1500
              MENTION_EVERYONE: false
            });
            ch.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            }); //Baron#1500
          });
        });

      message.guild.createChannel(`بوست`, "category").then(tb => {
        message.guild;
        message.guild.createChannel(" ・بـــوســت", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: false, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
      });
      message.guild.createChannel(`الــمـتـجـر`, "category").then(tb => {
        //Baron#1500
        message.guild
          .createChannel("الــمـتـجـر・الممــيـز", "text")
          .then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(roleow, {
              SEND_MESSAGES: false, //Baron#1500
              MENTION_EVERYONE: false
            });
            ch.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            }); //Baron#1500
          });
        message.guild
          .createChannel("الــمـتـجـر・الــعـادي", "text")
          .then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(roleow, {
              SEND_MESSAGES: false, //Baron#1500
              MENTION_EVERYONE: false
            });
            ch.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            }); //Baron#1500
          });
        message.guild.createChannel("•-الــطــلـبـات", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: false, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        message.guild.createChannel("تــم・بــيـع", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: false, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
      });

      message.guild.createChannel(`•الـــعــام`, "category").then(tb => {
        //Baron#1500
        message.guild.createChannel("هـــدايــا・الـشـات", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: false, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        message.guild.createChannel("الــشــات・الــعــام", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: true, //Baron#1500
            MENTION_EVERYONE: true
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: true
          }); //Baron#1500
        });
        message.guild.createChannel("اوامـــر・الــبــوت", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: true, //Baron#1500
            MENTION_EVERYONE: true
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: true
          }); //Baron#1500
        });
        message.guild.createChannel("طــلـب・وســيـط", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: true, //Baron#1500
            MENTION_EVERYONE: true
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        //انزل تحت اقفل القفلة بليز
        message.guild.createChannel("・الــصــور", "text").then(ch => {
          //Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: false, //Baron#1500
            MENTION_EVERYONE: false
          });
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: false
          }); //Baron#1500
        });
        message.guild.createChannel(`GIVEAWAYS`, "category").then(tb => {
          message.guild.createChannel("مــســابـقــات", "text").then(ch => {
            //Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(roleow, {
              SEND_MESSAGES: false, //Baron#1500
              MENTION_EVERYONE: false
            });
            ch.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              MENTION_EVERYONE: false
            });
          });
          message.guild
            .createChannel("مــســابـقــات-・مـدفــوعـه", "text")
            .then(ch => {
              //Baron#1500
              ch.setParent(tb);
              ch.overwritePermissions(roleow, {
                SEND_MESSAGES: false, //Baron#1500
                MENTION_EVERYONE: false
              });
              ch.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false,
                MENTION_EVERYONE: false
              });
            });
        });
      });

      message.guild.createChannel(`» Privates | خآص .`, "category").then(tb => {
        //Baron#1500
        message.guild.createChannel(`» Single.`, "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(1);
        }); //Baron#1500
        message.guild.createChannel("» Doubles.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(2);
        }); //Baron#1500
        message.guild.createChannel("» Triples.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(3);
        }); //Baron#1500
        message.guild.createChannel("» Forth.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(4);
        }); //Baron#1500
        message.guild.createChannel("» Classic.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(10);
        }); //Baron#1500
        message.guild.createChannel("» Group.", "voice").then(ch => {
          ch.setParent(tb);
          ch.setUserLimit(15);
        });
      });
    }
  }
});

//////////////////////////////////////////cr////////////////////////////////////

const d = ["634496793211568138", "511234899655786503", "368537351984513025"];
client.on("message", message => {
  let alias = message.content.split(" ")[0].substring(prefix.length);
  let mention = message.mentions.users.first() || message.author;
  if (alias === "cr") {
    let args = message.content.split(" ");
    if (!d.includes(message.author.id)) return;
    let args1 = message.content.split(" ").slice(1);
    if (args1 < 1) return message.reply("Write a number");
    if (!profile[mention.id]) return;
    if (!d.includes(message.author.id)) return;
    else profile[mention.id].credits += +args[1]; //
    fs.writeFileSync("./profile.json", JSON.stringify(profile));

    message.channel.send(`Adedd Money For : \`${args[1]}\`**.**`);
  }
});

const profile = JSON.parse(fs.readFileSync("./profile.json"));
var time = require("./time.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!profile[author])
    profile[author] = {
      credits: 0
    };
  fs.writeFileSync("./profile.json", JSON.stringify(profile, null, 4));
  if (profile[message.author.id].blacklist === true) return undefined;
  if (
    args[0].toLowerCase() == `${prefix}credit` ||
    args[0].toLowerCase() === `${prefix}credits`
  ) {
    const mention =
      message.mentions.users.first() ||
      client.users.get(args[1]) ||
      message.author;
    const mentionn =
      message.mentions.users.first() || client.users.get(args[1]);
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, your <a:cr:647115746563981313> balance is \`$${profile[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2])) return message.channel.send(`**:x: | Error**`);
      if (args[2] < 1) return message.channel.send(`**:x: | Error**`);
      if (mention.bot) return message.channel.send(`**:x: | Error**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:x: | Error**`);
      if (args[2] > profile[author].credits)
        return message.channel.send(
          `**:x: | Error , You Don't Have Enough Credit**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
      if (args[2].includes(".")) return message.channel.send(`**:x: | Error**`);
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
      let canvas = Canvas.createCanvas(150, 50);
      let ctx = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/606837977532071957/608449967199354881/20190807_010123.jpg"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      let url = message.author.displayAvatarURL.endsWith(".webp")
        ? message.author.displayAvatarURL.slice(5, -20) + ".gif"
        : message.author.displayAvatarURL;
      jimp.read(url, (err, ava) => {
        if (err) return console.log(err);
        ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
          if (err) return console.log(err);
          ctx.font = "sans-serif";
          ctx.fontSize = "100px";
          ctx.fillStyle = "#ffffff";
          message.channel
            .send(
              `**${message.author.username}, You Will Trans \`$${
                args[2]
              }\` To ${mentionn} 
If You Want To Complete Trans Type: **`
            )
            .then(essss => {
              ctx.fillText(num, canvas.width / 2.4, canvas.height / 1.7);
              message.channel.sendFile(canvas.toBuffer()).then(m => {
                message.channel
                  .awaitMessages(r => r.author.id === message.author.id, {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    if (collected.first().content === num) {
                      message.channel.send(
                        `**:moneybag: | ${
                          message.author.username
                        }, Done Trans \`$${args[2]}\` To ${mentionn}**`
                      );
                      mention.send(
                        `**:money_with_wings: | Transfer Receipt** \`\`\`You Have Received $${
                          args[2]
                        } From User ${message.author.username}; (ID (${
                          message.author.id
                        })\`\`\``
                      );
                      m.delete();
                      essss.delete();
                      profile[author].credits += Math.floor(-args[2]);
                      profile[mentionn.id].credits += Math.floor(+args[2]);
                      fs.writeFileSync(
                        "./profile.json",
                        JSON.stringify(profile, null, 4)
                      );
                    } else {
                      m.delete();
                      essss.delete();
                    }
                  });
              });
            });
        });
      });
    } else {
      message.channel.send(
        `**:x: | Error , Please Command True Ex: \`${prefix}creditt [MentionUser] [Balance]\`**`
      );
    }
  }
  if (args[0].toLowerCase() === `${prefix}daily`) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**<a:iwooew:647115703144677386> | ${
          message.author.username
        }, Please Wait \`(${pretty(times, {
          verbose: true
        })})\` To Take Your Daily Again.**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      profile[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**<a:647081557500362792:647115720013905930>| ${message.author.username}, Done You Have Take Your Daily \`$${ammount}\`**`
      );
      fs.writeFile("./profile.json", JSON.stringify(profile), function(e) {
        if (e) throw e;
      });
    }
  }
});

//////////////////////////////mu///////////////////////////////////////

const PREFIX = "v!";

// k تعالا سيرفر

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("         [Wait please .. ]       ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
client.on("ready", () => {
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log("[           BOT IS ONLINE         ]");
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log("[        info         ]");
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
});

client.on("disconnect", () =>
  console.log(
    "I just disconnected, making sure you know, I will reconnect now..."
  )
);

client.on("reconnecting", () => console.log("I am reconnecting now!"));

client.on("message", async msg => {
  // eslint disable line
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);

  if (msg.content.startsWith(`${prefix}play`)) {
    console.log(
      `${msg.author.tag} has been used the ${prefix}play command in ${msg.guild.name}`
    );

    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "❌ Error",
              value:
                "I'm sorry but you need to be in a voice channel to play music!"
            }
          ]
        }
      });
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "❌ Error",
              value:
                "I cannot connect to your voice channel, make sure I have the proper permissions!"
            }
          ]
        }
      });
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "❌ Error",
              value:
                "I cannot speak to your voice channel, make sure I have the proper permissions!"
            }
          ]
        }
      });
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "✅ Added playlist",
              value: `Playlist: **${playlist.title}** has been added to the queue!`
            }
          ]
        }
      });
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          msg.channel
            .send({
              embed: {
                color: 15158332,
                fields: [
                  {
                    name: "📋 Song selection",
                    value: `${videos
                      .map(video2 => `\`${++index}\` **-** ${video2.title}`)
                      .join("\n")}`
                  },
                  {
                    name: "You have 10 seconds!",
                    value:
                      "Provide a value to select on of the search results ranging from 1-10."
                  }
                ]
              }
            })
            .then(message => {
              message.delete(20000);
            });
          // eslint-disable-next-line max-depth
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 10000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel
              .send({
                embed: {
                  color: 15158332,
                  fields: [
                    {
                      name: "❌ Error",
                      value:
                        "No or invalid value entered, cancelling video selection..."
                    }
                  ]
                }
              })
              .then(message => {
                message.delete(5000);
              });
          }
          const videoIndex = response.first().content;
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel
            .send({
              embed: {
                color: 15158332,
                fields: [
                  {
                    name: "❌ Error",
                    value: "I could not obtain any search results."
                  }
                ]
              }
            })
            .then(message => {
              message.delete(5000);
            });
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }
  } else if (msg.content.startsWith(`${PREFIX}skip`)) {
    console.log(
      `${msg.author.tag} has been used the ${PREFIX}skip command in ${msg.guild.name}`
    );
    if (!msg.member.voiceChannel)
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "❌ Error",
                value: "You are not in a voice channel!"
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    if (!serverQueue)
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "❌ Error",
                value: "There is nothing playing that I could skip for you."
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    serverQueue.connection.dispatcher.end();
    return undefined;
  } else if (msg.content.startsWith(`${PREFIX}stop`)) {
    console.log(
      `${msg.author.tag} has been used the ${PREFIX}stop command in ${msg.guild.name}`
    );
    if (!msg.member.voiceChannel)
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "❌ Error",
                value: "You are not in a voice channel!"
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    if (!serverQueue)
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "❌ Error",
                value: "There is nothing playing that I could stop for you."
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Stop command has been used!");
    return undefined;
  } else if (msg.content.startsWith(`${PREFIX}volume`)) {
    console.log(
      `${msg.author.tag} has been used the ${PREFIX}volume command in ${msg.guild.name}`
    );
    if (!msg.member.voiceChannel)
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "❌ Error",
                value: "You are not in a voice channel!"
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    if (!serverQueue)
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "❌ Error",
                value: "There is nothing playing."
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    if (!args[1])
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "🔊 Volume",
                value: `The current volume is: **${serverQueue.volume}**`
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return msg.channel
      .send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "🔊 Volume",
              value: `I set the volume to: **${args[1]}**`
            }
          ]
        }
      })
      .then(message => {
        message.delete(5000);
      });
  } else if (msg.content.startsWith(`${PREFIX}np`)) {
    console.log(
      `${msg.author.tag} has been used the ${PREFIX}np command in ${msg.guild.name}`
    );
    if (!serverQueue)
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "❌ Error",
                value: "There is nothing playing that I could skip for you."
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    return msg.channel
      .send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "🎵 Now playing",
              value: `**${serverQueue.songs[0].title}**`
            }
          ]
        }
      })
      .then(message => {
        message.delete(5000);
      });
  } else if (msg.content.startsWith(`${PREFIX}queue`)) {
    console.log(
      `${msg.author.tag} has been used the ${PREFIX}queue command in ${msg.guild.name}`
    );
    if (!serverQueue)
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "❌ Error",
                value: "There is nothing playing that I could skip for you."
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    return msg.channel
      .send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "📋 Song queue",
              value: `${serverQueue.songs
                .map(song => `**- ${song.title}**`)
                .join("\n")}`
            },
            {
              name: "🎵 Now playing",
              value: `**${serverQueue.songs[0].title}**`
            }
          ]
        }
      })
      .then(message => {
        message.delete(5000);
      });
  } else if (
    msg.content.startsWith(
      `${PREFIX}hehdhfbfnjdjdkkfkfkfkkdkdkkdjddkkdkdkdkkdlp`
    )
  ) {
    console.log(
      `${msg.author.tag} has been used the ${PREFIX}help command in ${msg.guild.name}`
    );

    msg.channel
      .send("Please check your direct messages :inbox_tray:")
      .then(message => {
        message.delete(5000);
      });

    msg.react("✅");

    msg.author.send({
      embed: {
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        fields: [
          {
            name: "Bot's commands:",
            value: `**${PREFIX}help** - This message!\n\
**${PREFIX}play** - Play a song from YouTube.\n\
**${PREFIX}skip** - Skip a song.\n\
**${PREFIX}stop** - Stops the music.\n\
**${PREFIX}volume** - Change the volume of the bot.\n\
**${PREFIX}np** - The song that now playing.\n\
**${PREFIX}queue** - See the queue of songs.\n\
**${PREFIX}pause** - Pause the music.\n\
**${PREFIX}resume** - Resume the music.`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Misaka"
        }
      }
    });
  } else if (msg.content.startsWith(`${PREFIX}pause`)) {
    console.log(
      `${msg.author.tag} has been used the ${PREFIX}pause command in ${msg.guild.name}`
    );
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "⏯️ Pause",
                value: "Paused the music for you!"
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    }
    return msg.channel
      .send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "❌ Error",
              value: "There is nothing playing."
            }
          ]
        }
      })
      .then(message => {
        message.delete(2000);
      });
  } else if (msg.content.startsWith(`${PREFIX}resume`)) {
    console.log(
      `${msg.author.tag} has been used the ${PREFIX}resume command in ${msg.guild.name}`
    );

    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "⏯️ Resume",
                value: "Resumed the music for you!"
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
    }
    return msg.channel
      .send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "❌ Error",
              value: "There is nothing playing or something is already playing."
            }
          ]
        }
      })
      .then(message => {
        message.delete(5000);
      });
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send({
        embed: {
          color: 15158332,
          fields: [
            {
              name: "❌ Error",
              value: `I could not join the voice channel: ${error}`
            }
          ]
        }
      });
    }
  } else {
    serverQueue.songs.push(song);
    if (playlist) return undefined;
    else
      return msg.channel
        .send({
          embed: {
            color: 15158332,
            fields: [
              {
                name: "✅ Added song",
                value: `**${song.title}** has been added to the queue!`
              }
            ]
          }
        })
        .then(message => {
          message.delete(5000);
        });
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", () => {
      console.log("Song ended.");
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.log(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel
    .send({
      embed: {
        color: 15158332,
        fields: [
          {
            name: "✅ Start playing",
            value: `Start playing: **${song.title}**`
          }
        ]
      }
    })
    .then(message => {
      message.delete(5000);
    });
}

client.on("message", message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.author.id !== "439187325503930369") return;

  if (message.content.startsWith(PREFIX + "setstream")) {
    client.user.setGame(argresult, "https://www.twitch.tv/darkknite55");
    console.log("test" + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`);
  }

  if (message.content.startsWith(PREFIX + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.sendMessage(`Username Changed To **${argresult}**`);
    return message.reply("You Can change the username 2 times per hour");
  }
  if (message.content.startsWith(PREFIX + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.sendMessage(
      `Avatar Changed Successfully To **${argresult}**`
    );
  }
});
client.login("NjQ2NDgxMjYzNTQ0MjM4MTEw.XfRkGA.EvRHnp03p6__xC10ss4D4Yi5MN8");
