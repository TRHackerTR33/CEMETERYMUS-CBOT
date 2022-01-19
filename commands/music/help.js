module.exports = {
    name: 'help',
    aliases: ["yardım","y","h"],

    execute(client, message, args) {

            message.channel.send({
            embed: {
                color: 'BLUE',
                footer: { text: "Ahmet_33 Müzik Botu!" },
                description: `**\`${client.config.discord.prefix}ara <müzik-ismi>\` | Müzik Ararsınız!
 \`${client.config.discord.prefix}skip\` | Çalan Müziği Atlar ve Diğerine Geçer!
 \`${client.config.discord.prefix}play <müzik-ismi>\` | Yazılan İsimdeki Müziği Çalar!
 \`${client.config.discord.prefix}dur\` | Çalan Müziği Durdurur!
 \`${client.config.discord.prefix}devam\` | Duran Müziği Geri Başlatır!
 \`${client.config.discord.prefix}döngü\` | Çalan Müziği Döngüye Sokar!
 \`${client.config.discord.prefix}döngü liste\` | Listedeki Tüm Müzikleri Döngüye Sokar!
 \`${client.config.discord.prefix}filtre <filtre-ismi>\` | Müziğe Efekt Filtre Ekler! (BASS, 8D vb.)
 \`${client.config.discord.prefix}filtreler\` | Aktif Filtreleri Gösterir!
 \`${client.config.discord.prefix}stop\` | Müzik Çalmayı Kapatır!
 \`${client.config.discord.prefix}karıştır\` | Listedeki Tüm Müziklerin Sırasını Karıştırır!
 \`${client.config.discord.prefix}liste-temizle\` | Listedeki Müzikleri Siler!
 \`${client.config.discord.prefix}ses\` | Ses Düzeyini Ayarlar (1 - 250)
 \`${client.config.discord.prefix}çalan\` | Çalan Müziğin Bilgilerini Verir!
 \`${client.config.discord.prefix}liste\` | Listedeki Müzikleri Gösterir!\n\nFiltre/Efektler: ${client.config.filters.map(cs => `\`${cs}\``).join(", ")}**`,
                timestamp: new Date(),
                title: `Müzik Komutları`,
            },
        });
      
    },
};