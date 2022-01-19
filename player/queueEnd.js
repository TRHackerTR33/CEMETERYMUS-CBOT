module.exports = (client, message, queue) => {
    message.channel.send(`**${client.emotes.error} - Müzik Listesi Bittiği İçin Müzik Çalmayı Durdurdum!**`);
};