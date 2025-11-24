'use client';

import { useState, type FormEvent } from 'react';
import { Button, Icon } from '@/components/ui';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="section-spacing"
      style={{ background: 'var(--bg-tertiary)' }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Heading */}
          <div className="space-y-6">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              Get in Touch
            </p>

            <h2
              className="font-serif text-title lg:text-5xl"
              style={{ color: 'var(--fg-primary)' }}
            >
              Speak to us.
            </h2>

            <p
              className="text-body-lg max-w-md"
              style={{ color: 'var(--fg-secondary)' }}
            >
              If you want to start a project, share an idea or simply say hi, we want to hear from you.
            </p>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label">First name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="John"
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
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="label">Email Address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="label">Phone number</label>
                <input
                  type="tel"
                  className="input"
                  placeholder="+1 234 567 890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="label">Project details</label>
              <textarea
                className="input resize-none"
                rows={4}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                style={{ minHeight: '120px' }}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={<Icon name="arrow" size={18} />}
            >
              Send Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
