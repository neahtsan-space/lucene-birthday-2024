'use client';
import { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import '@/app/popcat/style.css';
import Image from 'next/image';

const PopCatApp: React.FC = () => {
  const [popcatSrc, setPopcatSrc] = useState<string>('/popcat/close.png');
  const [popCount, setPopCount] = useState<number>(0);
  const openMouthImg: string = '/popcat/open.png';
  const closeMouthImg: string = '/popcat/close.png';

  // State to store audio objects
  const [openMouthSound, setOpenMouthSound] = useState<HTMLAudioElement | null>(null);
  const [closeMouthSound, setCloseMouthSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio elements after the component has mounted
    setOpenMouthSound(new Audio('/popcat/sound/sound-open.mp3'));
    setCloseMouthSound(new Audio('/popcat/sound/sound-close.mp3'));
  }, []);

  const toggleMouth = useCallback((isOpen: boolean): void => {
    setPopcatSrc(isOpen ? openMouthImg : closeMouthImg);
    setPopCount((currentCount) => currentCount + 1);

    if (isOpen) {
      openMouthSound?.play();
    } else {
      closeMouthSound?.play();
    }
  }, [openMouthImg, closeMouthImg, openMouthSound, closeMouthSound]);

  return (
    <>
      <Head>
        <title>Pop Cat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='wrapper'>
        <div
          onMouseDown={() => toggleMouth(true)}
          onMouseUp={() => toggleMouth(false)}
          onTouchStart={(e) => {
            e.preventDefault();
            toggleMouth(true);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            toggleMouth(false);
          }}
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
