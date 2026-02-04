'use client';

export function Intro() {
  return (
    <section className="section-spacing" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-caption" style={{ color: 'var(--fg-tertiary)' }}>
              Design that speaks, delivery that converts
            </p>
            <h2 className="text-title font-serif">
              We craft premium digital experiences with clarity and purpose.
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--fg-secondary)' }}>
              We blend strategy, visual identity, and development to build sites
              that feel alive. Every section, every motion, and every detail
              exists to guide your audience.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Strategy', 'UX', 'Identity', 'Performance'].map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {[
                { title: 'Narrative', note: 'Copy and structure' },
                { title: 'Aesthetics', note: 'Visual direction' },
                { title: 'Interaction', note: 'Subtle motion' },
                { title: 'System', note: 'Components' },
              ].map((card) => (
                <div key={card.title} className="card p-6">
                  <p className="text-caption" style={{ color: 'var(--fg-muted)' }}>
                    {card.note}
                </p>
                <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
