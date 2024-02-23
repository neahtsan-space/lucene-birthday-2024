'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import '@/app/popcat/style.css';
import Image from 'next/legacy/image';

const PopCatApp: React.FC = () => {
  const [popcatSrc, setPopcatSrc] = useState<string>('/popcat/close.png');
  const [popCount, setPopCount] = useState<number>(0);
  const openMouthImg: string = '/popcat/open.png';
  const closeMouthImg: string = '/popcat/close.png';

  const [openMouthSound, setOpenMouthSound] = useState<HTMLAudioElement | null>(null);
  const [closeMouthSound, setCloseMouthSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setOpenMouthSound(new Audio('/popcat/sound/sound-open.mp3'));
    setCloseMouthSound(new Audio('/popcat/sound/sound-close.mp3'));
  }, []);

  const openMouth = (): void => {
    setPopcatSrc(openMouthImg);
    setPopCount((currentCount) => currentCount + 1);
    openMouthSound?.play();
  };

  const closeMouth = (): void => {
    setPopcatSrc(closeMouthImg);
    closeMouthSound?.play();
  };

  const handleMouseDown = (): void => {
    openMouth();
  };

  const handleMouseUp = (): void => {
    closeMouth();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    openMouth();
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    closeMouth();
  };

  return (
    <>
      <Head>
        <title>Pop Cat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='wrapper'>
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: 'pointer', width: '50vw', height: '50vw', position: 'relative' }}
        >
          <Image src={popcatSrc} alt="Pop Cat" layout='fill' objectFit='contain' />
        </div>
        <p>Pop Count: {popCount}</p>
      </div>
    </>
  );
};

export default PopCatApp;
