'use client';
import React, { useState, useEffect } from 'react';
import './CreditPage.css'; // Import your CSS file for styling
import * as CreditParams from '@/params/credit_params';

const CreditPage: React.FC = () => {
  const [credits, setCredits] = useState<string[]>([]); // State to hold credits
  const creditList = [CreditParams.CREDIT_NAME1,CreditParams.CREDIT_NAME2,CreditParams.CREDIT_NAME3,CreditParams.CREDIT_NAME4,CreditParams.CREDIT_NAME5,CreditParams.CREDIT_NAME6]; // Sample list of credits

  useEffect(() => {
    // Function to roll out credits
    const rollOutCredits = () => {
      setCredits(creditList); // Set credits to the list
    };

    // Call the function after component is mounted
    rollOutCredits();

    // Cleanup function
    return () => {
      // Reset credits when component is unmounted
      setCredits([]);
    };
  }, [creditList]); // Run effect when creditList changes

  return (
    <div className="credit-container">
      <h1 className='credit-title'>Credits</h1>
      <div className="credit-list">
        {/* Map through credits and display them */}
        {credits.map((credit, index) => (
          <div key={index} className="credit-item">
            {credit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditPage;