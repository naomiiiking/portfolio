'use client';

import { useEffect, useRef, useState } from 'react';

export function Chat() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        console.log('Password submitted');
      }
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('keypress', handleKeyPress as any);
      return () => input.removeEventListener('keypress', handleKeyPress as any);
    }
  }, []);

  return (
    <section id="chat" className="tab-content active">
      <div className="terminal">
        <div className="terminal-content">
          <div className="terminal-line">
            <span className="terminal-prompt">Password: </span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              autoComplete="off"
            />
            <span
              className="terminal-cursor"
              style={{
                opacity: value.length > 0 ? 0 : focused ? 1 : 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
