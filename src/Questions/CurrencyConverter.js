import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Hardcoded exchange rates
  const exchangeRates = {
    USD: { INR: 83.5, EUR: 0.92 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.09, INR: 90.5 },
  };

  const handleConvert = () => {
    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
    } else {
      const rate = exchangeRates[fromCurrency][toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '100px auto', padding: '30px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>💱 Currency Converter</h2>
      
      {/* Amount Input */}
      <div style={{ marginBottom: '20px' }}>
        <label><strong>Amount:</strong></label><br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      {/* From Currency Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <label><strong>From:</strong></label><br />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {/* To Currency Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <label><strong>To:</strong></label><br />
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {/* Convert Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={handleConvert}
          style={{ padding: '10px 30px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none' }}
        >
          Convert
        </button>
      </div>

      {/* Converted Result */}
      {convertedAmount !== null && (
        <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '20px' }}>
          <p><strong>Converted Amount:</strong> {convertedAmount} {toCurrency}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
