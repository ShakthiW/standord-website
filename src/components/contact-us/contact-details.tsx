import React from "react";
import { FiCreditCard, FiMail, FiPhoneCall } from "react-icons/fi";

const ContactDetailsCard = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
        <Card title="Email" subtitle="hello@standord.com" href="mailto:hello@standord.com" Icon={FiMail} />
        <Card title="Phone" subtitle="(+94) 77 704 1698" href="tel:+94777041698" Icon={FiPhoneCall} />
        <Card
          title="HQ Location"
          subtitle="Robert Bosch Building, 1st Floor, Colombo 03"
          href="https://maps.app.goo.gl/ht3Eavj3RzYSqLCv5"
          Icon={FiCreditCard}
        />
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  href: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-gray-800 relative overflow-hidden group bg-gray-800"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#5ce1e6] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-white group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default ContactDetailsCard;