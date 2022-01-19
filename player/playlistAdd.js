module.exports = (client, message, queue, playlist) => {
    message.channel.send(`**${client.emotes.music} - ${playlist.title} Müzik Çalma Sırasına Eklendi! \`(${playlist.tracks.length} Toplam Şarkı)\`**`);
};