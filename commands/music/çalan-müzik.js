module.exports = {
    name: 'nowplaying',
    aliases: ["np","müzik","çalan","çalanmüzik"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Şuanda Bir Müzik Çalmıyor!**`);

        const track = client.player.nowPlaying(message);
        const filters = [];

      
        message.channel.send({
            embed: {
                color: 'BLUE',
                author: { name: track.title },
                footer: { text: 'Ahmet_33 Müzik Botu' },
                description: `Yüklenen Kanal: **${track.author}**
                    Müziği Başlatan: **${track.requestedBy.username}**
                    Toplam Görüntülenme: **${track.views}**
                    Müzik Süresi: **${track.duration}**
                    Aktif Filtreler **${filters.length + '/' + client.filters.length}**
                    Ses Düzeyi: **${client.player.getQueue(message).volume}**`,
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};