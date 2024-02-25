'use client';
import React, { useState, useEffect } from 'react';
import { credits } from '@/params/credit_params';
import './CreditPage.css';
import { CREDIT_BG } from '@/params/background_params';

const CreditPage: React.FC = () => {
  const [creditList, setCreditList] = useState<{ name: string; description: string; link: string }[]>([]);

  useEffect(() => {
    // roll out credits
    const rollOutCredits = () => {
      setCreditList(credits); 
    };

    rollOutCredits();

    return () => {
      setCreditList([]);
    };
  }, []);

  return (
    <>
      <header>
        <a href="../">BACK</a>
      </header>
      <div className="credit-container" style={{backgroundColor:CREDIT_BG}}>
        <h1 className='credit-title' >Credits</h1>
        <div className="credit-list">
          {creditList.map((credit, index) => (
            <div key={index} className="credit-item">
              <div className="credit-content">
                <a href={credit.link} className="credit-name" >{credit.name}</a>
                <p className="credit-description">{credit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CreditPage;
