import React, { useEffect, useRef } from 'react';
import { Canvas } from './styled';
import { Game as GameConstuctor } from './main';

export const Game = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) throw new Error('Canvas not found');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Context identifier is not supported');
    const game = new GameConstuctor(canvas);
    game.startGame(ctx, canvas);
  });
  return <Canvas width="800px" height="600px" ref={canvasRef}></Canvas>;
});
