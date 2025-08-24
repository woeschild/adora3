'use client';

import React from 'react';

/**
 * A reusable component for a single notification item.
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the notification.
 * @param {string} props.source - The source/sender of the notification.
 * @param {string} props.date - The date the notification was received.
 * @param {boolean} props.isNew - Whether the notification is new (unread).
 */
interface NotificationItemProps {
  title: string;
  source: string;
  date: string;
  isNew: boolean;
}

function NotificationItem({ title, source, date, isNew }: NotificationItemProps) {
  return (
    <div className="flex items-start justify-between p-4 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{title}</span>
        <span className="text-sm text-gray-500">
          <span className="font-semibold">{source}</span> - {date}
        </span>
      </div>
      {isNew && (
        <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 ml-4 mt-2"></div>
      )}
    </div>
  );
}

/**
 * The main component for the Notifications page content.
 */
export default function NotificationsContent() {
  const newNotifications = [
    { title: 'New Feature Alert! Adora Now Supports Multi-Channel Customer Interactions.', source: 'Adora', date: 'Mar 4', isNew: true },
    { title: 'New Feature Alert! Adora Now Supports Multi-Channel Customer Interactions.', source: 'Adora', date: 'Mar 4', isNew: true },
    { title: 'New Feature Alert! Adora Now Supports Multi-Channel Customer Interactions.', source: 'Adora', date: 'Mar 4', isNew: true },
    { title: 'New Feature Alert! Adora Now Supports Multi-Channel Customer Interactions.', source: 'Adora', date: 'Mar 4', isNew: true },
    { title: 'New Feature Alert! Adora Now Supports Multi-Channel Customer Interactions.', source: 'Adora', date: 'Mar 4', isNew: true },
    { title: 'New Feature Alert! Adora Now Supports Multi-Channel Customer Interactions.', source: 'Adora', date: 'Mar 4', isNew: true },
    { title: 'New Feature Alert! Adora Now Supports Multi-Channel Customer Interactions.', source: 'Adora', date: 'Mar 4', isNew: true },
    { title: 'New Feature Alert! Adora Now Supports Multi-Channel Customer Interactions.', source: 'Adora', date: 'Mar 4', isNew: true },
  ];

  const previousNotifications : {
    title: string;
    source: string;
    date: string;
    isNew: boolean;
    }[] = [];

  return (
    <div className="p-6 space-y-8">
      {/* Notifications Header */}
      <h2 className="text-2xl font-semibold text-gray-800">Notification</h2>
      
      {/* New Notifications Section */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="font-medium text-[var(--accent)]">New for you</h3>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            Mark all as read
          </button>
        </div>
        <div>
          {newNotifications.map((notification, index) => (
            <NotificationItem 
              key={index} 
              title={notification.title} 
              source={notification.source} 
              date={notification.date} 
              isNew={notification.isNew} 
            />
          ))}
        </div>
      </div>

      {/* Previous Notifications Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Previous notifications</h3>
        {previousNotifications.length > 0 ? (
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            {previousNotifications.map((notification, index) => (
              <NotificationItem 
                key={index} 
                title={notification.title} 
                source={notification.source} 
                date={notification.date} 
                isNew={notification.isNew} 
              />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No previous notifications.</p>
        )}
      </div>
    </div>
  );
}
