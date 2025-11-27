import { useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string[];
  videoTitle?: string;
  videoDescription?: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do I get a business loan?',
    answer: [
      'Getting a business loan with SimplyFunded is quick and straightforward. If you\'re a UK-based limited company generating at least £4,000 monthly revenue, you may already qualify.',
      'Just complete our simple online application, connect your business bank for affordability checks, and receive a decision within hours. Once approved, funds can be transferred the same day.'
    ],
    videoTitle: 'How to Get a Business Loan with SimplyFunded',
    videoDescription: 'A short animated explainer showing the complete process from application to funding'
  },
  {
    question: 'How do business loans work?',
    answer: [
      'A business loan provides your company with a lump sum that you repay over a set period. SimplyFunded offers short-term fixed-term loans, meaning your repayments are predictable and transparent.',
      'We assess your business based on turnover and cashflow—not credit score alone—making funding accessible for growing SMEs.'
    ],
    videoTitle: 'How Business Loans Work',
    videoDescription: 'Animation of loan transfer, repayment timeline, and growth chart'
  },
  {
    question: 'How do I apply for a business loan?',
    answer: [
      'Applying is fast and fully online. You only need:',
      '• Basic company details\n• Director information\n• Bank connection for affordability',
      'Our team reviews your profile and, if approved, sends your loan offer. Funds are typically released within 24 hours.'
    ],
    videoTitle: 'How to Apply for a Loan in Minutes',
    videoDescription: 'Screen walkthrough of the online form'
  },
  {
    question: 'Can I get a business loan with bad credit?',
    answer: [
      'Yes. We evaluate your business\'s overall performance—monthly revenue, cashflow, activity—not just your credit score.',
      'If your business earns £4,000+ per month, we may still be able to help. Personal guarantees are accepted to support applications with limited credit history.'
    ],
    videoTitle: 'Bad Credit? We Can Still Help',
    videoDescription: 'Visual of credit score gauges with message "We look beyond the score"'
  },
  {
    question: 'How much business loan can I get?',
    answer: [
      'Most SMEs can borrow up to one month\'s turnover, typically between £5,000 and £100,000.',
      'Your exact offer depends on:',
      '• Monthly revenue\n• Existing loan commitments\n• Business stability and affordability'
    ],
    videoTitle: 'How Much Can You Borrow?',
    videoDescription: 'Animated calculator showing turnover to eligible loan amount'
  },
  {
    question: 'What is a business loan?',
    answer: [
      'A business loan is a form of financing designed to support your company\'s expenses, growth, or cashflow needs.',
      'SimplyFunded provides straightforward, fixed-term loans with clear repayment plans—no hidden fees, no confusing structures.'
    ],
    videoTitle: 'What Is a Business Loan?',
    videoDescription: 'Simple explanation with icons for expenses, growth, and cashflow'
  },
  {
    question: 'How do I get a loan to start a business?',
    answer: [
      'We primarily fund established businesses with a trading history and regular revenue.',
      'If you\'re a startup with no revenue yet, alternatives include:',
      '• UK startup loans\n• Government grants\n• Investors or private support',
      'If you\'re already generating revenue, we may be able to help fund your next phase of growth.'
    ],
    videoTitle: 'Startup Funding vs SME Funding',
    videoDescription: 'Split screen: Startup grants vs. trading business funding'
  },
  {
    question: 'How easy is it to get a business loan?',
    answer: [
      'Very easy—if your business meets the basic criteria. We require:',
      '• At least 6 months trading\n• £4,000+ monthly turnover\n• UK limited company status',
      'Applications take less than a minute, and many clients receive funding within 24 hours.'
    ],
    videoTitle: 'How Easy Is It to Get Funded?',
    videoDescription: 'Quick montage: apply, approve, funded'
  },
  {
    question: 'How do I get a business loan from a bank?',
    answer: [
      'Banks often require:',
      '• Extensive paperwork\n• Strong credit history\n• Collateral\n• Long approval timelines',
      'SimplyFunded offers a much faster alternative: Apply online, connect your bank, and receive a decision within hours—no long forms, no waiting weeks.'
    ],
    videoTitle: 'Bank Loans vs. SimplyFunded',
    videoDescription: 'Comparison animation showing bank delays vs. SimplyFunded fast process'
  },
  {
    question: 'What is an unsecured business loan?',
    answer: [
      'An unsecured business loan doesn\'t require you to pledge assets such as property or machinery.',
      'SimplyFunded specialises in unsecured business loans, typically backed by a personal guarantee, allowing you to access funding without risking business assets.'
    ],
    videoTitle: 'Understanding Unsecured Loans',
    videoDescription: 'Visualizing secured vs unsecured loans'
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
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#3d75ef] transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-[#3d75ef] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
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

                  {faq.videoTitle && (
                    <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#3d75ef] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Play className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 mb-1">
                            Video: {faq.videoTitle}
                          </p>
                          <p className="text-sm text-gray-600">
                            {faq.videoDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
