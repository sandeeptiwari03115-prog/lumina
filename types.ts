export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  image: string;
  notes: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  chapters: Chapter[];
}

export interface StoreItem extends Book {
  type: 'book' | 'course' | 'equipment';
}

export interface CartItem extends StoreItem {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // index of correct option
  explanation: string;
  difficulty: Difficulty;
}

export enum Page {
  HOME = 'HOME',
  STORE = 'STORE',
  SUBJECTS = 'SUBJECTS'
}