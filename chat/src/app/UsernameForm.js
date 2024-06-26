'use client'

import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function UsernameForm({ setUsername }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Benutzernamen in Firestore speichern
    try {
      const db = firebase.firestore();
      await db.collection('users').doc(input).set({
        username: input,
      });
      setUsername(input);
    } catch (error) {
      console.error('Error saving username to Firestore:', error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Enter your username</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={input}
          onChange={handleInputChange}
          className="w-full border-gray-300 border rounded-full py-2 px-4 mb-4 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors"
        >
          Join Chatroom
        </button>
      </form>
    </div>
  );
}