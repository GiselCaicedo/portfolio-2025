'use client';

import { useState } from 'react';
import { faqs } from '@/data/site';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              FAQ
            </p>
            <h2 className="text-title font-serif">
              Clear answers before we start.
            </h2>
            <p className="text-body" style={{ color: 'var(--fg-secondary)' }}>
              If you need more detail, write to us and we will solve it on the first call.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="card p-6">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="text-xl font-semibold" aria-hidden="true">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-body" style={{ color: 'var(--fg-secondary)' }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
