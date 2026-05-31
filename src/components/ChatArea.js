import React, { useState } from 'react';
import { Icons } from '../Icons';

export default function ChatArea({ activeChat, messages, onSendMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue('');
  };

  const formatMessageText = (text) => {
    // Highlight emails, URLs, and hashes
    const parts = text.split(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|0x[a-fA-F0-9]{64}|https?:\/\/[^\s]+)/g);
    return parts.map((part, i) => {
      if (part.includes('@') || part.startsWith('0x')) {
        return <span key={i} style={{ color: '#4ade80', cursor: 'pointer' }}>{part}</span>;
      } else if (part.startsWith('http')) {
        return <span key={i} style={{ color: '#53bdeb', cursor: 'pointer' }}>{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  if (!activeChat) {
    return (
      <div className="main-area" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#202020' }}>
        <div style={{ backgroundColor: '#111111', padding: '32px 24px', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '360px', textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ width: '140px', height: '110px', marginBottom: '16px' }}>
            <Icons.WelcomeIllustration />
          </div>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '19px', fontWeight: '400', marginBottom: '8px' }}>Download WhatsApp for<br/>Windows</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.4', marginBottom: '20px', padding: '0 10px' }}>Get extra features like voice and video calling,<br/>screen sharing and more.</p>
          <button style={{ backgroundColor: '#112720', color: '#25D366', border: 'none', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>Download</button>
        </div>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <button style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#2c2c2c', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', cursor: 'pointer' }}>
              <Icons.Description />
            </button>
            <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: '400' }}>Send document</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <button style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#2c2c2c', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', cursor: 'pointer' }}>
              <Icons.PersonAdd />
            </button>
            <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: '400' }}>Add contact</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <button style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#2c2c2c', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', cursor: 'pointer' }}>
              <Icons.MetaAILogo />
            </button>
            <span style={{ color: 'var(--text-primary)', fontSize: '13px', fontWeight: '400' }}>Ask Meta AI</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-area">
      <div className="active-chat-header">
        <div className="active-chat-info">
          <div className="avatar avatar-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          <div>
            <div className="active-chat-name">{activeChat.name}</div>
            {activeChat.isBusiness && <div className="active-chat-status">Business Account</div>}
          </div>
        </div>
        <div className="header-icons">
          <div className="icon" style={{ display: 'flex', alignItems: 'center', gap: '4px', width: 'auto', padding: '0 8px', borderRadius: '20px' }}>
            <Icons.Video />
            <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" fill="currentColor">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
          <div className="icon"><Icons.Search /></div>
          <div className="icon"><Icons.Menu /></div>
        </div>
      </div>

      <div className="chat-history">
        {(messages[activeChat.id] || []).map((msg) => {
          if (msg.sender === 'system') {
            return (
              <div key={msg.id} className="message-row" style={{ justifyContent: 'center', margin: '10px 0' }}>
                <div className="message-system" style={{ backgroundColor: 'var(--bg-panel)', padding: '5px 12px', borderRadius: '8px', fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Icons.Status />
                  <span>{msg.text}</span>
                </div>
              </div>
            );
          }

          return (
            <div key={msg.id} className={`message-row ${msg.sender === 'me' ? 'row-outgoing' : 'row-incoming'}`}>
              <div className={`message ${msg.sender === 'me' ? 'outgoing' : 'incoming'}`}>
                {msg.isImage ? (
                  <div className="message-image">
                    <img src={msg.url} alt="Shared content" style={{ maxWidth: '250px', borderRadius: '8px', display: 'block', marginBottom: '4px' }} />
                  </div>
                ) : (
                  <div className="message-text" style={{ whiteSpace: 'pre-wrap' }}>{formatMessageText(msg.text)}</div>
                )}
                <div className="message-meta">
                  <span className="message-time">{msg.time}</span>
                  {msg.sender === 'me' && <span className="message-check"><Icons.DoubleCheck /></span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <form className="message-input-area" onSubmit={handleSubmit}>
        <div className="message-input-wrapper">
          <button type="button" className="icon-btn" style={{marginRight: 16}}><Icons.Plus /></button>
          <button type="button" className="icon-btn" style={{marginRight: 10}}><Icons.Smile /></button>
          <input 
            type="text" 
            placeholder="Type a message" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        {inputValue.trim() ? (
          <button type="submit" className="icon-btn" style={{color: 'var(--accent-green)'}}><Icons.NewChat /></button>
        ) : (
          <button type="button" className="icon-btn"><Icons.Mic /></button>
        )}
      </form>
    </div>
  );
}
