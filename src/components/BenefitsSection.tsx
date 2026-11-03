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
  return <div className="flex shrink-0 items-start justify-end gap-[8px] md:gap-[14px]">
      {Array.from({
      length: 6
    }).map((_, i) => <div key={i} className={`w-[14px] h-[34px] rounded-full md:w-[22px] md:h-[56px] ${i < filled ? "bg-accent" : "border-2 border-accent/40 bg-transparent"}`} style={{
      transform: "rotate(30deg)"
    }} />)}
    </div>;
};
const BenefitsSection = () => {
  return <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="inline-block px-6 py-2 bg-muted border border-border rounded-[100px] mb-2">
              <p className="text-[12px] font-medium text-foreground">
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
      </div>

      {/* Large 16:9 cards, 95% of viewport width, wide spacing */}
      <div className="mx-auto flex w-[95%] flex-col gap-16 md:gap-32">
        {benefits.map((benefit, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        delay: index * 0.05,
        duration: 0.6
      }} className="group relative min-h-[420px] overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_2px_24px_rgba(12,12,13,0.06)] transition-shadow duration-500 hover:shadow-[0_16px_60px_rgba(12,12,13,0.10)] md:aspect-[16/9] md:min-h-0 md:rounded-[40px]">
            <div className="relative flex h-full flex-col justify-between gap-10 p-8 md:p-14 lg:p-20">
              <div className="flex items-start justify-between gap-8">
                <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-muted-foreground/70 md:text-[15px]">
                  {String(index + 1).padStart(2, "0")} — Benefit
                </span>
                <ProgressIndicator filled={benefit.filled} />
              </div>

              <div className="max-w-4xl">
                <h3 className="mb-4 text-[28px] font-medium leading-[1.05] text-foreground md:mb-6 md:text-[44px] lg:text-[60px]">
                  {benefit.title}
                </h3>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-[20px]">
                  {benefit.description}
                </p>
              </div>

              <div className="absolute inset-x-8 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-700 group-hover:scale-x-100 md:inset-x-14" />
            </div>
          </motion.div>)}
      </div>
    </section>;
};
export default BenefitsSection;
