import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (
  prompt: string,
  history: ChatMessage[] = []
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct a context-aware prompt based on the educational nature of the site
    const systemInstruction = `You are Lumina, an intelligent and encouraging AI educational tutor. 
    Your goal is to help users learn, recommend books, and explain complex subjects simply.
    Keep responses concise (under 150 words) unless asked for a detailed explanation.
    If asked about the website, mention we have books, courses, and a store.`;

    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add current prompt
    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    const response = await ai.models.generateContent({
      model: model,
      contents: contents.map(c => c.parts[0].text), // Simplified for stateless single-turn or simple history append
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please try again later.";
  }
};

export const getBookSummary = async (bookTitle: string, author: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Provide a catchy, 2-sentence summary of the book "${bookTitle}" by ${author} that would make a student want to read it.`,
    });
    return response.text || "Summary unavailable.";
  } catch (error) {
    return "Could not load summary.";
  }
};
