module.exports = (client, message, queue) => {
    message.channel.send(`**${client.emotes.error} - Bulunduğum Sesli Kanalda Kimse Bulunmadığı İçin Kanaldan Ayrıldım ve Müzik Durdu!**`);
};