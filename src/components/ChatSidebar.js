import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../Icons';
import NewChatSidebar from './NewChatSidebar';

export default function ChatSidebar({ contacts, activeChat, onSelectChat }) {
  const [showNewChat, setShowNewChat] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    { id: 'r1', name: 'Person 1', img: 'https://ui-avatars.com/api/?name=Person+1&background=random' },
    { id: 'r2', name: 'Person 2', img: 'https://ui-avatars.com/api/?name=Person+2&background=random' }
  ]);

  const filteredContacts = contacts.filter(contact => {
    if (searchQuery && !contact.name.toLowerCase().includes(searchQuery.toLowerCase()) && !contact.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (activeFilter === 'Unread') {
      return contact.unread > 0;
    } else if (activeFilter === 'Favourites') {
      return contact.isPinned;
    } else if (activeFilter === 'Groups') {
      return contact.name.toLowerCase().includes('group') || contact.name.toLowerCase().includes('team');
    } else if (activeFilter === 'Communities') {
      return contact.name.toLowerCase().includes('community') || contact.name.toLowerCase().includes('manager');
    }
    return true;
  });

  const unreadCount = contacts.filter(c => c.unread > 0).length;

  return (
    <div className="chat-sidebar">
      {showNewChat ? (
        <NewChatSidebar contacts={contacts} onBack={() => setShowNewChat(false)} onSelectChat={onSelectChat} />
      ) : (
        <>
          <div className="chat-sidebar-header">
            <h2>WhatsApp</h2>
            <div className="header-actions">
              <div className="icon" onClick={() => setShowNewChat(true)}><Icons.NewChat /></div>
              <div className="icon-wrapper" style={{ position: 'relative' }} ref={menuRef}>
                <div className={`icon ${showMenu ? 'active' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                  <Icons.Menu />
                </div>
                {showMenu && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item">
                      <span className="dropdown-icon"><Icons.NewGroup /></span>
                      New group
                    </div>
                    <div className="dropdown-item">
                      <span className="dropdown-icon"><Icons.StarredMessages /></span>
                      Starred messages
                    </div>
                    <div className="dropdown-item">
                      <span className="dropdown-icon"><Icons.SelectChats /></span>
                      Select chats
                    </div>
                    <div className="dropdown-item">
                      <span className="dropdown-icon"><Icons.MarkAllAsRead /></span>
                      Mark all as read
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item">
                      <span className="dropdown-icon"><Icons.AppLock /></span>
                      App lock
                    </div>
                    <div className="dropdown-item">
                      <span className="dropdown-icon"><Icons.LogOut /></span>
                      Log out
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

      <div className="search-container">
        <div className={`search-bar ${isSearchFocused ? 'focused' : ''}`}>
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
            placeholder="Search or start a new chat" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
          />
        </div>
      </div>

      {isSearchFocused && !searchQuery ? (
        <div className="recent-searches-container" style={{ padding: '20px', flex: 1, overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-primary)' }}>Recent searches</h3>
            {recentSearches.length > 0 && (
              <button 
                style={{ backgroundColor: '#fff', color: '#111b21', border: 'none', borderRadius: '16px', padding: '6px 12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
                onClick={() => setRecentSearches([])}
              >
                Clear all
              </button>
            )}
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {recentSearches.map(recent => (
              <div key={recent.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', width: '70px' }}>
                <img src={recent.img} alt={recent.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.2' }}>{recent.name}</span>
              </div>
            ))}
            {recentSearches.length === 0 && (
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>No recent searches</span>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="filters">
            {['All', 'Unread', 'Favourites', 'Groups', 'Communities'].map(filter => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter} {filter === 'Unread' && unreadCount > 0 ? unreadCount : ''}
              </button>
            ))}
            <button className="filter-btn">+</button>
          </div>

          <div className="chat-list">
            {filteredContacts.map(contact => (
              <div 
                key={contact.id} 
                className={`chat-item ${activeChat?.id === contact.id ? 'active' : ''}`}
                onClick={() => onSelectChat(contact)}
              >
                <div className="avatar avatar-icon">
                  {contact.isMetaAi ? (
                    <Icons.MetaAILogo />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  )}
                </div>
                <div className="chat-info">
                  <div className="chat-header">
                    <span className="chat-name">{contact.name}</span>
                    <span className={`chat-time ${contact.unread ? 'unread' : ''}`}>{contact.time}</span>
                  </div>
                  <div className="chat-last-message">
                    {contact.isPinned && <span className="pinned-icon" style={{marginRight: 4, transform: 'rotate(45deg)'}}>📌</span>}
                    {contact.hasCheck && <span className="check-icon"><Icons.DoubleCheck /></span>}
                    {contact.lastMessage === 'Sticker' && <span style={{marginRight: 4}}>📄</span>}
                    <span className="msg-preview">{contact.lastMessage}</span>
                    {contact.unread > 0 && <span className="unread-badge">{contact.unread}</span>}
                  </div>
                </div>
              </div>
            ))}
            {filteredContacts.length === 0 && (
              <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                No chats found
              </div>
            )}
          </div>
        </>
      )}
      
      {/* Footer Banner */}
      <div className="sidebar-footer">
        <Icons.WhatsAppIcon />
        <span>Get WhatsApp for Windows</span>
      </div>
        </>
      )}
    </div>
  );
}
