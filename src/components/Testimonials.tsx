import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maruti Agarwal',
    title: 'Founder & CEO',
    company: 'Futurepath AI',
    quote:
      'Aarish built our hybrid RAG systems for chat and voice AI agents. His deep technical knowledge in search systems and ability to ship production-ready solutions made him an invaluable member of our team.',
  },
  {
    id: 2,
    name: 'Vivek Kumar',
    title: 'Founder',
    company: 'unMazer',
    quote:
      'Aarish is one of those guys who simply become a go-getter in the organisation. At unMazer, he worked on API building, data pipelines and a few other projects. His learning curve is exceptionally good, takes initiative to pick up a new stack and makes a valuable contribution to the team.',
  },
  {
    id: 3,
    name: "Gwanygha'a Gana",
    title: 'Co-Founder',
    company: 'RIMA',
    quote:
      "Aarish's expertise in building evaluation systems and observability infrastructure was critical to our success. His work with Phoenix helped us ensure our AI agents perform reliably at scale.",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-[var(--border)]" id="testimonials">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-12">
          Testimonials
        </h2>

        <div className="space-y-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="pl-6 border-l-2 border-[var(--border)]"
            >
              <blockquote className="text-[var(--text-secondary)] leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <span className="font-medium text-[var(--text-primary)]">
                  {testimonial.name}
                </span>
                <span className="text-[var(--text-muted)]">
                  {' '}&mdash; {testimonial.title}, {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
