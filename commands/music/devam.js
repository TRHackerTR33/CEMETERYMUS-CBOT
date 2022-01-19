module.exports = {
    name: 'resume',
    aliases: ["devam"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Şu Anda Çalan Bir Müzik Yok!**`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`**${client.emotes.error} - Müzik Zaten Çalmaya Devam Ediyor!**`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`**${client.emotes.success} - \`${client.player.getQueue(message).playing.title}\` İsimli Şarkı Devam Ediyor!**`);
    },
};