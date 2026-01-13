import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string[];
}

const faqs: FAQ[] = [
  {
    question: 'How do I get a business loan?',
    answer: [
      'Getting a business loan with SimplyFunded is quick and straightforward. If you are a UK-based limited company generating at least £4,000.00 monthly revenue, you may already qualify.',
      'Just complete our simple online application, connect your business bank for affordability checks, and receive a decision within hours. Once approved, funds can be transferred the same day.'
    ]
  },
  {
    question: 'How do business loans work?',
    answer: [
      'A business loan provides your company with a lump sum that you repay over a set period. SimplyFunded offers short-term fixed-term loans, meaning your repayments are predictable and transparent.',
      'We assess your business based on turnover and cashflow, not credit score alone, making funding accessible for growing SMEs.'
    ]
  },
  {
    question: 'How do I apply for a business loan?',
    answer: [
      'Applying is fast and fully online. You only need:',
      '• Basic company details\n• Director information\n• Bank connection for affordability',
      'Our team reviews your profile and, if approved, sends your loan offer. Funds are typically released within 24 hours.'
    ]
  },
  {
    question: 'Can I get a business loan with bad credit?',
    answer: [
      'Yes. We evaluate your business overall performance, monthly revenue, cashflow, activity, not just your credit score.',
      'If your business earns £4,000.00+ per month, we may still be able to help. Personal guarantees are accepted to support applications with limited credit history.'
    ]
  },
  {
    question: 'How much business loan can I get?',
    answer: [
      'Most SMEs can access funding of up to one month\'s turnover, typically ranging from £3,000.00 to £100,000.00.',
      'Your final offer will depend on:',
      '• Your monthly revenue\n• Existing finance or loan commitments\n• Overall business stability and affordability'
    ]
  },
  {
    question: 'What is a business loan?',
    answer: [
      'A business loan is a form of financing designed to support your company expenses, growth, or cashflow needs.',
      'SimplyFunded provides straightforward, fixed-term loans with clear repayment plans, no hidden fees, no confusing structures.'
    ]
  },
  {
    question: 'How do I get a loan to start a business?',
    answer: [
      'We primarily fund established businesses with a trading history and regular revenue.',
      'If you are a startup with no revenue yet, alternatives include:',
      '• UK startup loans\n• Government grants\n• Investors or private support',
      'If you are already generating revenue, we may be able to help fund your next phase of growth.'
    ]
  },
  {
    question: 'How easy is it to get a business loan?',
    answer: [
      'Very easy, if your business meets the basic criteria. We require:',
      '• At least 6 months trading\n• £4,000.00+ monthly turnover\n• UK limited company status',
      'Applications take less than a minute, and many clients receive funding within 24 hours.'
    ]
  },
  {
    question: 'How do I get a business loan from a bank?',
    answer: [
      'Banks often require:',
      '• Extensive paperwork\n• Strong credit history\n• Collateral\n• Long approval timelines',
      'SimplyFunded offers a much faster alternative. Apply online, connect your bank, and receive a decision within hours, no long forms, no waiting weeks.'
    ]
  },
  {
    question: 'What is an unsecured business loan?',
    answer: [
      'An unsecured business loan does not require you to pledge assets such as property or machinery.',
      'SimplyFunded specialises in unsecured business loans, typically backed by a personal guarantee, allowing you to access funding without risking business assets.'
    ]
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#2b5fcc] transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-[#2b5fcc] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                    }`}
                  size={24}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8 space-y-4">
                  {faq.answer.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-700 leading-relaxed whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
