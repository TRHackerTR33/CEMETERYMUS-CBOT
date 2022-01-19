module.exports = (client, message, query) => {
    message.channel.send(`**${client.emotes.error} - ${query} Bu Kelime İçin YouTube Üzerinde Sonuç Bulunamadı!**`);
};