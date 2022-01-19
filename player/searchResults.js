module.exports = (client, message, query, tracks) => {
       message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Arama Sonuçları ${query}` },
            footer: { text: 'Lütfen Yukarıdaki Sonuçlardan Bir Seçim Yapın!' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
      
};