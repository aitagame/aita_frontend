import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from './styled';
import { Game as GameConstuctor } from './main';
import { Modal } from './components/modal';

export const Game = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isModal, setModal] = useState(false);
  const isModalForEvent = useRef(false);

  function toggleModal() {
    isModalForEvent.current = !isModalForEvent.current;
    setModal(isModalForEvent.current);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) throw new Error('Canvas not found');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Context identifier is not supported');
    const game = new GameConstuctor(canvas);
    game.startGame(ctx, canvas);

    function handleEsc(event: KeyboardEvent) {
      if (event.key == 'Escape') {
        toggleModal();
      }
    }

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      game.stopGame();
    };
  }, []);

  return (
    <>
      <Canvas width="800px" height="600px" ref={canvasRef}></Canvas>
      {isModal && <Modal onClose={toggleModal} />}
    </>
  );
});
