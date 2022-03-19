import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from './styled';
import { Game as GameConstuctor } from './main';
import { Modal } from './components/modal';
import { Loading } from 'views/components/Loading';
import { io, Socket, SocketOptions } from 'socket.io-client';
import { appConfig } from '../config/appConfig';
import loaderImages from './utils/loaderImages';

const AUDIO_FILE_NAME = 'assets/ncs_firefly.mp3';

export const ROOMS_LIST = 'rooms.list';
export const ROOMS_GET = 'rooms.get';
export const ROOMS_GET_ID = 'rooms.get.id';
export const ROOMS_CREATE = 'rooms.create';
export const ROOMS_JOIN_OR_CREATE = 'rooms.join_or_create';
export const ROOMS_JOIN = 'rooms.join';
export const ROOMS_LEAVE = 'rooms.leave';

export const BROADCAST_ROOMS_CREATED = 'broadcast.rooms.created';
export const BROADCAST_ROOMS_CONNECTED = 'broadcast.rooms.connected';
export const BROADCAST_ROOMS_DISCONNECTED = 'broadcast.rooms.disconnected';
export const BROADCAST_ROOMS_STATE_UPDATED = 'broadcast.rooms.state_updated';
export const BROADCAST_ROOMS_DELETED = 'broadcast.rooms.deleted';

export const ROOMS_STATE_UNEXIST = 'unexistant'; //Room does not exist
export const ROOMS_STATE_LOBBY = 'lobby'; //Room in lobby state. Everyone can join.
export const ROOMS_STATE_INGAME = 'ingame'; //Room is in ingame state. Noone can join
export const ROOMS_STATE_ENDGAME = 'endgame'; //Room is in state of closing game session. No one can join, game process stopped. It's for showing stats

export const Game = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isModal, setModal] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const isModalForEvent = useRef(false);
  const socketRef = useRef<null | Socket>(null);
  const gameRef = useRef<GameConstuctor | null>(null);
  function toggleModal() {
    isModalForEvent.current = !isModalForEvent.current;
    setModal(isModalForEvent.current);
  }
  useEffect(() => {
    console.log(loadingPercentage);
    if (loadingPercentage == 100) {
      gameRef.current?.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingPercentage]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;
    if (!canvas) throw new Error('Canvas not found');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Context identifier is not supported');
    const opts = {
      auth: {
        authorization: localStorage.getItem('token'),
      },
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    } as SocketOptions;
    let roomId: number;
    const socket = io(appConfig.apiUrl, opts);
    socketRef.current = socket;

    socket.on('connect', () => {
      socket.on('exception', e => console.log('exception', e));

      socket.on(ROOMS_GET_ID, id => {
        console.log('rooms get id', id);
        roomId = id;
        if (roomId === null) {
          socket.on(ROOMS_JOIN_OR_CREATE, () => {
            console.log('ROOMS JOIN OR CREATE');
            socket.emit(ROOMS_GET_ID);
          });
          socket.emit(ROOMS_JOIN_OR_CREATE);
        } else {
          socket.on(ROOMS_GET, e => {
            console.log('rooms get', e);
            gameRef.current = new GameConstuctor(canvas, ctx, e.players, socket);
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            loaderImages(
              [
                // TODO: Выдергивать картинки из другого места:D
                gameRef.current.background.img,
                gameRef.current.players[0].animations.idle.img,
                gameRef.current.players[0].animations.move.img,
                gameRef.current.players[0].animations.attack.img,
                gameRef.current.players[0].animations.hurt.img,
                gameRef.current.players[0].animations.die.img,
              ],
              (done, all) => setLoadingPercentage(Math.floor(done / all) * 100)
            );
            // TODO: То, что ниже, вынести внутрь game
            socket.on(BROADCAST_ROOMS_DISCONNECTED, (roomdIdFromDisconnected, playerId) => {
              console.log('broadcast disconnected', roomdIdFromDisconnected, playerId);
              if (roomId == roomdIdFromDisconnected) {
                gameRef.current?.removePlayer(playerId);
              }
            });
            socket.on(BROADCAST_ROOMS_CONNECTED, (roomdIdFromConnected, player) => {
              console.log('broadcast connected', roomdIdFromConnected, player);
              if (roomId == roomdIdFromConnected) {
                gameRef.current?.addPlayer(player);
              }
            });
          });
          socket.emit(ROOMS_GET, { id: roomId });
        }
      });
      socket.emit(ROOMS_GET_ID);
    });
    function handleEsc(event: KeyboardEvent) {
      if (event.key == 'Escape') {
        toggleModal();
      }
    }
    function handleSound() {
      if (audio?.paused) {
        audio.crossOrigin = 'anonymous';
        audio.play();
        window.removeEventListener('keydown', handleSound);
      }
    }
    window.addEventListener('keydown', handleEsc);
    //Cannot play sound without interaction according to https://developer.chrome.com/blog/autoplay/
    window.addEventListener('keydown', handleSound);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (gameRef.current) gameRef.current.stopGame();
    };
  }, []);
  function handleExit() {
    socketRef.current?.emit('rooms.leave');
  }
  return (
    <>
      <Canvas width="800px" height="600px" ref={canvasRef}></Canvas>
      <audio
        ref={audioRef}
        crossOrigin="anonymous"
        loop
        src={`${appConfig.baseUrl}/${AUDIO_FILE_NAME}`}
      />
      {isModal && <Modal onClose={toggleModal} onExit={handleExit} />}
      {loadingPercentage !== 100 && <Loading percent={loadingPercentage} />}
    </>
  );
});
