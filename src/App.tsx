import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { ProjectList } from './components/ProjectList';
// import { Writing } from './components/Writing';
import { Footer } from './components/Footer';
import 'animate.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [showProfile, setShowProfile] = useState(false);  // To control when profile should appear

    // Handle loading progress
    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev === 100) {
                        clearInterval(interval);
                        setLoading(false);
                        setShowProfile(true);  // Once loading is done, show the profile
                        return prev;
                    }
                    return prev + 1;
                });
            }, 50); // Slowed down the progress speed (30ms to 50ms)
        }
    }, [loading]);

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-300">
            {loading ? (
                <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-90 z-50">
                    <div className="text-white text-sm">
                        {`${progress}%`}
                    </div>
                </div>
            ) : (
                <>
                    <Header />
                    <main className="max-w-4xl mx-auto px-6 pt-32 space-y-24">
                        {/* Profile will animate in when loading is done */}
                        <div
                            className={`transition-all duration-2000 transform ${showProfile ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                        >
                            <Profile />
                        </div>
                        <ProjectList />
                        {/*<Writing />*/}
                        <Footer />
                    </main>
                </>
            )}
        </div>
    );
}

export default App;