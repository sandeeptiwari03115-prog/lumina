import React, { useState } from 'react';
import { Subject, Chapter, Question, Difficulty } from '../types';
import { ChevronLeft, BookOpen, Clock, PlayCircle, HelpCircle, CheckCircle, XCircle, Lock, Trophy } from 'lucide-react';
import { getSubjectQuestions } from '../constants';

interface SubjectDetailProps {
  subject: Subject;
  onBack: () => void;
}

type Tab = 'study' | 'quiz';

const SubjectDetail: React.FC<SubjectDetailProps> = ({ subject, onBack }) => {
  const [activeTab, setActiveTab] = useState<Tab>('study');
  const [activeChapter, setActiveChapter] = useState<Chapter>(subject.chapters[0]);
  const [questions] = useState<Question[]>(() => getSubjectQuestions(subject.id));
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({}); // questionId -> selectedOptionIndex

  const handleAnswer = (questionId: string, optionIndex: number) => {
    if (userAnswers[questionId] !== undefined) return; // Prevent changing answer
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const getScore = () => {
    let score = 0;
    Object.keys(userAnswers).forEach(qId => {
      const q = questions.find(q => q.id === qId);
      if (q && q.correctAnswer === userAnswers[qId]) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <button 
                onClick={onBack}
                className="flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 mb-2 transition-colors"
              >
                <ChevronLeft size={16} className="mr-1" /> Back to Subjects
              </button>
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-slate-900">{subject.name}</h1>
              </div>
            </div>

            {/* Tab Switcher */}
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('study')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  activeTab === 'study' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <BookOpen size={16} /> Study Material
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  activeTab === 'quiz' 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <HelpCircle size={16} /> Practice Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ==================== LEFT SIDEBAR ==================== */}
          <div className="lg:col-span-4 space-y-4">
            
            {activeTab === 'study' ? (
              // Study Mode Sidebar (Table of Contents)
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-40">
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900">Table of Contents</h3>
                </div>
                <div className="divide-y divide-slate-100 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {subject.chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(chapter)}
                      className={`w-full text-left p-4 hover:bg-slate-50 transition-colors flex items-start gap-3 ${
                        activeChapter.id === chapter.id ? 'bg-indigo-50 border-l-4 border-indigo-600' : 'border-l-4 border-transparent'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ${
                        activeChapter.id === chapter.id ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {chapter.number}
                      </div>
                      <div>
                        <h4 className={`text-sm font-medium ${activeChapter.id === chapter.id ? 'text-indigo-900' : 'text-slate-700'}`}>
                          {chapter.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{chapter.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Quiz Mode Sidebar (Answer Key & Progress)
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-40">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <h3 className="font-semibold text-slate-900">Answer Key</h3>
                  <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                    Score: {getScore()} / {Object.keys(userAnswers).length}
                  </span>
                </div>
                <div className="p-2 bg-indigo-50 text-xs text-indigo-800 border-b border-indigo-100">
                  <Lock size={12} className="inline mr-1" />
                  Answers are locked until you attempt the question.
                </div>
                <div className="divide-y divide-slate-100 max-h-[calc(100vh-250px)] overflow-y-auto">
                  {questions.map((q, idx) => {
                    const status = userAnswers[q.id] !== undefined 
                      ? (userAnswers[q.id] === q.correctAnswer ? 'correct' : 'wrong')
                      : 'locked';

                    return (
                      <div key={q.id} className="p-3 flex items-center justify-between text-sm">
                        <span className="font-mono text-slate-400 w-8">Q{idx + 1}</span>
                        {status === 'locked' ? (
                          <div className="flex-1 flex items-center gap-2 text-slate-400 bg-slate-50 px-2 py-1 rounded">
                             <div className="h-2 w-20 bg-slate-200 rounded blur-sm"></div>
                             <Lock size={12} />
                          </div>
                        ) : (
                          <div className={`flex-1 flex items-center justify-between px-2 py-1 rounded ${status === 'correct' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                             <span className="font-bold">Ans: {q.options[q.correctAnswer]}</span>
                             {status === 'correct' ? <CheckCircle size={14} /> : <XCircle size={14} />}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ==================== MAIN CONTENT ==================== */}
          <div className="lg:col-span-8">
            {activeTab === 'study' ? (
              // Study Content
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[600px] animate-fade-in">
                <div className="relative h-64 w-full bg-slate-200">
                  <img 
                    src={activeChapter.image} 
                    alt={activeChapter.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <div className="flex items-center gap-2 text-indigo-300 font-bold tracking-wider text-xs uppercase mb-2">
                        <BookOpen size={14} /> Chapter {activeChapter.number}
                      </div>
                      <h2 className="text-3xl font-bold">{activeChapter.title}</h2>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-6 mb-8 text-sm text-slate-500 border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-1">
                      <Clock size={16} /> 45 mins read
                    </div>
                    <div className="flex items-center gap-1">
                      <PlayCircle size={16} /> 3 Video Lessons
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Introduction</h3>
                    <p className="text-lg leading-relaxed text-slate-700 mb-6">
                      {activeChapter.description}
                    </p>
                    
                    <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 mb-8">
                      <h4 className="text-indigo-900 font-bold mb-2 flex items-center gap-2">
                        <span className="text-2xl">💡</span> Key Concepts
                      </h4>
                      <p className="text-indigo-800 leading-relaxed">
                        {activeChapter.notes}
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">Detailed Notes</h3>
                    <p className="text-slate-600 mb-4">
                      Detailed understanding of this chapter is crucial for mastering the subject of {subject.name}. 
                      Proceed to the practice exercises once you have reviewed the material above.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Quiz Content
              <div className="space-y-6 animate-fade-in">
                <div className="bg-indigo-600 rounded-2xl p-6 text-white flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Practice Assessment</h2>
                    <p className="text-indigo-200 text-sm mt-1">Answer questions to unlock the key on the left.</p>
                  </div>
                  <Trophy size={32} className="text-amber-300" />
                </div>

                {questions.map((q, index) => {
                   const isAnswered = userAnswers[q.id] !== undefined;
                   const isCorrect = userAnswers[q.id] === q.correctAnswer;
                   const selected = userAnswers[q.id];

                   return (
                    <div key={q.id} className={`bg-white rounded-2xl shadow-sm border p-6 transition-all ${
                        isAnswered 
                          ? (isCorrect ? 'border-green-200 bg-green-50/20' : 'border-red-200 bg-red-50/20')
                          : 'border-slate-200 hover:border-indigo-300'
                      }`}>
                      
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">Q{index + 1}</span>
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            q.difficulty === 'Hard' ? 'bg-red-100 text-red-600' : 
                            q.difficulty === 'Medium' ? 'bg-amber-100 text-amber-600' : 
                            'bg-green-100 text-green-600'
                          }`}>
                            {q.difficulty}
                          </span>
                        </div>
                        {isAnswered && (
                          isCorrect 
                            ? <span className="text-green-600 text-sm font-bold flex items-center gap-1"><CheckCircle size={16}/> Correct</span>
                            : <span className="text-red-600 text-sm font-bold flex items-center gap-1"><XCircle size={16}/> Incorrect</span>
                        )}
                      </div>

                      <h3 className="text-lg font-medium text-slate-900 mb-6">{q.text}</h3>

                      <div className="space-y-3">
                        {q.options.map((opt, optIdx) => (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handleAnswer(q.id, optIdx)}
                            className={`w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center group ${
                              isAnswered
                                ? (optIdx === q.correctAnswer 
                                    ? 'bg-green-100 border-green-300 text-green-800' 
                                    : (optIdx === selected ? 'bg-red-100 border-red-300 text-red-800' : 'bg-slate-50 border-slate-200 text-slate-400')
                                  )
                                : 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700'
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                                isAnswered && optIdx === q.correctAnswer ? 'bg-green-600 border-green-600 text-white' : 'border-slate-300'
                              }`}>
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              {opt}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Explanation - Twist: Revealed on answer */}
                      {isAnswered && (
                        <div className="mt-6 p-4 bg-white/50 rounded-lg border border-slate-200 text-sm">
                          <p className="font-bold text-slate-700 mb-1">Explanation:</p>
                          <p className="text-slate-600">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                   );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;