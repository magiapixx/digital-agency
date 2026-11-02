import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AddCircleIcon, MinusSignCircleIcon } from "hugeicons-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "A brand refresh usually takes 3–4 weeks; a full website launch typically runs 6–10 weeks depending on scope. We agree on a timeline before we start and share progress every week.",
  },
  {
    question: "Can you work with our existing brand or website?",
    answer: "Absolutely. We regularly evolve existing brands and rebuild existing sites — keeping what works, fixing what doesn't, and never throwing away equity you've built.",
  },
  {
    question: "What does a project cost?",
    answer: "Every project is scoped individually. One-off projects start from a few thousand dollars, and monthly plans begin at $249 for ongoing care and support. Reach out and we'll prepare a clear, fixed quote.",
  },
  {
    question: "Do you support us after launch?",
    answer: "Yes. Every project includes a post-launch support window, and our monthly plans cover hosting, updates, SEO, and continuous improvement — so your site keeps performing long after launch day.",
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="inline-block px-6 py-2 bg-[#F6F8F7] border border-[#E8E8E8] rounded-[100px] mb-6">
              <p className="text-[12px] font-medium text-[#1F2420]">
                // FAQ //
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-medium text-foreground leading-tight">
              We're here to answer your questions
            </h2>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F7F8F7] rounded-[24px] p-2 flex flex-col gap-2"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`relative bg-background rounded-[16px] p-5 cursor-pointer transition-all duration-300 ${
                  expandedIndex === index ? "shadow-sm" : "hover:shadow-sm"
                }`}
                style={{
                  boxShadow: expandedIndex === index 
                    ? '0px 1px 4px rgba(12, 12, 13, 0.1), 0px 1px 4px rgba(12, 12, 13, 0.05)' 
                    : undefined
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[18px] font-medium text-foreground">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedIndex === index ? (
                      <MinusSignCircleIcon className="w-6 h-6 text-[#5A6B5D]" />
                    ) : (
                      <AddCircleIcon className="w-6 h-6 text-[#5A6B5D]" />
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[15px] text-muted-foreground leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
