import React from 'react';
import { Icons } from '../Icons';

export default function NavSidebar({ currentView, onViewChange }) {
  return (
    <div className="nav-sidebar">
      <div className="nav-top">
        <div 
          className={`nav-icon ${currentView === 'chat' ? 'active' : ''}`}
          onClick={() => onViewChange && onViewChange('chat')}
          style={{ cursor: 'pointer' }}
        >
          <Icons.Chat />
          <span className="badge">7</span>
        </div>
        <div 
          className={`nav-icon ${currentView === 'status' ? 'active' : ''}`}
          onClick={() => onViewChange && onViewChange('status')}
          style={{ cursor: 'pointer' }}
        >
          <Icons.Status />
        </div>
        <div 
          className={`nav-icon ${currentView === 'channels' ? 'active' : ''}`}
          onClick={() => onViewChange && onViewChange('channels')}
          style={{ cursor: 'pointer' }}
        >
          <Icons.Channels />
          <span className="badge">5</span>
        </div>
        <div 
          className={`nav-icon ${currentView === 'communities' ? 'active' : ''}`}
          onClick={() => onViewChange && onViewChange('communities')}
          style={{ cursor: 'pointer' }}
        >
          <Icons.Communities />
        </div>
        <div className="nav-divider" style={{ width: '32px', height: '1px', backgroundColor: 'var(--border-default)', margin: '8px auto' }}></div>
        <div 
          className={`nav-icon ${currentView === 'meta-ai' ? 'active' : ''}`}
          onClick={() => onViewChange && onViewChange('meta-ai')}
          style={{ cursor: 'pointer' }}
        >
          <img src="https://static.whatsapp.net/rsrc.php/yS/r/T_xj3a3ApC9.webp" alt="Meta AI" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
        </div>
      </div>
      
      <div className="nav-bottom">
        <div className="nav-icon"><Icons.Settings /></div>
        <div className="nav-avatar">
          <img
            src="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/631725396_2764426313933198_6260378399046218586_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4gHAEhcJCjJ2GcEk0zBlc4w6SU0CatQQn8aIsalETCk21w&oe=6A225D0C&_nc_sid=5e03e0&_nc_cat=102"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

