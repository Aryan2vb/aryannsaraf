import React from 'react';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { ProjectList } from './components/ProjectList';
// import { Writing } from './components/Writing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-300">
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-32 space-y-24">
        <Profile />
        <ProjectList />
        {/*<Writing />*/}
        <Footer />
      </main>
    </div>
  );
}

export default App;