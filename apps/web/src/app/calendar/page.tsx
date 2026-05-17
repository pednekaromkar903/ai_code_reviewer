'use client';

import { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Plus, Calendar as CalendarIcon, Info, X } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Layout } from '@/components/layout/Layout';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'goal' | 'checkin' | 'cycle' | 'manual';
  notes?: string;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  // New Event Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newType, setNewType] = useState('manual');
  const [newNotes, setNewNotes] = useState('');

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/calendar/events', {
        withCredentials: true
      });
      const formattedEvents = response.data.events.map((e: any) => ({
        ...e,
        start: new Date(e.date),
        end: new Date(e.date), // For simplicity in month view
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Failed to fetch events:', error);
      toast.error('Failed to load calendar events');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/calendar/events', {
        title: newTitle,
        date: newDate,
        type: newType,
        notes: newNotes
      }, { withCredentials: true });
      
      toast.success('Event added successfully');
      setIsModalOpen(false);
      fetchEvents();
      // Reset form
      setNewTitle('');
      setNewDate('');
      setNewType('manual');
      setNewNotes('');
    } catch (error) {
      toast.error('Failed to add event');
    }
  };

  const eventStyleGetter = (event: Event) => {
    let backgroundColor = '#3b82f6'; // blue-500
    if (event.type === 'goal') backgroundColor = '#ef4444'; // red-500
    if (event.type === 'checkin') backgroundColor = '#10b981'; // green-500
    if (event.type === 'cycle') backgroundColor = '#a855f7'; // purple-500
    
    return {
      style: {
        backgroundColor,
        borderRadius: '6px',
        opacity: 0.9,
        color: 'white',
        border: '0px',
        display: 'block',
        fontSize: '12px',
        padding: '2px 6px'
      }
    };
  };

  return (
    <Layout>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Enterprise Calendar</h1>
            <p className="text-slate-500 text-sm">Track goal deadlines, check-ins, and strategic cycles.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-atomberg gap-2"
          >
            <Plus size={18} />
            Add Event
          </button>
        </div>

        {/* Legend */}
        <div className="flex gap-6 mb-6 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-xs font-medium text-slate-600">Goal Deadlines</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-slate-600">Check-ins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-xs font-medium text-slate-600">Cycles</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs font-medium text-slate-600">Manual Reminders</span>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded-2xl shadow-xl border border-slate-200 min-h-[600px]">
          {isLoading ? (
            <div className="h-full w-full animate-pulse flex flex-col gap-4">
              <div className="flex justify-between items-center mb-4">
                <div className="h-8 w-48 bg-slate-200 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-slate-200 rounded-lg"></div>
                  <div className="h-8 w-24 bg-slate-200 rounded-lg"></div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className="bg-slate-100 rounded-xl min-h-[80px]"></div>
                ))}
              </div>
            </div>
          ) : (
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              views={['month', 'week', 'day']}
              defaultView={Views.MONTH}
              eventPropGetter={eventStyleGetter}
              onSelectEvent={(event) => setSelectedEvent(event as Event)}
              className="font-sans"
            />
          )}
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className={`p-6 text-white flex justify-between items-start ${
                selectedEvent.type === 'goal' ? 'bg-red-500' : 
                selectedEvent.type === 'checkin' ? 'bg-green-500' : 
                selectedEvent.type === 'cycle' ? 'bg-purple-500' : 'bg-blue-500'
              }`}>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{selectedEvent.type}</span>
                  <h3 className="text-xl font-bold mt-1">{selectedEvent.title}</h3>
                </div>
                <button onClick={() => setSelectedEvent(null)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="text-slate-400 mt-1" size={18} />
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Date</p>
                      <p className="text-sm font-semibold text-slate-900">{format(selectedEvent.start, 'PPPP')}</p>
                    </div>
                  </div>
                  {selectedEvent.notes && (
                    <div className="flex items-start gap-3">
                      <Info className="text-slate-400 mt-1" size={18} />
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Notes</p>
                        <p className="text-sm text-slate-600">{selectedEvent.notes}</p>
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="w-full mt-8 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Event Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-lg font-bold text-slate-900">Add New Event</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleAddEvent} className="p-6 space-y-4">
                <div>
                  <label className="label mb-1">Event Title</label>
                  <input 
                    type="text" 
                    required 
                    className="input" 
                    placeholder="e.g. B2B Strategy Meeting"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label mb-1">Date</label>
                    <input 
                      type="date" 
                      required 
                      className="input" 
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="label mb-1">Type</label>
                    <select 
                      className="input"
                      value={newType}
                      onChange={(e) => setNewType(e.target.value)}
                    >
                      <option value="manual">Manual Reminder</option>
                      <option value="goal">Goal Deadline</option>
                      <option value="checkin">Check-in</option>
                      <option value="cycle">Cycle Event</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label mb-1">Notes</label>
                  <textarea 
                    className="input min-h-[100px]" 
                    placeholder="Additional details..."
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                  />
                </div>
                <div className="pt-4 flex gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary flex-1">Cancel</button>
                  <button type="submit" className="btn-atomberg flex-1">Save Event</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
