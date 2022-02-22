export default function getPressedKeys() {
  const pressedKeys = new Map();
  document.addEventListener('keydown', event => pressedKeys.set(event.code, true));
  document.addEventListener('keyup', event => pressedKeys.set(event.code, false));
  window.addEventListener('blur', () => pressedKeys.clear());
  return pressedKeys;
}
