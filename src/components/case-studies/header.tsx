import React from 'react';

interface HeaderProps {
  title: string;
  date: string;
  clientName: string;
}

const Header: React.FC<HeaderProps> = ({ title, date, clientName }) => {
  return (
    <header className="text-left mb-8 w-full">
      <h1 className="text-5xl font-bold mb-2">{title}</h1>
      <p className="text-slate-400">{date} | {clientName}</p>
    </header>
  );
};

export default Header;
