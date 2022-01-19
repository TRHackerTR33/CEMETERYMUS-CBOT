module.exports = {
    name: 'clear-queue',
    aliases: ['cq',"liste-sil","listetemizle"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Şuanda Bir Müzik Çalmıyor!**`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`**${client.emotes.error} - Müzik Çalma Sırasında Sadece Bir Şarkı Var!**`);

        client.player.clearQueue(message);

        message.channel.send(`**${client.emotes.success} - Müzik Çalma Sırası Kaldırıldı!**`);
    },
};