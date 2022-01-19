module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`**${client.emotes.success} - Müzik Seçimi İptal Edildi!**`);
    } else message.channel.send(`**${client.emotes.error} - Geçerli Bir Sıra Numarası Göndermeniz Gerekli! | \`1 - ${tracks.length}\`**`);
};