/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  FileText, 
  FolderTree, 
  Globe, 
  Wrench, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  Building2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  GraduationCap,
  ClipboardList,
  MessageSquare
} from 'lucide-react';
import { TRAINING_DATA, Day, Module } from './constants';

const IconMap: Record<string, any> = {
  Monitor,
  FileText,
  FolderTree,
  Globe,
  Wrench
};

function ModuleDetail({ module, onBack }: { module: Module, onBack: () => void, key?: string }) {
  const [activeTab, setActiveTab] = useState<'theory' | 'exercise' | 'quiz'>('theory');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowResults(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col space-y-6"
    >
      <div className="flex items-center justify-between mb-2">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-semibold group font-ui text-sm cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour au programme
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex items-end justify-end space-x-1 px-4 relative z-10">
          {['theory', 'exercise', 'quiz'].map((tab) => {
            const isActive = activeTab === tab;
            const label = tab === 'theory' ? 'Support' : tab === 'exercise' ? 'Exercices' : 'Quiz';
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 md:px-10 py-4 rounded-t-3xl text-sm font-bold uppercase tracking-wider transition-all font-ui border-t border-l border-r cursor-pointer ${
                  isActive 
                  ? 'bg-white text-blue-600 border-slate-200 border-b-white translate-y-[1px]' 
                  : 'bg-slate-50/50 text-slate-400 border-transparent hover:text-slate-600'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="glass-card rounded-[2.5rem] rounded-tr-none p-8 md:p-12 border border-slate-200 shadow-2xl shadow-slate-900/5 relative z-0">
          <AnimatePresence mode="wait">
            {activeTab === 'theory' && (
              <motion.div
                key="theory"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 font-display">{module.theory.title}</h3>
                    <p className="text-slate-500 italic">Support de cours théorique</p>
                  </div>
                </div>

                <div className="grid gap-8">
                  {module.theory.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h4 className="text-xl font-bold text-blue-800 font-display flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        {section.title}
                      </h4>
                      <ul className="space-y-3 pl-4 border-l-2 border-slate-100">
                        {section.content.map((point, pIdx) => (
                          <li key={pIdx} className="text-slate-600 leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'exercise' && (
              <motion.div
                key="exercise"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <ClipboardList size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 font-display">Exercices Pratiques</h3>
                  <p className="text-slate-500 italic">Mise en application des concepts</p>
                </div>
              </div>

              <div className="grid gap-6">
                {module.exercises.map((ex, idx) => (
                  <div key={idx} className="bg-white/50 border border-slate-100 rounded-3xl p-8 space-y-6">
                    <div className="badge inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-ui">
                      Exercice {idx + 1}
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 font-display">{ex.title}</h4>
                    <p className="text-slate-600">{ex.description}</p>
                    <div className="space-y-4">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest font-ui">Démarche à suivre :</p>
                      <div className="space-y-4">
                        {ex.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex gap-4 group">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                              {sIdx + 1}
                            </div>
                            <p className="text-slate-600 pt-1 leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 font-display">Auto-évaluation</h3>
                    <p className="text-slate-500 italic">Validez vos connaissances</p>
                  </div>
                </div>
                {showResults && (
                  <button 
                    onClick={resetQuiz}
                    className="flex items-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors font-ui cursor-pointer"
                  >
                    <RotateCcw size={16} />
                    Recommencer
                  </button>
                )}
              </div>

              <div className="grid gap-6">
                {module.quiz.map((q, idx) => {
                  const selectedIdx = quizAnswers[idx];
                  const isCorrect = selectedIdx === q.correctAnswer;
                  
                  return (
                    <div key={idx} className="bg-white/50 border border-slate-100 rounded-3xl p-8 space-y-6">
                      <p className="text-lg font-bold text-slate-800">
                        {idx + 1}. {q.question}
                      </p>
                      <div className="grid sm:grid-cols-1 gap-3">
                        {q.options.map((opt, oIdx) => {
                          const isBtnSelected = selectedIdx === oIdx;
                          const isBtnCorrect = oIdx === q.correctAnswer;
                          
                          let btnStyles = "border-slate-200 hover:border-blue-400 hover:bg-blue-50/30";
                          if (showResults) {
                            if (isBtnCorrect) btnStyles = "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold ring-2 ring-emerald-500/20";
                            else if (isBtnSelected && !isBtnCorrect) btnStyles = "border-red-500 bg-red-50 text-red-700 font-bold ring-2 ring-red-500/20";
                            else btnStyles = "opacity-50 grayscale border-slate-200 cursor-not-allowed";
                          } else if (isBtnSelected) {
                            btnStyles = "border-blue-600 bg-blue-50/50 text-blue-700 ring-2 ring-blue-600/20";
                          }

                          return (
                            <button 
                              key={oIdx}
                              disabled={showResults}
                              onClick={() => setQuizAnswers(prev => ({ ...prev, [idx]: oIdx }))}
                              className={`text-left p-4 rounded-xl border transition-all font-medium flex items-center justify-between cursor-pointer ${btnStyles}`}
                            >
                              <span>{opt}</span>
                              {showResults && isBtnCorrect && <CheckCircle2 size={18} className="text-emerald-600" />}
                              {showResults && isBtnSelected && !isBtnCorrect && <XCircle size={18} className="text-red-600" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {!showResults && (
                <div className="flex justify-center pt-8">
                  <button 
                    disabled={Object.keys(quizAnswers).length < module.quiz.length}
                    onClick={() => setShowResults(true)}
                    className={`px-12 py-5 rounded-2xl font-bold font-ui shadow-xl transition-all cursor-pointer ${
                      Object.keys(quizAnswers).length < module.quiz.length
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-900 text-white hover:bg-black active:scale-95'
                    }`}
                  >
                    Valider mes réponses
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  </motion.div>
);
}

export default function App() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  
  const currentDay = TRAINING_DATA.find(d => d.id === activeDay) || TRAINING_DATA[0];

  const handleDayChange = (id: number) => {
    setActiveDay(id);
    setSelectedModule(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 md:p-6 selection:bg-blue-100 flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-6 font-display">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-2 transition-transform cursor-pointer" onClick={() => setSelectedModule(null)}>
            <span className="text-white font-bold text-lg tracking-tighter font-ui">FC</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 uppercase cursor-pointer" onClick={() => setSelectedModule(null)}>Ferra Coffrets</h1>
            <p className="text-[9px] text-slate-500 font-bold tracking-[0.15em] uppercase opacity-80 font-ui leading-tight">Portail de Formation Interne</p>
          </div>
        </div>
        <div className="flex space-x-6 items-center">
          <div className="hidden md:block text-right font-ui">
            <span className="block text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Session</span>
            <span className="text-xs font-extrabold text-blue-600">Avril 2026</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-white shadow-md flex items-center justify-center overflow-hidden transform hover:scale-110 transition-transform active:scale-95 cursor-pointer">
            <span className="text-white font-bold text-[11px] tracking-tight font-ui leading-none">OB</span>
          </div>
        </div>
      </header>

      <main className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-start flex-1">
        {/* Sidebar (4 columns) */}
        <section className="md:col-span-4 flex flex-col space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-5 border border-slate-200"
          >
            <h2 className="text-xl font-bold mb-1 font-display text-slate-900">Outils Informatiques</h2>
            <p className="text-xs text-slate-500 mb-4 font-semibold italic">Agents de Maîtrise Débutants</p>
            
            <div className="space-y-2 font-ui">
              <div className="flex items-center justify-between p-2.5 bg-white/50 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Durée Totale</span>
                <span className="text-xs font-extrabold text-blue-700">18 Heures</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-white/50 rounded-xl border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Planning</span>
                <span className="text-xs font-extrabold text-blue-700">3 Jours</span>
              </div>
            </div>
          </motion.div>

          <div className="glass-card rounded-2xl p-5 border border-slate-200 flex-1">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-6 font-ui">Progression du Programme</h3>
            <div className="space-y-6 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-200"></div>
              
              {TRAINING_DATA.map((day) => (
                <button 
                  key={day.id}
                  onClick={() => handleDayChange(day.id)}
                  className={`relative flex items-center space-x-3 w-full text-left group transition-all cursor-pointer ${activeDay !== day.id ? 'opacity-50 hover:opacity-100' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 font-bold text-xs shadow-sm transition-all font-ui ${
                    activeDay === day.id 
                      ? 'step-active ring-4 ring-blue-100 scale-105' 
                      : activeDay > day.id ? 'bg-emerald-500 text-white' : 'step-inactive'
                  }`}>
                    {activeDay > day.id ? <CheckCircle2 size={12} /> : day.id}
                  </div>
                  <div className="font-display">
                    <p className={`text-sm font-bold transition-colors ${activeDay === day.id ? 'text-slate-900' : 'text-slate-600'}`}>
                      Jour {day.id} {day.id === 1 ? ': Fondamentaux' : day.id === 2 ? ': Excel' : ': Bilan'}
                    </p>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider font-ui">
                      {day.duration}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* content (8 columns) */}
        <section className="md:col-span-8 flex flex-col space-y-5">
          <AnimatePresence mode="wait">
            {selectedModule ? (
              <ModuleDetail 
                key={selectedModule.id} 
                module={selectedModule} 
                onBack={() => setSelectedModule(null)} 
              />
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-end justify-between px-2">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 font-display tracking-tight">
                      Jour {currentDay.id}
                      <span className="text-blue-600 font-normal ml-3">
                        • {currentDay.title.split(': ')[1]}
                      </span>
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 font-medium italic opacity-80">{currentDay.description}</p>
                  </div>
                  <span className="hidden sm:inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-100 font-ui">
                    Session Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentDay.modules.map((module) => {
                    const Icon = IconMap[module.icon] || Monitor;
                    return (
                      <div 
                        key={module.id}
                        onClick={() => setSelectedModule(module)}
                        className="glass-card rounded-2xl p-6 hover:border-blue-400/30 transition-all cursor-pointer group hover:shadow-xl hover:shadow-blue-900/5"
                      >
                        <div className="w-10 h-10 bg-blue-50/50 rounded-xl mb-4 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-slate-900 font-display">{module.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                          {module.description}
                        </p>
                        <div className="flex items-center text-blue-600 font-bold text-xs gap-2 font-ui opacity-0 group-hover:opacity-100 transition-opacity">
                          Accéder au module <ChevronRight size={14} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <motion.div 
                  whileHover={{ scale: 1.002 }}
                  className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col lg:flex-row items-center justify-between shadow-2xl shadow-slate-900/10 border border-slate-800"
                >
                  <div className="max-w-md text-center lg:text-left mb-6 lg:mb-0">
                    <h4 className="text-2xl font-bold mb-2 tracking-tight font-display">Prêt à commencer le Jour {activeDay} ?</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                      Accédez aux exercices pratiques et aux supports de cours interactifs pour cette étape.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedModule(currentDay.modules[0])}
                    className={`bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-500 active:scale-95 transition-all flex items-center space-x-3 shadow-lg group font-ui cursor-pointer`}
                  >
                    <span className="text-sm">Lancer le module</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="w-full mt-4 mb-2 flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-3 text-[10px] text-slate-500 font-medium tracking-wide gap-y-1">
        <p className="">© 2026 Ferra Coffrets — Tous droits réservés.</p>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-1">
          <span className="text-slate-800 font-bold border-r border-slate-200 pr-6 last:border-0">Formateur : Oussama Berraies</span>
          <a href="tel:+21699442879" className="flex items-center gap-1.5 hover:text-blue-600 transition-all cursor-pointer">
            <Phone size={12} className="text-blue-500" />
            (+216) 99 44 28 79
          </a>
          <a href="mailto:oberraies@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-all cursor-pointer">
            <Mail size={12} className="text-blue-500" />
            oberraies@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

