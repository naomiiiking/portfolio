'use client';

import { useState } from 'react';
import { AsciiArt } from '@/components/AsciiArt';
import { Nav } from '@/components/Nav';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { About } from '@/components/sections/About';
import { Chat } from '@/components/sections/Chat';
import { Contact } from '@/components/sections/Contact';
import { PortfolioFooter } from '@/components/PortfolioFooter';

export default function Home() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div className="wrapper">
      <div className="sidebar">
        <AsciiArt />
      </div>

      <div className="content">
        <div className="header">
          <h1 className="title">NAOMI KING</h1>
          <p className="subtitle">AI Engineer at Goodnotes (Good Systems)</p>
        </div>

        <Nav activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'skills' && <Skills />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'about' && <About />}
        {activeTab === 'chat' && <Chat />}
        {activeTab === 'contact' && <Contact />}
      </div>

      <PortfolioFooter />
    </div>
  );
}
