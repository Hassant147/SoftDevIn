/**
 * FAQ Component with FAQPage Schema
 * 
 * Displays a list of frequently asked questions with accordion-style answers.
 * Includes JSON-LD FAQPage schema for rich snippets in search results.
 */
import React, { useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';
import SchemaJsonLd from './SchemaJsonLd';

const faqData = [
    {
        question: "How long does a typical custom software project take?",
        answer: "Project timelines vary based on scope. A focused MVP typically takes 8–12 weeks. Larger enterprise solutions with complex integrations can span 4–6 months. We provide detailed timelines after our discovery phase and deliver in 2-week sprints so you see progress continuously."
    },
    {
        question: "Do you work with startups or only enterprises?",
        answer: "We work with both. Startups benefit from our rapid MVP development and scalable architecture expertise. Enterprises choose us for complex integrations, compliance requirements, and dedicated team augmentation. About 40% of our clients are funded startups, 60% are established enterprises."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "Our core stack includes React, Next.js, Node.js, Python, and cloud platforms (AWS, Azure, GCP). For AI/ML projects, we use TensorFlow, PyTorch, and OpenAI APIs. We also have expertise in mobile development (React Native, Flutter) and DevOps (Docker, Kubernetes, Terraform)."
    },
    {
        question: "How do you handle project communication?",
        answer: "We integrate into your existing workflow. Most clients use Slack for daily communication. You'll have a dedicated project manager, access to our project dashboard, weekly video standups, and sprint demos every two weeks. We adapt to your timezone with overlapping hours."
    },
    {
        question: "What does your engagement process look like?",
        answer: "It starts with a free 30-minute discovery call to understand your goals. We then provide a proposal with scope, timeline, and investment. Once approved, we begin with a paid discovery phase (1–2 weeks) to finalize requirements, then move into design and development sprints."
    },
    {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes. We offer flexible support packages including bug fixes, security updates, performance monitoring, and feature enhancements. Most clients choose our monthly retainer for continuous improvement. We also provide documentation and knowledge transfer for in-house teams."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
        <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-inset"
            aria-expanded={isOpen}
        >
            <span className="font-semibold text-slate-900">{question}</span>
            <FiChevronDown
                className={`w-5 h-5 text-primary-600 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
            />
        </button>
        {isOpen && (
            <div className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed">
                {answer}
            </div>
        )}
    </div>
);

const FAQ = ({
    title = "Frequently Asked Questions",
    subtitle = "Answers to common questions about working with us.",
    items = faqData,
    showSchema = true,
    className = ""
}) => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className={`py-16 ${className}`} aria-labelledby="faq-heading">
            {showSchema && <SchemaJsonLd schema={faqSchema} />}

            <div className="content-container max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-semibold tracking-[0.14em] uppercase mb-4">
                        <FiHelpCircle className="w-4 h-4" aria-hidden="true" />
                        FAQ
                    </span>
                    <h2 id="faq-heading" className="text-3xl font-heading font-bold text-slate-900 mb-3">
                        {title}
                    </h2>
                    <p className="text-slate-600">{subtitle}</p>
                </div>

                <div className="space-y-3" role="list">
                    {items.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
