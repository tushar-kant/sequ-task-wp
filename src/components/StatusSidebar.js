import React from 'react';
import { Icons } from '../Icons';

const recentStatuses = [
  { id: 1, name: 'Person 1', time: 'Today at 11:23', img: 'https://ui-avatars.com/api/?name=Person+1&background=random' },
  { id: 2, name: 'Person 2', time: 'Today at 00:00', img: 'https://ui-avatars.com/api/?name=Person+2&background=random' },
  { id: 3, name: 'Person 3', time: 'Yesterday at 23:26', img: 'https://ui-avatars.com/api/?name=Person+3&background=random' },
];

const viewedStatuses = [
  { id: 4, name: 'Person 4', time: 'Yesterday at 14:10', img: 'https://ui-avatars.com/api/?name=Person+4&background=random' },
];

export default function StatusSidebar() {
  return (
    <div className="sidebar" style={{ width: 420, minWidth: 350, flexShrink: 0, display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border-default)' }}>
      <div className="sidebar-header" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-primary)' }}>
        <h2 style={{ color: 'var(--text-primary)', fontSize: '22px', fontWeight: 600, margin: 0, flex: 1 }}>Status</h2>
        <div className="header-actions" style={{ display: 'flex', gap: 16 }}>
          <div className="icon-btn" style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <Icons.AddCircle />
          </div>
          <div className="icon-btn" style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <Icons.Menu />
          </div>
        </div>
      </div>

      <div className="status-list" style={{ overflowY: 'auto', flex: 1 }}>
        {/* My Status */}
        <div className="status-item" style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', cursor: 'pointer' }}>
          <div className="status-avatar-wrapper" style={{ position: 'relative', marginRight: 15 }}>
            <img 
              src="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/631725396_2764426313933198_6260378399046218586_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa4gHAEhcJCjJ2GcEk0zBlc4w6SU0CatQQn8aIsalETCk21w&oe=6A225D0C&_nc_sid=5e03e0&_nc_cat=102" 
              alt="My Status" 
              style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 14, height: 14, backgroundColor: 'var(--accent-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--bg-default)' }}>
              <span style={{ color: 'var(--bg-main)', fontSize: 14, fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </div>
          </div>
          <div className="status-info" style={{ flex: 1 }}>
            <div style={{ color: 'var(--text-primary)', fontSize: 16 }}>My status</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 2 }}>Click to add status update</div>
          </div>
        </div>

        {/* Recent */}
        <div style={{ padding: '30px 16px 15px', color: 'var(--text-secondary)', fontSize: 14 }}>Recent</div>
        {recentStatuses.map(status => (
          <div key={status.id} className="status-item" style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', cursor: 'pointer' }}>
            <div className="status-avatar-wrapper" style={{ marginRight: 15, padding: 2, borderRadius: '50%', border: '2px solid var(--accent-green)' }}>
              <img src={status.img} alt={status.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="status-info" style={{ flex: 1 }}>
              <div style={{ color: 'var(--text-primary)', fontSize: 16 }}>{status.name}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 2 }}>{status.time}</div>
            </div>
          </div>
        ))}

        {/* Viewed */}
        <div style={{ padding: '30px 16px 15px', color: 'var(--text-secondary)', fontSize: 14 }}>Viewed</div>
        {viewedStatuses.map(status => (
          <div key={status.id} className="status-item" style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', cursor: 'pointer' }}>
            <div className="status-avatar-wrapper" style={{ marginRight: 15, padding: 2, borderRadius: '50%', border: '2px solid #54656f' }}>
              <img src={status.img} alt={status.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', display: 'block', filter: 'grayscale(100%) opacity(0.8)' }} />
            </div>
            <div className="status-info" style={{ flex: 1 }}>
              <div style={{ color: 'var(--text-primary)', fontSize: 16 }}>{status.name}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 2 }}>{status.time}</div>
            </div>
          </div>
        ))}

        {/* Hidden */}
        <div style={{ padding: '30px 16px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Hidden</span>
          <span style={{ color: 'var(--accent-green)', fontSize: 14, cursor: 'pointer' }}>Show</span>
        </div>
      </div>
    </div>
  );
}
