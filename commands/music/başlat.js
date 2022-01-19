module.exports = {
    name: 'play',
    aliases: ['p',"başla"],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Bir Sesli Kanala Bağlı Değilsin!**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} - Bulunduğun Sesli Kanala Giriş Yapmaya Yetkim Yok!**`);

        if (!args[0]) return message.channel.send(`**${client.emotes.error} - Lütfen Bir Şarkı İsmi Yaz!**`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};