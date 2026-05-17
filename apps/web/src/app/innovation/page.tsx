'use client';

import { useState, useEffect } from 'react';
import { 
  Lightbulb, MessageSquare, ThumbsUp, Plus, 
  Search, Filter, ChevronRight, X, Star, 
  TrendingUp, Award, Zap
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Layout } from '@/components/layout/Layout';

interface Idea {
  id: string;
  title: string;
  description: string;
  submittedBy: string;
  department: string;
  upvotes: number;
  impactScore: number;
  status: 'IDEAS' | 'IN_PROGRESS' | 'IMPLEMENTED';
  createdAt: string;
  user: { name: string; department: { name: string } };
  comments: any[];
}

const CHALLENGES = [
  { id: 1, title: 'B2B TAT Reduction', description: 'Reduce installation and fulfillment time for B2B industrial contracts to under 24 hours.', icon: Zap },
  { id: 2, title: 'Gen 6 Motor Efficiency', description: 'Achieve 80%+ efficiency in the next generation BLDC motor without increasing BOM cost.', icon: TrendingUp },
  { id: 3, title: 'Commecial Mixer Pilot', description: 'Validate the new commercial-grade mixer grinder in 500+ industrial canteens.', icon: Star },
];

export default function InnovationHub() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newImpact, setNewImpact] = useState(5);

  const fetchIdeas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/innovation/ideas', { withCredentials: true });
      setIdeas(response.data.ideas);
    } catch (error) {
      toast.error('Failed to load innovation ideas');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  const handleCreateIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/innovation/ideas', {
        title: newTitle,
        description: newDesc,
        impactScore: newImpact
      }, { withCredentials: true });
      toast.success('Idea submitted successfully!');
      setIsModalOpen(false);
      fetchIdeas();
      setNewTitle('');
      setNewDesc('');
      setNewImpact(5);
    } catch (error) {
      toast.error('Failed to submit idea');
    }
  };

  const handleUpvote = async (id: string) => {
    try {
      await axios.post(`http://localhost:5000/api/v1/innovation/ideas/${id}/upvote`, {}, { withCredentials: true });
      setIdeas(prev => prev.map(i => i.id === id ? { ...i, upvotes: i.upvotes + 1 } : i));
    } catch (error) {
      toast.error('Failed to upvote');
    }
  };

  const Column = ({ title, status, color }: { title: string, status: string, color: string }) => {
    const columnIdeas = ideas.filter(i => i.status === status);
    return (
      <div className="flex-1 min-w-[320px] bg-slate-50/50 rounded-2xl p-4 border border-slate-200/60">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${color}`} />
            <h3 className="font-bold text-slate-700 uppercase tracking-wider text-xs">{title}</h3>
          </div>
          <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            {columnIdeas.length}
          </span>
        </div>
        <div className="space-y-4">
          {columnIdeas.map(idea => (
            <IdeaCard key={idea.id} idea={idea} onUpvote={handleUpvote} />
          ))}
          {columnIdeas.length === 0 && (
            <div className="h-32 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-xs">
              No ideas here yet
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Innovation Hub</h1>
            <p className="text-slate-500 mt-1">Submit, vote, and collaborate on the next big breakthrough for Atomberg.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-atomberg gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <Plus size={18} />
            Submit New Idea
          </button>
        </div>

        {/* Challenges Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {CHALLENGES.map(challenge => (
            <div key={challenge.id} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <challenge.icon size={80} />
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/10 group-hover:bg-atomberg-gold group-hover:text-atomberg-black transition-colors">
                  <challenge.icon size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{challenge.description}</p>
                <div className="mt-4 flex items-center text-atomberg-gold text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline gap-1">
                  View All Responses <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kanban Board */}
        {isLoading ? (
          <div className="flex flex-col xl:flex-row gap-8 overflow-x-auto pb-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex-1 min-w-[320px] bg-slate-50/50 rounded-2xl p-4 border border-slate-200/60 animate-pulse">
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="h-4 w-24 bg-slate-200 rounded"></div>
                  <div className="h-5 w-8 bg-slate-200 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  {[1, 2].map(j => (
                    <div key={j} className="bg-white rounded-xl p-5 border border-slate-200 h-36"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row gap-8 overflow-x-auto pb-8">
            <Column title="Ideas" status="IDEAS" color="bg-blue-400" />
            <Column title="In Progress" status="IN_PROGRESS" color="bg-atomberg-gold" />
            <Column title="Implemented" status="IMPLEMENTED" color="bg-green-500" />
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-atomberg-gold/10 rounded-xl flex items-center justify-center text-atomberg-gold-dark">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Submit New Idea</h3>
                    <p className="text-xs text-slate-500">Contribute to Atomberg's growth</p>
                  </div>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleCreateIdea} className="p-8 space-y-6">
                <div>
                  <label className="label mb-2">Idea Title</label>
                  <input 
                    type="text" 
                    required 
                    className="input text-lg font-medium" 
                    placeholder="A descriptive name for your idea"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label mb-2">Detailed Description</label>
                  <textarea 
                    required 
                    className="input min-h-[120px] resize-none" 
                    placeholder="Explain the problem and your proposed solution..."
                    value={newDesc}
                    onChange={e => setNewDesc(e.target.value)}
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="label">Expected Impact Score</label>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-full">{newImpact}/10</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    className="w-full accent-atomberg-gold h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                    value={newImpact}
                    onChange={e => setNewImpact(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>Incremental</span>
                    <span>Breakthrough</span>
                  </div>
                </div>
                <div className="pt-4 flex gap-4">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary flex-1 py-3 text-base">Discard</button>
                  <button type="submit" className="btn-atomberg flex-1 py-3 text-base shadow-lg shadow-atomberg-gold/20">Submit to Hub</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

function IdeaCard({ idea, onUpvote }: { idea: Idea, onUpvote: (id: string) => void }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group relative overflow-hidden">
      <div className="flex justify-between items-start mb-3">
        <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">
          {idea.department}
        </span>
        <div className="flex items-center gap-1 bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full text-[10px] font-bold">
          <Award size={10} />
          Impact: {idea.impactScore}/10
        </div>
      </div>
      <h4 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{idea.title}</h4>
      <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">{idea.description}</p>
      
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 uppercase">
            {idea.user.name.charAt(0)}
          </div>
          <span className="text-[10px] font-medium text-slate-400">{idea.user.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onUpvote(idea.id)}
            className="flex items-center gap-1.5 text-slate-400 hover:text-atomberg-gold transition-colors"
          >
            <ThumbsUp size={14} className={idea.upvotes > 0 ? 'fill-atomberg-gold text-atomberg-gold' : ''} />
            <span className="text-xs font-bold">{idea.upvotes}</span>
          </button>
          <div className="flex items-center gap-1.5 text-slate-400">
            <MessageSquare size={14} />
            <span className="text-xs font-bold">{idea.comments.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
