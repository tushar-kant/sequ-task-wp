import React from 'react';
import { Icons } from '../Icons';
import { initialCommunities } from '../data';

export default function CommunitiesSidebar({ activeChat, onSelectChat }) {
  return (
    <div className="chat-sidebar">
      <div className="chat-sidebar-header" style={{ paddingBottom: '12px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Communities</h2>
        <div className="header-actions">
          <div className="icon">
            <svg viewBox="0 0 24 24" height="20" width="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="sidebar-content" style={{ padding: '0' }}>
        <div className="community-new-item">
          <div className="community-new-icon">
            <Icons.Communities />
          </div>
          <span style={{ fontWeight: '500', fontSize: '16px' }}>New community</span>
        </div>

        {initialCommunities.map(community => (
          <div key={community.id} className="community-group">
            <div className="community-group-header">
              <div className="community-group-icon" style={{ backgroundColor: community.iconColor || '#2a3942' }}>
                {community.img ? <img src={community.img} alt={community.name} /> : <Icons.Communities />}
              </div>
              <span className="community-name">{community.name}</span>
            </div>

            {community.items.map((item, idx) => {
              const chatId = 'community_' + community.id + '_' + idx;
              return (
              <div 
                key={idx} 
                className={`community-chat-item ${activeChat?.id === chatId ? 'active' : ''}`}
                onClick={() => onSelectChat && onSelectChat({ id: chatId, name: item.name, isCommunity: true, lastMessage: item.text, time: item.time, unread: item.unread })}
              >
                <div className="community-chat-avatar">
                  {item.type === 'announcement' ? (
                    <div className="announcement-icon-wrapper" style={{ backgroundColor: '#0f3629' }}>
                      <svg viewBox="0 0 24 24" height="20" width="20" fill="currentColor">
                        <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="chat-icon-wrapper">
                      {item.img ? <img src={item.img} alt={item.name} /> : <Icons.Communities />}
                    </div>
                  )}
                </div>
                <div className="community-chat-info">
                  <div className="community-chat-top">
                    <span className="community-chat-name">{item.name}</span>
                    <span className={`community-chat-time ${item.unread ? 'unread-time' : ''}`}>{item.time}</span>
                  </div>
                  <div className="community-chat-bottom">
                    <span className="community-chat-text">{item.text}</span>
                    {item.unread > 0 && (
                      <span className="community-unread-badge">
                        {item.type === 'announcement' && (
                          <svg viewBox="0 0 24 24" height="12" width="12" fill="currentColor" style={{ marginRight: '2px' }}>
                            <path d="M12 2L22 20H2L12 2Z" />
                          </svg>
                        )}
                        {item.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              );
            })}
            
            <div className="community-view-all">
              <span>View all</span>
            </div>
            <div className="community-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
