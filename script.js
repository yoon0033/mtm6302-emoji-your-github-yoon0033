const emojiGallery = document.getElementById('emoji-gallery');

const emojis = [
   // 😘 Face Emojis
   { char: '&#128536;', code: '128536' }, // 😘 Face Throwing a Kiss
   { char: '&#128537;', code: '128537' }, // 😙 Kissing Face with Smiling Eyes
   { char: '&#128538;', code: '128538' }, // 😚 Kissing Face with Closed Eyes
   { char: '&#128539;', code: '128539' }, // 😛 Face with Stuck-Out Tongue
   { char: '&#128540;', code: '128540' }, // 😜 Face with Stuck-Out Tongue and Winking Eye

   // ❤️ Heart Emojis
   { char: '&#128149;', code: '128149' }, // 💕 Two Hearts
   { char: '&#128150;', code: '128150' }, // 💖 Sparkling Heart
   { char: '&#128151;', code: '128151' }, // 💗 Growing Heart
   { char: '&#128152;', code: '128152' }, // 💘 Heart with Arrow
   { char: '&#128153;', code: '128153' }, // 💙 Blue Heart

   // 📞 Communication Emojis
   { char: '&#128222;', code: '128222' }, // ☎️ Telephone Receiver
   { char: '&#128223;', code: '128223' }, // 📟 Pager
   { char: '&#128224;', code: '128224' }, // 📠 Fax
   { char: '&#128225;', code: '128225' }, // 📡 Satellite Antenna
   { char: '&#128226;', code: '128226' }, // 🔈 Loudspeaker

    // 🚀 Transportation Emojis
    { char: '&#128640;', code: '128640' }, // 🚀 Rocket
    { char: '&#128641;', code: '128641' }, // 🚁 Helicopter
    { char: '&#128642;', code: '128642' }, // 🚂 Steam Locomotive
    { char: '&#128643;', code: '128643' }, // 🚃 Railway Car
    { char: '&#128644;', code: '128644' }  // 🚄 High-Speed Train
];

emojis.forEach(emoji => {
    const emojiItem = document.createElement('div');
    emojiItem.classList.add('emoji-item');
    emojiItem.innerHTML = `
        <div class="emoji-char">${emoji.char}</div>
        <div class="emoji-code">${emoji.code}</div>
    `;
    emojiGallery.appendChild(emojiItem);
});

displayEmojis();