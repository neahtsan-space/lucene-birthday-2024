'use client';
import React, { useState, useEffect } from 'react';
import { credits } from '@/params/credit_params';
import './CreditPage.css';

const CreditPage: React.FC = () => {
  const [creditList, setCreditList] = useState<{ name: string; description: string; link: string }[]>([]);

  useEffect(() => {
    // Function to roll out credits
    const rollOutCredits = () => {
      setCreditList(credits); // Set credits to the list imported from credits.ts
    };

    // Call the function after component is mounted
    rollOutCredits();

    // Cleanup function
    return () => {
      // Reset credits when component is unmounted
      setCreditList([]);
    };
  }, []);

  return (
    <>
      <header>
        <a href="../">BACK</a>
      </header>
      <div className="credit-container">
        <h1 className='credit-title'>Credits</h1>
        <div className="credit-list">
          {/* Map through credits and display them */}
          {creditList.map((credit, index) => (
            <div key={index} className="credit-item">
              <div className="credit-content">
                {/* Make the name a link */}
                <a href={credit.link} className="credit-name">{credit.name}</a>
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
