import React from 'react';
import { Icons } from '../Icons';

export default function CommunitiesArea() {
  return (
    <div className="main-area communities-area">
      <div className="communities-splash">
        <div className="communities-splash-icon">
          <Icons.Communities />
        </div>
        <h1>Create communities</h1>
        <p>Bring members together in topic-based groups and easily send them admin announcements.</p>
      </div>
      <div className="e2e-encryption" style={{ position: 'absolute', bottom: '24px', left: '0', right: '0', textAlign: 'center' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          <svg viewBox="0 0 10 12" height="12" width="10" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
            <path d="M5 0C3.34 0 2 1.34 2 3V4H1C0.45 4 0 4.45 0 5V11C0 11.55 0.45 12 1 12H9C9.55 12 10 11.55 10 11V5C10 4.45 9.55 4 9 4H8V3C8 1.34 6.66 0 5 0ZM5 1.5C5.83 1.5 6.5 2.17 6.5 3V4H3.5V3C3.5 2.17 4.17 1.5 5 1.5ZM5 9C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7C5.55 7 6 7.45 6 8C6 8.55 5.55 9 5 9Z" fill="currentColor" />
          </svg>
          Your personal messages in communities are end-to-end encrypted
        </span>
      </div>
    </div>
  );
}
