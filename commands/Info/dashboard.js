const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
const websiteSettings = require("../../dashboard/settings.json");
module.exports = {
  name: "dashboard", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Info",
  usage: "dashboard",
  aliases: ["dash"],

  cooldown: 1, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "Sends a Link of the Dashboard", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
    try {
      message.reply({
        embeds: [
          new MessageEmbed()
          .setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
         .setTitle(` <a:white_check:945487958356664392> __***Links Hereby Depict :***__
          `)
          .setDescription(`> <a:special_arrow:945549299620663296> **Website:** <a:stats:945574361388171274> ${websiteSettings.website.domain}/\n\n> <a:special_arrow:945549299620663296> **Dashboard:** <a:setting:945541701349564449> ${websiteSettings.website.domain}/dashboard\n\n> <a:special_arrow:945549299620663296> **ServerQueues:** <a:djpartys:945543961257332757> ${websiteSettings.website.domain}/queuedashboard\n\n> <a:special_arrow:945549299620663296> **Current Queue:** <a:djpartys:945543961257332757> ${websiteSettings.website.domain}/queue/${message.guild.id}`)
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
