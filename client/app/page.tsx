'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TopicGrid from '../components/TopicGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TopicGrid />
    </main>
  );
}
