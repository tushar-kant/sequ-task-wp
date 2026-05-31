import React from 'react';
import { Icons } from '../Icons';

export default function StatusArea() {
  return (
    <div className="status-area" style={{ flex: 1, backgroundColor: 'var(--bg-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: 400 }}>
        <Icons.StatusEmpty />
        <h1 style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 300, marginTop: '24px', marginBottom: '12px' }}>
          Share status updates
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '20px' }}>
          Share photos, videos and text that disappear after 24 hours.
        </p>
      </div>
    </div>
  );
}
