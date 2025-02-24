const emojiGallery = document.getElementById('emoji-gallery');

const emojis = [
    { char: '&#128512;', code: '128512' },
    { char: '&#128513;', code: '128513' },
    { char: '&#128514;', code: '128514' },
    { char: '&#128515;', code: '128515' },
    { char: '&#128516;', code: '128516' },
    { char: '&#128517;', code: '128517' },
    { char: '&#128518;', code: '128518' },
    { char: '&#128519;', code: '128519' },
    { char: '&#128520;', code: '128520' },
    { char: '&#128521;', code: '128521' },
    { char: '&#128522;', code: '128522' },
    { char: '&#128523;', code: '128523' }
];

const displayEmojis = () => {
    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.classList.add('emoji-item');
        emojiItem.innerHTML = `
        <div class="emoji-char">${emoji.char}</div>
        <div class="emoji-code">${emoji.code}</div>
        `;
        emojiGallery.appendChild(emojiItem);
    });
};

displayEmojis();