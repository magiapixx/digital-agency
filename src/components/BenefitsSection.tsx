import { motion } from "framer-motion";
const benefits = [{
  title: "Faster launch times",
  description: "Get to market in weeks, not quarters, with a team that ships every sprint.",
  filled: 1
}, {
  title: "Higher conversion rates",
  description: "Design and copy built around what your visitors actually need to say yes.",
  filled: 2
}, {
  title: "Stronger brand presence",
  description: "A cohesive identity across web, product, and every touchpoint in between.",
  filled: 4
}, {
  title: "Lower acquisition costs",
  description: "SEO, performance, and UX improvements that compound month after month.",
  filled: 4
}, {
  title: "Scalable foundations",
  description: "Sites and systems built to grow with you — no rebuild every two years.",
  filled: 5
}, {
  title: "A partner, not a vendor",
  description: "One dedicated team that knows your business and is invested in your results.",
  filled: 6
}];
const ProgressIndicator = ({
  filled
}: {
  filled: number;
}) => {
  return <div className="mb-6 flex items-start justify-end gap-[8px]">
      {Array.from({
      length: 6
    }).map((_, i) => <div key={i} className={`w-[12px] h-[26px] rounded-full ${i < filled ? "bg-[#FF7732]" : "border-2 border-[#FF7732]/40 bg-transparent"}`} style={{
      transform: "rotate(30deg)"
    }} />)}
    </div>;
};
const BenefitsSection = () => {
  return <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="inline-block px-6 py-2 bg-[#F6F8F7] border border-[#E8E8E8] rounded-[100px] mb-2">
              <p className="text-[12px] font-medium text-[#1F2420]">
                // Benefits //
              </p>
            </motion.div>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="text-2xl md:text-3xl lg:text-[40px] font-medium text-foreground leading-tight">
              Real results,{" "}
              <br />
              project after project
            </motion.h2>
          </div>
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="flex items-end justify-start lg:justify-end">
            <p className="text-base font-light text-muted-foreground max-w-lg">
              ice7 studio helps brands move from scattered ideas to a digital presence
              that performs — delivering faster launches, stronger brands, and measurable
              growth with every engagement.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-[#F7F8F7] p-2 rounded-[24px]">
          {benefits.map((benefit, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }} className="bg-background rounded-[20px] pt-5 px-5 pb-10 hover:shadow-lg transition-all" style={{
          boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.1), 0px 1px 4px rgba(12, 12, 13, 0.05)'
        }}>
              <ProgressIndicator filled={benefit.filled} />
              <h3 className="text-[18px] font-semibold text-foreground mb-2 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default BenefitsSection;