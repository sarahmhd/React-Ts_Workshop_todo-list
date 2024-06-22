
import React, { useState } from "react";
import './SwitchTabs.css';
import App from "../../App";
import AppZustand from './../../App-zustand';
import AppAtoms from './../../App-atoms';

const tabs = [
  'Redux',
  'Atoms',
  'Zustand',
];


const SwitchTabs: React.FC = () => {

  const [activeTab, setActiveTab] = useState('Redux');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  };

  const itemsTabs = tabs.map((tab) => (
    <button
      className={`px-4 py-2 focus:outline-none ${activeTab === tab ? 'border-b-2 border-[#e08692] text-[#e08692]' : ''
        }`}
      onClick={() => handleTabClick(tab)}
    >
      {tab}
    </button>
  ));

  return (
    <div className='switch-tabs w-full'>
      <div
        defaultValue="Redux"
        className="flex justify-evenly m-6"
      >
        {itemsTabs}
      </div>
      <div className="">
        {activeTab === 'Redux' && <App />}
        {activeTab === 'Zustand' && <AppAtoms />}
        {activeTab === 'Atoms' && <AppZustand />}
      </div>
    </div>
  );
}

export default SwitchTabs;