'use client';

import { Bell, Check, X, Info, AlertTriangle, Zap, RefreshCw, Menu } from 'lucide-react';
import { useAuthStore } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'reminder' | 'tech' | 'system';
  read: boolean;
}

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Goal Deadline Approaching',
    description: 'Q2 Energy Efficiency Research goal is due in 3 days.',
    timestamp: '2h ago',
    type: 'reminder',
    read: false,
  },
  {
    id: '2',
    title: 'New BEE 7-Star Energy Rating',
    description: 'BEE announces new 7-star rating for BLDC fans — compliance deadline Q3 2026',
    timestamp: '1d ago',
    type: 'tech',
    read: false,
  },
  {
    id: '3',
    title: 'Competitor Alert: Havells',
    description: 'Havells launches smart IoT fan series — competitive threat in B2B',
    timestamp: '1d ago',
    type: 'tech',
    read: false,
  },
  {
    id: '4',
    title: 'Ceramic industry energy mandate',
    description: 'Ceramic industry energy mandate: 24/7 efficiency required by 2027',
    timestamp: '2d ago',
    type: 'tech',
    read: false,
  },
  {
    id: '5',
    title: 'New Government Grants',
    description: 'New textile factory automation grants announced by government',
    timestamp: '2d ago',
    type: 'tech',
    read: true,
  },
  {
    id: '6',
    title: 'BLDC Motor Efficiency Benchmark',
    description: 'BLDC motor efficiency benchmark raised to 78% by industry body',
    timestamp: '3d ago',
    type: 'tech',
    read: true,
  },
  {
    id: '7',
    title: 'System Update',
    description: 'New Tech Radar module added to portal.',
    timestamp: '1w ago',
    type: 'system',
    read: true,
  },
];

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const { user } = useAuthStore();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [lastSynced, setLastSynced] = useState('2 minutes ago');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await api.get('/notifications');
        if (res.data?.notifications) {
          setNotifications(res.data.notifications);
        }
        setLastSynced('Just now');
      } catch (error) {
        console.error('Failed to fetch real notifications, falling back to mock');
        const saved = localStorage.getItem('atomberg_notifications');
        if (saved) {
          setNotifications(JSON.parse(saved));
        } else {
          setNotifications(INITIAL_NOTIFICATIONS);
        }
      }
    };

    if (user) {
      fetchNotifications();
    } else {
      setNotifications(INITIAL_NOTIFICATIONS);
    }
  }, [user]);

  useEffect(() => {
    if (notifications.length > 0) {
      localStorage.setItem('atomberg_notifications', JSON.stringify(notifications));
    }
  }, [notifications]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const dismiss = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };
return (
  <header className="h-16 border-b border-slate-200 bg-white px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
    <div className="flex items-center gap-4">
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 md:hidden"
      >
        <Menu size={20} />
      </button>
      <div className="flex items-center gap-2 text-slate-400 text-[10px] md:text-xs">
        <RefreshCw size={12} className="animate-spin-slow" />
        <span className="truncate max-w-[120px] md:max-w-none">Last synced with SAP: {lastSynced}</span>
      </div>
    </div>

    <div className="flex items-center gap-2 md:gap-4">
      <div className="relative">
...
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full transition-colors relative ${isOpen ? 'bg-slate-100 text-indigo-600' : 'text-slate-500 hover:bg-slate-100'}`}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setIsOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-96 bg-white border border-slate-200 rounded-xl shadow-xl z-40 overflow-hidden ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <h3 className="font-semibold text-slate-900">Notifications</h3>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>

                <div className="max-h-[480px] overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-sm text-slate-500">No notifications</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {/* Reminders Section */}
                      {notifications.some(n => n.type === 'reminder') && (
                        <div className="px-4 py-2 bg-slate-50/30 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Reminders
                        </div>
                      )}
                      {notifications.filter(n => n.type === 'reminder').map(n => (
                        <NotificationItem
                          key={n.id}
                          notification={n}
                          onMarkRead={markAsRead}
                          onDismiss={dismiss}
                        />
                      ))}

                      {/* Industry Alerts Section */}
                      {notifications.some(n => n.type === 'tech') && (
                        <div className="px-4 py-2 bg-slate-50/30 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Industry Alerts
                        </div>
                      )}
                      {notifications.filter(n => n.type === 'tech').map(n => (
                        <NotificationItem
                          key={n.id}
                          notification={n}
                          onMarkRead={markAsRead}
                          onDismiss={dismiss}
                        />
                      ))}

                      {/* System Section */}
                      {notifications.some(n => n.type === 'system') && (
                        <div className="px-4 py-2 bg-slate-50/30 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          System
                        </div>
                      )}
                      {notifications.filter(n => n.type === 'system').map(n => (
                        <NotificationItem
                          key={n.id}
                          notification={n}
                          onMarkRead={markAsRead}
                          onDismiss={dismiss}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="h-8 w-px bg-slate-200 mx-2" />

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-900">{user?.name}</p>
            <p className="text-xs text-slate-500 capitalize">{user?.role?.toLowerCase()}</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm border border-indigo-200">
            {user?.name?.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
}

function NotificationItem({
  notification,
  onMarkRead,
  onDismiss
}: {
  notification: Notification;
  onMarkRead: (id: string) => void;
  onDismiss: (id: string) => void;
}) {
  const Icon = notification.type === 'reminder' ? AlertTriangle : notification.type === 'tech' ? Zap : Info;
  const iconColor = notification.type === 'reminder' ? 'text-amber-500' : notification.type === 'tech' ? 'text-atomberg-gold-dark' : 'text-blue-500';

  return (
    <div className={`p-4 flex gap-3 group transition-colors ${notification.read ? 'bg-white' : 'bg-indigo-50/30'}`}>
      <div className={`mt-0.5 ${iconColor}`}>
        <Icon size={16} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className={`text-sm font-medium ${notification.read ? 'text-slate-900' : 'text-indigo-900'}`}>
            {notification.title}
          </p>
          <span className="text-[10px] text-slate-400 whitespace-nowrap">{notification.timestamp}</span>
        </div>
        <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{notification.description}</p>
        <div className="flex gap-3 mt-2">
          {!notification.read && (
            <button
              onClick={() => onMarkRead(notification.id)}
              className="text-[11px] font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              <Check size={12} />
              Mark as read
            </button>
          )}
          <button
            onClick={() => onDismiss(notification.id)}
            className="text-[11px] font-medium text-slate-400 hover:text-slate-600 flex items-center gap-1"
          >
            <X size={12} />
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
