import React from 'react';
import { Subject } from '../types';
import * as LucideIcons from 'lucide-react';

interface SubjectCardProps {
  subject: Subject;
  onClick?: (subject: Subject) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  // Dynamic Icon rendering
  // @ts-ignore
  const IconComponent = LucideIcons[subject.icon] || LucideIcons.Book;

  return (
    <div 
      onClick={() => onClick && onClick(subject)}
      className="group flex flex-col items-center p-6 text-center rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:border-indigo-100 hover:shadow-md hover:bg-indigo-50/30 cursor-pointer h-full"
    >
      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${subject.color} transition-transform group-hover:scale-110`}>
        <IconComponent size={32} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{subject.name}</h3>
      <p className="mt-2 text-sm text-slate-500 line-clamp-2">{subject.description}</p>
      <div className="mt-auto pt-4 text-xs font-semibold text-indigo-600 opacity-0 transition-opacity group-hover:opacity-100">
        Explore Chapters &rarr;
      </div>
    </div>
  );
};

export default SubjectCard;