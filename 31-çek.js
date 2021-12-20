const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = async(client, message, args) => {

      var doller = ['0','1','2','3','4','5','6','7','8','9','10',];
      var dol = doller[Math.floor(Math.random() * doller.length)];

    message.channel.send(`**31 Çektin!** ${dol} Spermin aktı.`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '31-çek', 
  description: '',
usage: "31-çek"
};
