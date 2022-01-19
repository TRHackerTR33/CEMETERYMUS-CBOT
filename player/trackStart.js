module.exports = (client, message, track) => {
    message.channel.send(`**${client.emotes.music} - Çalmaya Başladı \`${track.title}\` | Bağlanılan Kanal: <#${message.member.voice.channel.id}>**`);
};