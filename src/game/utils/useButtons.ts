import { Socket } from 'socket.io-client';

function setMap(arr: string[], map: Map<string, boolean>) {
  const buttons = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  for (let i = 0; i < 26; i++) {
    buttons.push(`Key${String.fromCharCode('A'.charCodeAt(0) + i)}`);
  }
  buttons.forEach(btn => map.set(btn, false));
  arr.forEach(btn => map.set(btn, true));
}

function getArr(map: Map<string, boolean>) {
  const buttons = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  for (let i = 0; i < 26; i++) {
    buttons.push(`Key${String.fromCharCode('A'.charCodeAt(0) + i)}`);
  }
  const result: string[] = [];
  buttons.forEach(btn => {
    if (map.get(btn)) result.push(btn);
  });
  return result;
}

export default function getPressedKeys(socket: Socket, server: boolean, id?: number) {
  const pressedKeys = new Map();
  console.log('AAAAAAAAAA');
  if (server) {
    console.log('Server');
    socket.on('broadcast.players.move', obj => {
      console.log('Кто-то что-то нажал', obj, obj.id, id, obj.keys);
      if (obj.id === id) {
        setMap(obj.keys, pressedKeys);
      }
    });
  } else {
    console.log('Client');
    document.addEventListener('keydown', event => {
      pressedKeys.set(event.code, true);
      socket.emit('players.move', { keys: getArr(pressedKeys) });
    });
    document.addEventListener('keyup', event => {
      pressedKeys.set(event.code, false);
      socket.emit('players.move', { keys: getArr(pressedKeys) });
    });
    window.addEventListener('blur', () => {
      pressedKeys.clear();
      socket.emit('players.move', { keys: getArr(pressedKeys) });
    });
  }
  return pressedKeys;
}
