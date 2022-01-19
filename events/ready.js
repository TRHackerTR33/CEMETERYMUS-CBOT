module.exports = async (client) => {
    console.log(`${client.user.username} İsmi İle Müzik Botu Aktif!\n${client.users.cache.size} Toplam Kullanıcı Bulunuyor!`);

    client.user.setActivity(client.config.discord.activity);
};