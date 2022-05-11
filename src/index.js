function startPage() {
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
  startPage();
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
    13: { value: 'Backspace', upper: '', class: 'Backspace' },
  },
  {
    0: { value: 'Tab', upper: '', class: 'Tab' },
    1: { value: 'Q', upper: '', class: 'KeyQ' },
    2: { value: 'W', upper: '', class: 'KeyW' },
    3: { value: 'E', upper: '', class: 'KeyE' },
    4: { value: 'R', upper: '', class: 'KeyR' },
    5: { value: 'T', upper: '', class: 'KeyT' },
    6: { value: 'Y', upper: '', class: 'KeyY' },
    7: { value: 'U', upper: '', class: 'KeyU' },
    8: { value: 'I', upper: '', class: 'KeyI' },
    9: { value: 'O', upper: '', class: 'KeyO' },
    10: { value: 'P', upper: '', class: 'KeyP' },
    11: { value: '[', upper: '{', class: 'BracketLeft' },
    12: { value: ']', upper: '}', class: 'BracketRight' },
    13: { value: '\\', upper: '|', class: 'Backslash' },
    14: { value: 'Del', upper: '', class: 'Delete' },
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
    0: { value: 'Z', upper: '', class: 'KeyZ' },
    1: { value: 'X', upper: '', class: 'KeyX' },
    2: { value: 'C', upper: '', class: 'KeyC' },
    3: { value: 'V', upper: '', class: 'KeyV' },
    4: { value: 'B', upper: '', class: 'KeyB' },
    5: { value: 'N', upper: '', class: 'KeyN' },
    6: { value: 'M', upper: '', class: 'KeyM' },
    7: { value: ',', upper: '<', class: 'Comma' },
    8: { value: '.', upper: '>', class: 'Period' },
    9: { value: '/', upper: '?', class: 'Slash' },
    10: { value: '↑', upper: '', class: 'ArrowUp' },
    11: { value: 'Shift', upper: '', class: 'ShiftRight' },
  },
  {
    0: { value: 'Ctrl', upper: '', class: 'ControlLeft' },
    1: { value: 'WIN', upper: '', class: 'MetaLeft' },
    2: { value: 'Alt', upper: '', class: 'AltLeft' },
    3: { value: 'SPACE', upper: '', class: 'Space' },
    4: { value: 'Alt', upper: '', class: 'AltRight' },
    5: { value: '←', upper: '', class: 'ArrowLeft' },
    6: { value: '↓', upper: '', class: 'ArrowDown' },
    7: { value: '→', upper: '', class: 'ArrowRight' },
    8: { value: 'Ctrl', upper: '', class: 'ControlRight' },
  },
];

const rus = [
  {
    0: { value: 'Ё', extra: '', class: 'Backquote' },
    1: { value: '1', extra: '!', class: 'Digit1' },
    2: { value: '2', extra: '@', class: 'Digit2' },
    3: { value: '3', extra: '#', class: 'Digit3' },
    4: { value: '4', extra: '$', class: 'Digit4' },
    5: { value: '5', extra: '%', class: 'Digit5' },
    6: { value: '6', extra: '^', class: 'Digit6' },
    7: { value: '7', extra: '&', class: 'Digit7' },
    8: { value: '8', extra: '*', class: 'Digit8' },
    9: { value: '9', extra: '(', class: 'Digit9' },
    10: { value: '0', extra: ')', class: 'Digit0' },
    11: { value: '-', extra: '_', class: 'Minus' },
    12: { value: '=', extra: '+', class: 'Equal' },
    13: { value: 'Backspace', upper: '', class: 'Backspace' },
  },
  {
    0: { value: 'Tab', upper: '', class: 'Tab' },
    1: { value: 'Й', extra: '', class: 'KeyQ' },
    2: { value: 'Ц', extra: '', class: 'KeyW' },
    3: { value: 'У', extra: '', class: 'KeyE' },
    4: { value: 'К', extra: '', class: 'KeyR' },
    5: { value: 'Е', extra: '', class: 'KeyT' },
    6: { value: 'Н', extra: '', class: 'KeyY' },
    7: { value: 'Г', extra: '', class: 'KeyU' },
    8: { value: 'Ш', extra: '', class: 'KeyI' },
    9: { value: 'Щ', extra: '', class: 'KeyO' },
    10: { value: 'З', extra: '', class: 'KeyP' },
    11: { value: 'Х', extra: '', class: 'BracketLeft' },
    12: { value: 'Ъ', extra: '', class: 'BracketRight' },
    13: { value: '\\', upper: '|', class: 'Backslash' },
    14: { value: 'Del', upper: '', class: 'Delete' },
  },
  {
    0: { value: 'Ф', extra: '', class: 'KeyA' },
    1: { value: 'Ы', extra: '', class: 'KeyS' },
    2: { value: 'В', extra: '', class: 'KeyD' },
    3: { value: 'А', extra: '', class: 'KeyF' },
    4: { value: 'П', extra: '', class: 'KeyG' },
    5: { value: 'Р', extra: '', class: 'KeyH' },
    6: { value: 'О', extra: '', class: 'KeyJ' },
    7: { value: 'Л', extra: '', class: 'KeyK' },
    8: { value: 'Д', extra: '', class: 'KeyL' },
    9: { value: 'Ж', extra: '', class: 'Semicolon' },
    10: { value: 'Э', extra: '', class: 'Quote' },
  },
  {
    0: { value: 'Я', extra: '', class: 'KeyZ' },
    1: { value: 'Ч', extra: '', class: 'KeyX' },
    2: { value: 'С', extra: '', class: 'KeyC' },
    3: { value: 'М', extra: '', class: 'KeyV' },
    4: { value: 'И', extra: '', class: 'KeyB' },
    5: { value: 'Т', extra: '', class: 'KeyN' },
    6: { value: 'Ь', extra: '', class: 'KeyM' },
    7: { value: 'Б', extra: '', class: 'Comma' },
    8: { value: 'Ю', extra: '', class: 'Period' },
    9: { value: '.', extra: ',', class: 'Slash' },
    10: { value: '↑', extra: '', class: 'ArrowUp' },
    11: { value: 'Shift', extra: '', class: 'ShiftRight' },
  },
  {
    0: { value: 'Ctrl', extra: '', class: 'ControlLeft' },
    1: { value: 'WIN', extra: '', class: 'MetaLeft' },
    2: { value: 'Alt', extra: '', class: 'AltLeft' },
    3: { value: 'SPACE', extra: '', class: 'Space' },
    4: { value: 'Alt', extra: '', class: 'AltRight' },
    5: { value: '?', upper: '', class: 'ArrowLeft' },
    6: { value: '?', upper: '', class: 'ArrowDown' },
    7: { value: '?', upper: '', class: 'ArrowRight' },
    8: { value: 'Ctrl', upper: '', class: 'ControlRight' },
  },
];

const codeSet = {
  ShiftLeft: false,
  AltLeft: false,
};

function setKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.querySelector('.container').append(keyboard);
  Object.keys(eng).forEach((keys) => {
    if (keys === '0') {
      const row = document.createElement('div');
      row.classList.add('row', 'row-one');
      keyboard.append(row);

      Object.keys(eng[keys]).forEach((key) => {
        const divKey = document.createElement('div');
        divKey.classList.add('key', `${eng[keys][key].class}`);
        row.append(divKey);
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = eng[keys][key].value;
        divKey.append(divKeyValue);
      });
    }

    if (keys === '1') {
      const row = document.createElement('div');
      row.classList.add('row', 'row-two');
      keyboard.append(row);

      Object.keys(eng[keys]).forEach((key) => {
        const divKey = document.createElement('div');
        divKey.classList.add('key', `${eng[keys][key].class}`);
        row.append(divKey);
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = eng[keys][key].value;
        divKey.append(divKeyValue);
      });
    }
    if (keys === '2') {
      const row = document.createElement('div');
      row.classList.add('row', 'row-three');
      keyboard.append(row);
      Object.keys(eng[keys]).forEach((key) => {
        if (+key === 0) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'CapsLock');
          divKey.textContent = 'Caps Lock';
          row.append(divKey);
        }
        const divKey = document.createElement('div');
        divKey.classList.add('key', `${eng[keys][key].class}`);
        row.append(divKey);
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = eng[keys][key].value;
        divKey.append(divKeyValue);
        if (+key === Object.keys(eng[keys]).length - 1) {
          const divKeyE = document.createElement('div');
          divKeyE.classList.add('key', 'Enter');
          divKeyE.textContent = 'Enter';
          row.append(divKeyE);
        }
      });
    }
    if (keys === '3') {
      const row = document.createElement('div');
      row.classList.add('row', 'row-four');
      keyboard.append(row);
      Object.keys(eng[keys]).forEach((key) => {
        if (+key === 0) {
          const divKey = document.createElement('div');
          divKey.classList.add('key', 'ShiftLeft');
          divKey.textContent = 'Shift';
          row.append(divKey);
        }
        const divKey = document.createElement('div');
        divKey.classList.add('key', `${eng[keys][key].class}`);
        row.append(divKey);
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = eng[keys][key].value;
        divKey.append(divKeyValue);
      });
    }
    if (keys === '4') {
      const row = document.createElement('div');
      row.classList.add('row', 'row-five');
      keyboard.append(row);
      Object.keys(eng[keys]).forEach((key) => {
        const divKey = document.createElement('div');
        divKey.classList.add('key', `${eng[keys][key].class}`);
        row.append(divKey);
        const divKeyValue = document.createElement('span');
        divKeyValue.classList.add('value');
        divKeyValue.textContent = eng[keys][key].value;
        divKey.append(divKeyValue);
      });
    }
  });
}
//   });
//

let lang = 'eng';
let language = eng;
let switchedLanguage = false;
let intervalSwitchLang;

function switchLang() {
  if (codeSet.CtrlLeft && codeSet.AltLeft) {
    if (!switchedLanguage) {
      switchedLanguage = true;
      clearInterval(intervalSwitchLang);
      if (lang === 'eng') {
        lang = 'rus';
        language = rus;
      } else {
        lang = 'eng';
        language = eng;
      }
      // resetKeyboard();
    }
  }
}
window.addEventListener('load', () => {
  setKeyboard();
});

// function writeText(content) {
const text = document.querySelector('.textarea');
const start = text.selectionStart;
const end = text.selectionEnd;
text.textContent = text.value.substring(0, start) + content + text.value.substring(end);
text.focus();
text.setSelectionRange(start + 1, start + 1);
// }

window.addEventListener('load', () => {
  writeText();
});

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  const keyCode = document.querySelector(`.${e.code}`);
});

window.addEventListener('keyup', (e) => {
  if (document.querySelector(`.${e.code}`) !== null) {
    document.querySelector(`.${e.code}`).classList.remove('press');
  }
});
