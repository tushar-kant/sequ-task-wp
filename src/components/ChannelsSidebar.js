import React from 'react';
import { Icons } from '../Icons';

const dummyChannels = [
  { id: 1, name: 'Channel 1', time: '13:00', text: 'Dummy text', verified: true, pinned: true, unread: 0, img: 'https://ui-avatars.com/api/?name=Channel+1&background=random' },
  { id: 2, name: 'Channel 2', time: 'Sunday', text: 'Dummy text', verified: true, pinned: true, unread: 0, img: 'https://ui-avatars.com/api/?name=Channel+2&background=random' },
  { id: 3, name: 'Channel 3', time: '13:02', text: 'Dummy text', verified: true, pinned: false, unread: 2, img: 'https://ui-avatars.com/api/?name=Channel+3&background=random' },
  { id: 4, name: 'Channel 4', time: '12:48', text: 'Dummy text', verified: false, pinned: false, unread: 6, img: 'https://ui-avatars.com/api/?name=Channel+4&background=random' },
  { id: 5, name: 'Channel 5', time: '11:44', text: 'Dummy text', verified: false, pinned: false, unread: 39, img: 'https://ui-avatars.com/api/?name=Channel+5&background=random' },
  { id: 6, name: 'Channel 6', time: '11:23', text: 'Dummy text', verified: false, pinned: false, unread: 0, img: 'https://ui-avatars.com/api/?name=Channel+6&background=random' },
  { id: 7, name: 'Channel 7', time: '11:19', text: 'Dummy text', verified: false, pinned: false, unread: 4, img: 'https://ui-avatars.com/api/?name=Channel+7&background=random' },
  { id: 8, name: 'Channel 8', time: '10:30', text: 'Dummy text', verified: false, pinned: false, unread: 5, img: 'https://ui-avatars.com/api/?name=Channel+8&background=random' },
];

export default function ChannelsSidebar({ activeChat, onSelectChat }) {
  return (
    <div className="sidebar" style={{ width: 420, minWidth: 350, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-default)', borderRight: '1px solid var(--border-default)', position: 'relative' }}>
      <div className="sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', color: 'var(--text-primary)' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 600, margin: 0 }}>Channels</h2>
        <div className="header-actions" style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)' }}>
          <div className="icon-btn" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer' }}>
            <Icons.Plus />
          </div>
        </div>
      </div>
      
      <div className="sidebar-search" style={{ padding: '0 12px 10px 12px', borderBottom: '1px solid var(--border-default)' }}>
        <div className="search-bar" style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--search-bg)', borderRadius: '8px', padding: '0 12px', height: '36px' }}>
          <div className="search-icon" style={{ color: 'var(--text-secondary)', marginRight: '12px', display: 'flex' }}>
            <Icons.Search />
          </div>
          <input 
            type="text" 
            placeholder="Search" 
            style={{ border: 'none', background: 'transparent', color: 'var(--text-primary)', width: '100%', fontSize: '15px', outline: 'none' }}
          />
        </div>
      </div>

      <div className="channel-list" style={{ flex: 1, overflowY: 'auto' }}>
        {dummyChannels.map(channel => (
          <div 
            key={channel.id} 
            className={`chat-item ${activeChat?.id === 'channel_' + channel.id ? 'active' : ''}`} 
            style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', cursor: 'pointer', transition: 'background-color 0.2s', position: 'relative' }}
            onClick={() => onSelectChat && onSelectChat({ id: 'channel_' + channel.id, name: channel.name, isChannel: true, lastMessage: channel.text, time: channel.time, unread: channel.unread })}
          >
            <div className="avatar-wrapper" style={{ position: 'relative', marginRight: '15px' }}>
              <img src={channel.img} alt={channel.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
              {channel.verified && (
                <div style={{ position: 'absolute', bottom: -2, right: -2, backgroundColor: 'var(--bg-default)', borderRadius: '50%', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icons.VerifyTick />
                </div>
              )}
            </div>
            
            <div className="chat-info" style={{ flex: 1, minWidth: 0 }}>
              <div className="chat-info-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                <span className="chat-name" style={{ color: 'var(--text-primary)', fontSize: '17px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {channel.name}
                </span>
                <span className="chat-time" style={{ color: channel.unread > 0 ? 'var(--accent-green)' : 'var(--text-secondary)', fontSize: '12px' }}>
                  {channel.time}
                </span>
              </div>
              <div className="chat-info-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="chat-last-message" style={{ color: 'var(--text-secondary)', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                  {channel.text}
                </span>
                <div className="chat-meta" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {channel.pinned && (
                    <span style={{ color: 'var(--text-secondary)' }}><Icons.Pin /></span>
                  )}
                  {channel.unread > 0 && (
                    <span className="unread-badge" style={{ backgroundColor: 'var(--accent-green)', color: '#111b21', borderRadius: '50%', minWidth: '20px', height: '20px', padding: '0 6px', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {channel.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
