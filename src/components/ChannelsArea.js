import React from 'react';
import { Icons } from '../Icons';

export default function ChannelsArea() {
  return (
    <div className="channels-area" style={{ flex: 1, backgroundColor: 'var(--bg-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: 440 }}>
        <Icons.ChannelEmpty />
        <h1 style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 300, marginTop: '24px', marginBottom: '12px' }}>
          Discover channels
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '20px' }}>
          Entertainment, sports, news, lifestyle, people and more. Follow the channels that interest you
        </p>
      </div>
    </div>
  );
}
