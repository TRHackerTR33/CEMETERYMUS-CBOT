module.exports = {
    name: 'filter',
    aliases: ["filtre", "efekt"],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Şuanda Bir Müzik Çalmıyor!**`);

        if (!args[0]) return message.channel.send(`**${client.emotes.error} - Lütfen Geçerli Bir Efekt Filtresi İsmi Yaz!**`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`**${client.emotes.error} - Böyle Bir Efekt Filtresi Yok!**`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`**${client.emotes.music} - Filtreyi Müziğe Ekliyorum, Lütfen Bekleyin... Not: \`Müzik Ne Kadar Uzunsa, O Kadar Uzun Sürecektir!\`**`);
        else message.channel.send(`**${client.emotes.music} - Müzikteki Filtreyi Devre Dışı Bırakıyorum, Lütfen Bekleyin!**`);
    },
};