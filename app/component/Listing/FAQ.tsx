import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Wallet, FileText, CheckCircle2, Truck } from 'lucide-react';

const FAQItem = ({ question, answer, icon: Icon } : any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group hover:px-2 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 group-hover:text-white'}`}>
            <Icon size={20} />
          </div>
          <span className={`text-sm md:text-base font-bold uppercase tracking-wide transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
            {question}
          </span>
        </div>
        <ChevronDown 
          size={18} 
          className={`text-gray-600 transition-transform duration-500 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} 
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed pl-14 max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I secure a vehicle?",
      answer: "Select your desired vehicle and click 'Secure Vehicle'. A fully refundable reservation fee of R5,000 holds the car for 48 hours while we finalize your paperwork.",
      icon: ShieldCheck
    },
    {
      question: "What financing options are available?",
      answer: "We partner with all major South African banks. Our team handles the application process to ensure you get the most competitive interest rates and residual terms.",
      icon: Wallet
    },
    {
      question: "Are the vehicles inspected?",
      answer: "Every car on our platform undergoes a rigorous 160-point mechanical and structural inspection. We only list vehicles with a full, verified service history.",
      icon: CheckCircle2
    },
    {
      question: "What documents do I need?",
      answer: "You will need a valid SA Driver’s License, Proof of Residence, and your latest 3 months' bank statements. For business purchases, CIPC documents are required.",
      icon: FileText
    },
    {
      question: "Is nationwide delivery available?",
      answer: "Yes. We offer enclosed trailer delivery to any location within South Africa. Costs are calculated based on your distance from our Sandton or Cape Town hubs.",
      icon: Truck
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-black text-white italic uppercase leading-none">
          Buying <span className="text-blue-600">Protocol.</span>
        </h2>
        <p className="text-gray-500 text-sm font-bold uppercase">The Elite Network Acquisition Process</p>
      </div>

      <div className="bg-white/[0.01] border border-white/5 rounded-[32px] p-8 shadow-2xl">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;