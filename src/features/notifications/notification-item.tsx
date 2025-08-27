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

export default function NotificationItem({ title, source, date, isNew }: NotificationItemProps) {
  return (
    <div className="flex items-start justify-between p-4 text-xs border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{title}</span>
        <span className=" text-gray-500">
          <span className="font-semibold">{source}</span> - {date}
        </span>
      </div>
      {isNew && (
        <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0 ml-4 mt-2"></div>
      )}
    </div>
  );
}