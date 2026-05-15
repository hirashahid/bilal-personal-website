import { useRef, useCallback } from 'react';

export function useAudio() {
  const refs = useRef({});

  const register = useCallback((id, el) => {
    if (el) refs.current[id] = el;
  }, []);

  const pauseAll = useCallback(() => {
    Object.values(refs.current).forEach(a => {
      a.pause();
      a.currentTime = 0;
    });
  }, []);

  // For content hover spans — desktop only (matches original behaviour)
  const play = useCallback((id) => {
    if (window.innerWidth <= 1024) return;
    pauseAll();
    const a = refs.current[id];
    if (a) a.play().catch(() => {});
  }, [pauseAll]);

  // For nav items — always plays regardless of screen size
  const playAlways = useCallback((id) => {
    pauseAll();
    const a = refs.current[id];
    if (a) a.play().catch(() => {});
  }, [pauseAll]);

  return { register, play, playAlways, pauseAll };
}
