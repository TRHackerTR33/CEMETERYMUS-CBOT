module.exports = {
    name: 'queue',
    aliases: ["çalma-listesi","liste","sıra"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Şu Anda Çalan Bir Müzik Yok!**`);

        message.channel.send({
            embed: {
                color: 'BLUE',
                title: `${message.guild.name} Çalma Listesi ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(Döngü Aktif)' : ''}`,
                footer: { text: 'Ahmet_33 Müzik Botu' },
                description: `**Şuanda Çalan: \`${queue.playing.title}\`\n\n` + (queue.tracks.map((track, i) => {
            return `#${i + 1} - \`${track.title}\` | (Ekleyen: <@${track.requestedBy.id}>)`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `\`${queue.tracks.length - 5}\` Diğer Şarkı Daha Listede Var!` : `Toplam \`${queue.tracks.length}\` Şarkı!`}**`),
                timestamp: new Date(),
            },
        }
  
        );
    },
};