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
  if (server) {
    socket.on('broadcast.players.move', obj => {
      // console.log('Кто-то что-то нажал', obj, obj.id, id, obj.keys);
      if (obj.id === id) {
        setMap(obj.keys, pressedKeys);
      }
    });
  } else {
    document.addEventListener('keydown', event => {
      pressedKeys.set(event.code, true);
      // console.log('я что-то нажал');
      socket.emit('players.move', { keys: getArr(pressedKeys), time: Date.now() });
    });
    document.addEventListener('keyup', event => {
      // console.log('test, отжата');
      pressedKeys.set(event.code, false);
      socket.emit('players.move', { keys: getArr(pressedKeys), time: Date.now() });
    });
    window.addEventListener('blur', () => {
      pressedKeys.clear();
      socket.emit('players.move', { keys: getArr(pressedKeys), time: Date.now() });
    });
  }
  return pressedKeys;
}
