let handler = async m => m.reply(`
╭─「 Donasi • Gopay & Dana 」
│ •  [083874258794 Gopay]
│ •  [082228214355 Dana]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
