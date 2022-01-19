module.exports = (client, message, queue) => {
    message.channel.send(`**${client.emotes.error} - Bulunduğum Sesli Kanal İle Bağlantım Kesildiği İçin Müzik Durdu!**`);
};