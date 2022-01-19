module.exports = (client, message, query, tracks) => {
    message.channel.send(`**${client.emotes.error} - Lütfen Çalmasını İstediğin Müziğin Sıra Numarasını Yaz | Müzik Seçmediğin İçin Komutu Tekrar Kullanman Gerekli!**`);
};