import { motion } from "framer-motion";
import { Star } from "lucide-react";
import testimonialAvatar from "@/assets/testimonial-avatar.webp";

const testimonials = [
  {
    quote: "Our best rebrand decision yet.",
    description: "ice7 studio gave us a brand and website that finally match the quality of our product.",
    author: "Marketing Director",
    company: "Northwind Retail",
    rating: 5,
  },
  {
    quote: "Shipped in six weeks.",
    description: "From kickoff to launch in six weeks — fast without ever feeling rushed.",
    author: "Founder & CEO",
    company: "Loop Health",
    rating: 5,
  },
  {
    quote: "Traffic doubled in three months.",
    description: "The SEO and performance work paid for itself almost immediately.",
    author: "Head of Growth",
    company: "Fieldnote SaaS",
    rating: 5,
  },
  {
    quote: "They feel like part of our team.",
    description: "One dedicated crew that knows our brand inside out and keeps shipping improvements.",
    author: "VP Marketing",
    company: "Cobalt Finance",
    rating: 5,
  },
  {
    quote: "Design and code under one roof.",
    description: "No handoff gaps, no finger-pointing. What they design, they build — and it works.",
    author: "Product Lead",
    company: "Brightpath",
    rating: 5,
  },
  {
    quote: "Conversion up 40%.",
    description: "The new site looks great and sells better. Win-win.",
    author: "Managing Director",
    company: "Harbor & Co",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-2xl md:text-3xl lg:text-[48px] lg:leading-none font-medium text-foreground leading-[1.2] mb-8 max-w-4xl mx-auto">
            "ice7 studio rebuilt our brand and website — organic traffic doubled within three months"
          </h3>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
              <img
                src={testimonialAvatar}
                alt="Maya Lindqvist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-base font-medium text-foreground">Maya Lindqvist</p>
              <p className="text-sm text-muted-foreground">Marketing Director, Northwind Retail</p>
            </div>
          </div>
        </motion.div>

        {/* Auto-scrolling Testimonials */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F7F8F7] rounded-[20px] p-2 flex flex-col flex-shrink-0 w-[280px] sm:w-[350px]"
              >
                {/* Content Container */}
                <div
                  className="bg-white rounded-[16px] p-5 mb-2"
                  style={{
                    boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.1), 0px 1px 4px rgba(12, 12, 13, 0.05)'
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FF7732] text-[#FF7732]" />
                    ))}
                  </div>

                  {/* Quote Title */}
                  <h3 className="text-[18px] font-semibold text-[#1F2420] mb-3 leading-snug">
                    "{testimonial.quote}"
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-[#6B7280] leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>

                {/* Author */}
                <p className="text-[12px] text-[#6B7280] px-3 py-4">
                  — {testimonial.author}, {testimonial.company}
                </p>
              </div>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
