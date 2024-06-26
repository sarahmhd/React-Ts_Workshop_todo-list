import './SwitchTabs.css';

import React, { useState } from "react";

import App from "../../App";
import AppAtoms from './../../App-atoms';
import AppZustand from './../../App-zustand';
import { LANGUAGES } from '../../constants';
import i18n from '../../i18n';

'../../i18n';



const tabs = [
  'Redux',
  'Zustand',
  'Atoms',
];


const SwitchTabs: React.FC = () => {

  const [activeTab, setActiveTab] = useState('Redux');
  const [lang, setLang] = useState(i18n.language);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  };

  const itemsTabs = tabs.map((tab) => (
    <button key={tab}
      className={`px-4 py-2 focus:outline-none ${activeTab === tab ? 'border-b-2 border-[#e08692] text-[#e08692]' : ''
        }`}
      onClick={() => handleTabClick(tab)}
    >
      {tab}
    </button>
  ));

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };



  return (
    <div className={`switch-tabs w-full`}>
      <div className="flex gap-4 items-center m-6">
        <div
          className="flex justify-evenly flex-grow"
        >
          {itemsTabs}
        </div>
        <select onChange={handleChangeLang} className='bg-transparent	text-[#e08692] font-bold cursor-pointer focus-visible:outline-none' defaultValue={lang}>
          {
            LANGUAGES.map(lang => <option className='bg-[#f2f2f2]' key={lang.code} value={lang.code}>{lang.label}</option>)
          }
        </select>
      </div>
      <div className={`${lang == 'ar' ? 'rtl' : 'ltr'}`}>
        {activeTab === 'Redux' && <App />}
        {activeTab === 'Atoms' && <AppAtoms />}
        {activeTab === 'Zustand' && <AppZustand />}
      </div>
    </div>
  );
}

export default SwitchTabs;