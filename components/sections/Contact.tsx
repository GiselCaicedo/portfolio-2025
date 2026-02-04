'use client';

import { useState, type FormEvent } from 'react';
import { Button, Icon } from '@/components/ui';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              Contact
            </p>
            <h2 className="text-title font-serif">
              Let's talk about your next launch.
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--fg-secondary)' }}>
              Share your idea, goals, and timeline. We reply within 24-48 hours.
            </p>
            <div className="space-y-2 text-sm" style={{ color: 'var(--fg-tertiary)' }}>
              <p>Email: hello@gissoler.studio</p>
              <p>Location: Remote worldwide</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label">First name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Maria"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="label">Last name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Lopez"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="maria@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="label">Company</label>
                <input
                  type="text"
                  className="input"
                  placeholder="North Studio"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="label">Budget</label>
              <input
                type="text"
                className="input"
                placeholder="USD 2k - 5k"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="label">Project details</label>
              <textarea
                className="input resize-none"
                rows={4}
                placeholder="Share the essentials to get started..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                style={{ minHeight: '120px' }}
              />
            </div>

            <Button type="submit" variant="primary" size="lg" icon={<Icon name="arrow" size={18} />}>
              Send inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
