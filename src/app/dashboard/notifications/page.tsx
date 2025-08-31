import NotificationItem from "@/features/notifications/notification-item";

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
      <h2 className="text-sm font-semibold text-gray-800">Notification</h2>
      
      {/* New Notifications Section */}
      <div className="bg-white rounded-xl text-xs shadow-md border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="font-medium text-[var(--accent)]">New for you</h3>
          <button className="font-medium text-blue-600 hover:underline">
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
        <h3 className="text-xs font-medium text-gray-800">Previous notifications</h3>
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
          <p className="text-xs text-gray-500">No previous notifications.</p>
        )}
      </div>
    </div>
  );
}
