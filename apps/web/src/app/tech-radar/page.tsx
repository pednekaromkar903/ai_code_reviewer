'use client';

import { useState, useEffect } from 'react';
import { 
  Zap, Globe, Shield, Cpu, Activity, 
  BarChart3, Layers, Database, ChevronRight, 
  Search, Filter, Info, ArrowUpRight, Newspaper
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Layout } from '@/components/layout/Layout';

interface TechEntry {
  id: string;
  name: string;
  relevanceScore: number;
  adoptionStage: string;
  description: string;
  impact: string;
  adaptationPlan: string;
}

const NEWS_TICKER = [
  "Government mandates 24/7 energy monitoring for ceramic sector",
  "Havells invests ₹200Cr in smart home ecosystem",
  "New BEE norms: All ceiling fans must be BLDC by 2027",
  "Textile industry sees 40% energy savings with smart ventilation",
  "Atomberg's competitor launches industrial HVLS fan series",
  "Industrial IoT market in India to grow 18% CAGR through 2028"
];

const STAGES = ["All", "Research", "Pilot", "Scaling", "Adopted", "Mandatory"];

const MOCK_ENTRIES: TechEntry[] = [
  {
    id: "1",
    name: "Advanced BLDC Motor Controllers",
    relevanceScore: 9.5,
    adoptionStage: "Scaling",
    description: "Next-gen silicon carbide (SiC) based controllers for 15% higher efficiency and reduced heat dissipation in ceiling fans.",
    impact: "Reduces bill of materials by 12% while increasing motor lifespan by 30%.",
    adaptationPlan: "Finalize supplier partnership for SiC MOSFETs and begin pilot production in Q3 2026."
  },
  {
    id: "2",
    name: "Matter Protocol Integration",
    relevanceScore: 8.8,
    adoptionStage: "Pilot",
    description: "Adopting the Matter smart home standard for universal interoperability across Apple Home, Google Home, and Alexa.",
    impact: "Expands addressable market to smart-home enthusiasts and reduces custom driver maintenance.",
    adaptationPlan: "Firmware update for Renesa-based modules currently in beta testing with 500 early adopters."
  },
  {
    id: "3",
    name: "AI-Driven Predictive Maintenance",
    relevanceScore: 8.2,
    adoptionStage: "Research",
    description: "Using vibration and current signature analysis to predict motor failure in industrial HVLS fans before they occur.",
    impact: "SaaS revenue opportunity and reduced downtime for industrial clients.",
    adaptationPlan: "Collecting telemetry data from 1000 field units to train the anomaly detection model."
  },
  {
    id: "4",
    name: "Graphene-Enhanced Fan Blades",
    relevanceScore: 7.5,
    adoptionStage: "Research",
    description: "Ultra-lightweight composite blades using graphene for extreme rigidity and reduced air drag.",
    impact: "Reduces noise by 4dB and power consumption by 5% at high speeds.",
    adaptationPlan: "Material science R&D phase. Testing tensile strength and UV stability of initial prototypes."
  },
  {
    id: "5",
    name: "Solar-Powered Smart Ventilation",
    relevanceScore: 9.0,
    adoptionStage: "Scaling",
    description: "Hybrid fans that prioritize solar DC input with seamless grid fallback for off-grid and semi-urban markets.",
    impact: "Direct alignment with government solar mandates and energy-saving initiatives.",
    adaptationPlan: "Launching 'Atomberg Sun-Series' in Rajasthan and Gujarat as pilot states in May 2026."
  },
  {
    id: "6",
    name: "Edge Computing for Industrial Fans",
    relevanceScore: 7.8,
    adoptionStage: "Pilot",
    description: "Local processing of sensor data to adjust airflow based on real-time occupancy and CO2 levels without cloud latency.",
    impact: "Reduces cloud infrastructure costs and ensures privacy for sensitive industrial environments.",
    adaptationPlan: "Deploying Edge-Gateways in three major textile factories for performance validation."
  },
  {
    id: "7",
    name: "Circular Economy Component Tracking",
    relevanceScore: 8.5,
    adoptionStage: "Mandatory",
    description: "Blockchain-based tracking of rare-earth magnets to comply with upcoming EPR (Extended Producer Responsibility) norms.",
    impact: "Ensures regulatory compliance and builds brand trust for sustainability-focused consumers.",
    adaptationPlan: "Integrating QR-code based lifecycle tracking into the ERP system by December 2026."
  },
  {
    id: "8",
    name: "Multi-Modal Gesture Control",
    relevanceScore: 6.5,
    adoptionStage: "Research",
    description: "Non-touch controls using ultrasonic or TOF sensors for kitchen and bathroom fans where hygiene is priority.",
    impact: "Premium product differentiator and enhanced user experience in specific use-cases.",
    adaptationPlan: "Exploring cost-effective TOF sensors that can work in high-humidity environments."
  }
];

export default function TechRadar() {
  const [entries, setEntries] = useState<TechEntry[]>(MOCK_ENTRIES);
  const [filter, setFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/tech-radar/entries', { withCredentials: true });
        if (response.data && response.data.entries && response.data.entries.length > 0) {
          setEntries(response.data.entries);
        }
      } catch (error) {
        console.error('Failed to load tech radar data, using mock data:', error);
        // Fallback is already set to MOCK_ENTRIES in useState
      } finally {
        setIsLoading(false);
      }
    };
    fetchEntries();
  }, []);

  const filteredEntries = filter === "All" 
    ? entries 
    : entries.filter(e => e.adoptionStage === filter);

  return (
    <Layout>
      <div className="bg-slate-950 text-slate-100 p-8 rounded-3xl overflow-hidden min-h-[800px]">
        {/* News Ticker */}
        <div className="mb-12 bg-indigo-500/10 border-y border-indigo-500/20 py-2 relative overflow-hidden">
          <div className="flex items-center gap-4 px-4 absolute left-0 top-0 h-full bg-slate-950 z-10 border-r border-indigo-500/20">
            <Newspaper size={14} className="text-indigo-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 whitespace-nowrap">Industry News</span>
          </div>
          <div className="flex animate-marquee whitespace-nowrap pl-[140px]">
            {NEWS_TICKER.concat(NEWS_TICKER).map((news, i) => (
              <span key={i} className="mx-8 text-xs font-medium text-slate-400">
                {news} <span className="text-slate-700 ml-4">•</span>
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                Strategic Tech Radar
              </h1>
              <p className="text-slate-400 max-w-2xl">
                Mapping emerging technologies and regulatory mandates impacting Atomberg's competitive advantage. 
                Our focus: BLDC efficiency, IoT ecosystems, and sustainable manufacturing.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {STAGES.map(stage => (
                <button
                  key={stage}
                  onClick={() => setFilter(stage)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                    filter === stage 
                      ? 'bg-atomberg-gold text-atomberg-black shadow-lg shadow-atomberg-gold/20' 
                      : 'bg-slate-900 text-slate-500 hover:bg-slate-800'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="h-64 bg-slate-900 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredEntries.map(entry => (
                <TechCard 
                  key={entry.id} 
                  entry={entry} 
                  isExpanded={expandedId === entry.id}
                  onToggle={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                />
              ))}
            </div>
          )}
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        ` }} />
      </div>
    </Layout>
  );
}

function TechCard({ entry, isExpanded, onToggle }: { entry: TechEntry, isExpanded: boolean, onToggle: () => void }) {
  const stageColors: Record<string, string> = {
    'Research': 'bg-blue-500',
    'Pilot': 'bg-amber-500',
    'Scaling': 'bg-indigo-500',
    'Adopted': 'bg-green-500',
    'Mandatory': 'bg-red-500',
  };

  return (
    <div 
      className={`group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-atomberg-gold/50 hover:shadow-2xl hover:shadow-atomberg-gold/5 ${
        isExpanded ? 'ring-2 ring-atomberg-gold/50' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-slate-800 border border-slate-700 group-hover:border-atomberg-gold/30 transition-colors`}>
          <Zap size={20} className="text-atomberg-gold" />
        </div>
        <div className="text-right">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Relevance</div>
          <div className="text-xl font-black text-white">{entry.relevanceScore}<span className="text-slate-600 text-xs">/10</span></div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-2 leading-tight">{entry.name}</h3>
      
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-1.5 h-1.5 rounded-full ${stageColors[entry.adoptionStage] || 'bg-slate-500'}`} />
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{entry.adoptionStage}</span>
      </div>

      <p className="text-slate-500 text-xs leading-relaxed mb-6">
        {entry.description}
      </p>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2">
          <Activity size={12} className="text-atomberg-gold mt-0.5 shrink-0" />
          <div className="text-[10px] leading-normal text-slate-300">
            <span className="font-bold text-slate-500 mr-1">IMPACT:</span> {entry.impact}
          </div>
        </div>
      </div>

      <button 
        onClick={onToggle}
        className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-1"
      >
        {isExpanded ? 'Hide adaptation plan' : 'View adaptation plan'}
        <ArrowUpRight size={12} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </button>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-800 animate-in slide-in-from-top-2 duration-200">
          <div className="text-[10px] font-bold uppercase tracking-widest text-atomberg-gold mb-2">Internal Adaptation Plan</div>
          <p className="text-xs text-slate-400 leading-relaxed italic">
            "{entry.adaptationPlan}"
          </p>
          <div className="mt-3 flex items-center gap-1 text-[9px] text-slate-600 font-bold uppercase">
            <Shield size={10} /> Certified Strategic Assessment
          </div>
        </div>
      )}
    </div>
  );
}
