import React, { useState } from 'react';
import { Icons } from '../Icons';

export default function NewChatSidebar({ contacts, onBack, onSelectChat }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="new-chat-sidebar" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', backgroundColor: 'var(--bg-default)' }}>
      {/* Header */}
      <div className="new-chat-header" style={{ display: 'flex', alignItems: 'center', height: '108px', padding: '0 20px', backgroundColor: 'var(--bg-panel)', color: 'var(--text-primary)', gap: '24px' }}>
        <div style={{ marginTop: 'auto', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ cursor: 'pointer', color: 'var(--text-primary)' }} onClick={onBack}>
            <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </div>
          <span style={{ fontSize: '19px', fontWeight: '500' }}>New chat</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container" style={{ padding: '8px 12px' }}>
        <div className={`search-bar ${isSearchFocused ? 'focused' : ''}`} style={{ backgroundColor: 'var(--search-bg)' }}>
          {isSearchFocused ? (
            <div style={{ cursor: 'pointer', color: 'var(--accent-green)', display: 'flex', marginLeft: '-6px', marginRight: '6px' }} onClick={() => { setIsSearchFocused(false); setSearchQuery(''); }}>
              <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </div>
          ) : (
            <Icons.Search />
          )}
          <input 
            type="text" 
            placeholder="Search name or number" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
          />
        </div>
      </div>

      {/* Actions & Contacts */}
      <div className="new-chat-list" style={{ flex: 1, overflowY: 'auto' }}>
        {!searchQuery && (
          <div style={{ paddingBottom: '12px' }}>
            {/* Action Items */}
            <div className="chat-item" style={{ padding: '12px 16px', borderRadius: 0, margin: 0, gap: '15px' }}>
              <div className="avatar" style={{ backgroundColor: 'var(--accent-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
              </div>
              <div style={{ fontSize: '16px', color: 'var(--text-primary)' }}>New group</div>
            </div>
            
            <div className="chat-item" style={{ padding: '12px 16px', borderRadius: 0, margin: 0, gap: '15px' }}>
              <div className="avatar" style={{ backgroundColor: 'var(--accent-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
              </div>
              <div style={{ fontSize: '16px', color: 'var(--text-primary)' }}>New contact</div>
            </div>

            <div className="chat-item" style={{ padding: '12px 16px', borderRadius: 0, margin: 0, gap: '15px' }}>
              <div className="avatar" style={{ backgroundColor: 'var(--accent-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
              </div>
              <div style={{ fontSize: '16px', color: 'var(--text-primary)' }}>New community</div>
            </div>
            
            <div style={{ padding: '30px 32px 15px', color: 'var(--accent-green)', fontSize: '16px' }}>
              Contacts on WhatsApp
            </div>
            <div className="chat-item" style={{ padding: '12px 16px', borderRadius: 0, margin: 0, gap: '15px' }} onClick={() => onSelectChat({ id: 'me', name: 'T (You)', isSelf: true })}>
              <div className="avatar">
                <img src="https://ui-avatars.com/api/?name=T&background=random" alt="Me" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '16px', color: 'var(--text-primary)' }}>T (You)</div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Message yourself</div>
              </div>
            </div>
          </div>
        )}

        {/* Contacts List */}
        <div>
          {!searchQuery && (
            <div style={{ padding: '20px 32px 10px', color: 'var(--accent-green)', fontSize: '16px' }}>
              A
            </div>
          )}
          {filteredContacts.map(contact => (
            <div 
              key={contact.id} 
              className="chat-item" 
              style={{ padding: '10px 16px', borderRadius: 0, margin: 0, gap: '15px' }}
              onClick={() => {
                onSelectChat(contact);
                onBack();
              }}
            >
              <div className="avatar avatar-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, borderBottom: '1px solid var(--border-default)', paddingBottom: '10px', justifyContent: 'center' }}>
                <div style={{ fontSize: '16px', color: 'var(--text-primary)' }}>{contact.name}</div>
                {contact.id === 'c3' && <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>Busy</div>}
              </div>
            </div>
          ))}
          {filteredContacts.length === 0 && (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px' }}>
              No contacts found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
