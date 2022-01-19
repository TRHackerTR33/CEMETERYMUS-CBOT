module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`**${client.emotes.error} - Bu Sunucuda Çalınan Müzik Yok!**`);
            break;
        case 'NotConnected':
            message.channel.send(`**${client.emotes.error} - Herhangi Bir Ses Kanalına Bağlı Değilsiniz!**`);
            break;
        case 'UnableToJoin':
            message.channel.send(`**${client.emotes.error} - Ses Kanalınıza Katılamıyorum, Lütfen İzinlerimi Kontrol Edin!**`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`**${client.emotes.error} - ${args[0].title} İsimli Müzik Bulunamadı!**`);
            break;
        case 'MusicStarting':
            message.channel.send(`**Müzik Başlıyor Lütfen Bekleyin!**`);
            break;

    };
};
