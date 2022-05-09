function start() {
  const swich = document.createElement('div');
  swich.classList.add('swich');
  document.body.prepend(swich);
  const h4 = document.createElement('h4');
  h4.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';
  h4.classList.add('swich');
  swich.prepend(h4);
  const info = document.createElement('div');
  info.classList.add('info');
  document.body.prepend(info);
  const h3 = document.createElement('h3');
  h3.innerHTML = 'Клавиатура создана в операционной системе Windows';
  h3.classList.add('info');
  info.prepend(h3);
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.prepend(container);
  // const keyboard = document.createElement('div');
  // keyboard.classList.add('keyboard');
  // container.prepend(keyboard);
  // const row = document.createElement('div');
  // row.classList.add('row');
  // keyboard.prepend(row);
  // const key = document.createElement('div');
  // key.classList.add('key');
  // row.prepend(key);

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  container.prepend(textarea);

  const title = document.createElement('div');
  title.classList.add('title');
  document.body.prepend(title);

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Virtual Keyboard';
  h1.classList.add('title');
  title.prepend(h1);
}

window.addEventListener('load', () => {
  start();
});

const eng = [
  {
    0: { value: '`', upper: '~', class: 'Backquote' },
    1: { value: '1', upper: '!', class: 'Digit1' },
    2: { value: '2', upper: '@', class: 'Digit2' },
    3: { value: '3', upper: '#', class: 'Digit3' },
    4: { value: '4', upper: '$', class: 'Digit4' },
    5: { value: '5', upper: '%', class: 'Digit5' },
    6: { value: '6', upper: '^', class: 'Digit6' },
    7: { value: '7', upper: '&', class: 'Digit7' },
    8: { value: '8', upper: '*', class: 'Digit8' },
    9: { value: '9', upper: '(', class: 'Digit9' },
    10: { value: '0', upper: ')', class: 'Digit0' },
    11: { value: '-', upper: '_', class: 'Minus' },
    12: { value: '=', upper: '+', class: 'Equal' },
  },
  {
    0: { value: 'Q', upper: '', class: 'KeyQ' },
    1: { value: 'W', upper: '', class: 'KeyW' },
    2: { value: 'E', upper: '', class: 'KeyE' },
    3: { value: 'R', upper: '', class: 'KeyR' },
    4: { value: 'T', upper: '', class: 'KeyT' },
    5: { value: 'Y', upper: '', class: 'KeyY' },
    6: { value: 'U', upper: '', class: 'KeyU' },
    7: { value: 'I', upper: '', class: 'KeyI' },
    8: { value: 'O', upper: '', class: 'KeyO' },
    9: { value: 'P', upper: '', class: 'KeyP' },
    10: { value: '[', upper: '{', class: 'BracketLeft' },
    11: { value: ']', upper: '}', class: 'BracketRight' },
  },
  {
    0: { value: 'A', upper: '', class: 'KeyA' },
    1: { value: 'S', upper: '', class: 'KeyS' },
    2: { value: 'D', upper: '', class: 'KeyD' },
    3: { value: 'F', upper: '', class: 'KeyF' },
    4: { value: 'G', upper: '', class: 'KeyG' },
    5: { value: 'H', upper: '', class: 'KeyH' },
    6: { value: 'J', upper: '', class: 'KeyJ' },
    7: { value: 'K', upper: '', class: 'KeyK' },
    8: { value: 'L', upper: '', class: 'KeyL' },
    9: { value: ';', upper: ':', class: 'Semicolon' },
    10: { value: '\'', upper: '"', class: 'Quote' },
  },
  {
    0: { value: '\\', upper: '|', class: 'Backslash' },
    1: { value: 'Z', upper: '', class: 'KeyZ' },
    2: { value: 'X', upper: '', class: 'KeyX' },
    3: { value: 'C', upper: '', class: 'KeyC' },
    4: { value: 'V', upper: '', class: 'KeyV' },
    5: { value: 'B', upper: '', class: 'KeyB' },
    6: { value: 'N', upper: '', class: 'KeyN' },
    7: { value: 'M', upper: '', class: 'KeyM' },
    8: { value: ',', upper: '<', class: 'Comma' },
    9: { value: '.', upper: '>', class: 'Period' },
    10: { value: '/', upper: '?', class: 'Slash' },
    11: { value: '↑', upper: '', class: 'ArrowUp' },
    13: { value: 'Shift', upper: '', class: 'ShiftRight' },
  },
  {
    0: { value: 'Ctrl', upper: '', class: 'ControlLeft' },
    1: { value: 'WIN', upper: '', class: 'MetaLeft' },
    2: { value: 'Alt', upper: '', class: 'AltLeft' },
    3: { value: 'SPACE', upper: '', class: 'Space' },
    4: { value: 'Alt', upper: '', class: 'AltRight' },
    5: { value: 'Ctrl', upper: '', class: 'ControlRight' },
    6: { value: '←', upper: '', class: 'ArrowLeft' },
    7: { value: '↓', upper: '', class: 'ArrowDown' },
    8: { value: '→', upper: '', class: 'ArrowRight' },
  },
];

function setKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.querySelector('.container').append(keyboard);
  Object.keys(eng).forEach((keys) => {
    if (keys === '0') {
      const row = document.createElement('div');
      row.classList.add('row', 'row-first');
      keyboard.append(row);
    }

    Object.keys(eng[keys]).forEach((key) => {
      const divKey = document.createElement('div');
      divKey.classList.add('key', 'upper', `${eng[keys][key].class}`);
      if (eng[keys][key].upper.length > 0) {
        const divKeyValueExtra = document.createElement('span');
        divKeyValueExtra.classList.add('upper');
        divKeyValueExtra.textContent = key[keys][key].upper;
        divKey.append(divKeyValueExtra);
      }
    });
  });
}

window.addEventListener('load', () => {
  setKeyboard();
});
// Object.keys(eng).forEach((keys) => {
//   if (keys === '0') {
//     const row = document.createElement('div');
//     row.classList.add('key', 'row-first');
//     row.append(row);
//   }
// });
// keyboard.prepend(keyboard);
// const row = document.createElement('div');
// row.classList.add('row');
// keyboard.prepend(row);

// const key = document.createElement('div');
// key.classList.add('key');
// row.prepend(key);

// document.querySelector('.keyboard').remove();
// setKeyboardOnLoad();
