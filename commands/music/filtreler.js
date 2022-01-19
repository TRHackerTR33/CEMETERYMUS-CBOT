module.exports = {
    name: 'w-filters',
    aliases: ['filtreler',"efektler"],

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Şu Anda Çalan Bir Müzik Yok!**`);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'BLUE',
                footer: { text: "Ahmet_33 Müzik Botu!" },
                description: `Filtreler\n${filtersStatuses[0].join('\n')}\n\n${filtersStatuses[1].join('\n')}`,
                timestamp: new Date(),
                title: `**Aktif veya Aktif Olmayan Tüm Filtrelerin Sırası\nKullanım: \`${client.config.discord.prefix}filter\` Bir Şarkıya Efekt Filtersi Eklersin!**`,
            },
        });
    },
};