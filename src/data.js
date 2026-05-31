export const initialContacts = [
  { id: 1, name: 'Person 1', lastMessage: 'Dummy text', time: '13:06', unread: 0, hasCheck: true, isPinned: true },
  { id: 2, name: 'Person 2', lastMessage: 'Dummy text', time: '13:00', unread: 0, hasCheck: true },
  { id: 3, name: 'Person 3', lastMessage: 'Dummy text', time: '12:45', unread: 2, hasCheck: false },
  { id: 4, name: 'Person 4', lastMessage: 'Dummy text', time: '11:30', unread: 0, hasCheck: true },
  { id: 5, name: 'Person 5', lastMessage: 'Dummy text', time: 'Yesterday', unread: 0, hasCheck: false },
  { id: 6, name: 'Person 6', lastMessage: 'Dummy text', time: 'Yesterday', unread: 0, hasCheck: true },
  { id: 7, name: 'Person 7', lastMessage: 'Dummy text', time: 'Monday', unread: 0, hasCheck: true },
  { id: 8, name: 'Person 8', lastMessage: 'Dummy text', time: 'Sunday', unread: 0, hasCheck: true },
];

export const initialMessages = {
  3: [
    { id: 1, sender: 'them', text: 'Dummy text', time: '12:00' },
    { id: 2, sender: 'me', text: 'Dummy text', time: '12:05' },
    { id: 3, sender: 'me', text: 'Dummy text', time: '12:06' },
    { id: 4, sender: 'them', text: 'Dummy text', time: '12:21' },
    { id: 5, sender: 'me', text: 'Dummy text', time: '12:25' },
    { id: 6, sender: 'them', text: 'Dummy text', time: '12:45' }
  ]
};

export const initialCommunities = [
  { id: 1, name: 'Community 1', iconColor: '#2b2045', isStore: false, items: [
    { type: 'announcement', name: 'Announcements', text: 'Dummy text', time: 'Sunday', unread: 5 },
    { type: 'chat', name: 'Group 1', text: 'Dummy text', time: '23:55', unread: 26 }
  ]},
  { id: 2, name: 'Community 2', iconColor: '#4fbf85', isStore: false, items: [
    { type: 'announcement', name: 'Announcements', text: 'Dummy text', time: '23:13', unread: 498 }
  ]}
];
