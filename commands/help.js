const settings = require('../settings');

async function helpCommand(sock, chatId, message, command) {

  // ===== MENU KUU =====
  if (!command || command === 'menu' || command === 'help') {

    const caption = `
╔═══〔 ⚡ ${settings.botName || 'PRINCE-XMD'} ⚡ 〕═══╗
║  Next Level WhatsApp Bot
║  Version : ${settings.version || '3.0.0'}
║  Developer : ${settings.botOwner || 'Mr Unique Hacker'}
╚════════════════════════════╝

👉 Chagua category:
`;

    const buttons = [
      { buttonId: 'menu_general', buttonText: { displayText: '🌐 GENERAL' }, type: 1 },
      { buttonId: 'menu_admin', buttonText: { displayText: '👮 ADMIN' }, type: 1 },
      { buttonId: 'menu_owner', buttonText: { displayText: '🔒 OWNER' }, type: 1 },
      { buttonId: 'menu_media', buttonText: { displayText: '🎨 IMAGE / STICKER' }, type: 1 },
      { buttonId: 'menu_ai', buttonText: { displayText: '🤖 AI' }, type: 1 },
      { buttonId: 'menu_game', buttonText: { displayText: '🎮 GAME' }, type: 1 },
      { buttonId: 'menu_fun', buttonText: { displayText: '🎯 FUN' }, type: 1 },
      { buttonId: 'menu_down', buttonText: { displayText: '📥 DOWNLOAD' }, type: 1 }
    ];

    return await sock.sendMessage(chatId, {
      text: caption,
      buttons,
      footer: 'KnightBot-MD • Premium Bot',
      headerType: 1
    }, { quoted: message });
  }

  // ===== GENERAL =====
  if (command === 'menu_general') {
    return sock.sendMessage(chatId, {
      text: `
🌐 *GENERAL COMMANDS*
• .menu / .help
• .ping
• .alive
• .tts <text>
• .owner
• .joke
• .quote
• .fact
• .weather <city>
• .news
• .groupinfo
• .admins
• .ss <link>
`
    }, { quoted: message });
  }

  // ===== ADMIN =====
  if (command === 'menu_admin') {
    return sock.sendMessage(chatId, {
      text: `
👮 *ADMIN COMMANDS*
• .ban @user
• .kick @user
• .promote @user
• .demote @user
• .mute <min>
• .unmute
• .delete
• .tagall
• .hidetag
• .antilink on/off
• .welcome on/off
`
    }, { quoted: message });
  }

  // ===== OWNER =====
  if (command === 'menu_owner') {
    return sock.sendMessage(chatId, {
      text: `
🔒 *OWNER COMMANDS*
• .mode public/private
• .update
• .settings
• .autoread on/off
• .autotyping on/off
• .anticall on/off
• .setpp
`
    }, { quoted: message });
  }

  // ===== IMAGE / STICKER =====
  if (command === 'menu_media') {
    return sock.sendMessage(chatId, {
      text: `
🎨 *IMAGE / STICKER*
• .sticker
• .simage
• .blur
• .crop
• .removebg
• .emojimix 😎+🔥
• .take <packname>
`
    }, { quoted: message });
  }

  // ===== AI =====
  if (command === 'menu_ai') {
    return sock.sendMessage(chatId, {
      text: `
🤖 *AI COMMANDS*
• .gpt <question>
• .gemini <question>
• .imagine <prompt>
• .flux <prompt>
• .sora <prompt>
`
    }, { quoted: message });
  }

  // ===== GAME =====
  if (command === 'menu_game') {
    return sock.sendMessage(chatId, {
      text: `
🎮 *GAME COMMANDS*
• .tictactoe @user
• .hangman
• .truth
• .dare
• .trivia
`
    }, { quoted: message });
  }

  // ===== FUN =====
  if (command === 'menu_fun') {
    return sock.sendMessage(chatId, {
      text: `
🎯 *FUN COMMANDS*
• .compliment @user
• .insult @user
• .flirt
• .ship @user
• .simp @user
• .stupid @user
`
    }, { quoted: message });
  }

  // ===== DOWNLOAD =====
  if (command === 'menu_down') {
    return sock.sendMessage(chatId, {
      text: `
📥 *DOWNLOAD COMMANDS*
• .play <song>
• .song <song>
• .spotify <query>
• .instagram <link>
• .facebook <link>
• .tiktok <link>
• .ytmp4 <link>
`
    }, { quoted: message });
  }

}

module.exports = helpCommand;
