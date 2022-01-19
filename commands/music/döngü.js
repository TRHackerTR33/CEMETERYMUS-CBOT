module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat','döngü'],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Şuanda Bir Müzik Çalmıyor!**`);

        if (args.join(" ").toLowerCase() === 'liste') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`**${client.emotes.success} - Müzik Döngü Modu Kapatıldı!**`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`**${client.emotes.success} - Müzik Döngü Modu Aktif Listedeki Tüm Müzikler Durmadan Tekrarlanacak!**`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`**${client.emotes.success} - Müzik Döngü Modu Kapatıldı!**`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`**${client.emotes.success} - Müzik Döngü Modu Aktif Bu Müzik Durmadan Tekrarlanacak!**`);
            };
        };
    },
};