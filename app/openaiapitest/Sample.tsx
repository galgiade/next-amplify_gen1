"use client";

import { useState } from 'react';

export default function Sample() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });
  
    const data = await res.json();
    setResponse(data.response);
  };  

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter your message" 
      />
      <button onClick={handleSend}>Send</button>
      <div>Response: {response}</div>
    </div>
  );
}
