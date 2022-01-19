module.exports = {
    name: 'shuffle',
    aliases: ['sh',"karıştır"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Şuanda Çalan Bir Müzik Yok!**`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`**${client.emotes.success} - Çalma Listesi Karıştırıldı Şarkı Sırası Değişti | \`${client.player.getQueue(message).tracks.length}\` Toplam Şarkı!**`);
    },
};