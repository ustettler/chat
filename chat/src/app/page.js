'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const UsernameForm = dynamic(() => import('./UsernameForm'), { ssr: false });

export default function Chatroom() {
  const [username, setUsername] = useState('');
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Chatroom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-blue-500 text-white py-4 px-8">
        <h1 className="text-2xl font-semibold">Chatroom</h1>
      </header>

      {/* Username input */}
      <main className="flex-grow flex justify-center items-center">
        <UsernameForm setUsername={setUsername} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 px-6">
        <p className="text-sm text-gray-600">
          Already have a username?{' '}
          <button className="text-blue-500 hover:underline">Change it here</button>
        </p>
      </footer>
    </div>
  );
}
