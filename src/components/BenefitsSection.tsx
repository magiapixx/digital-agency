import { motion, useReducedMotion } from "framer-motion";
import BenefitVideo from "@/components/BenefitVideo";
import codeVideo from "@/assets/benefits/software-code.mp4.asset.json";
import codePoster from "@/assets/benefits/software-code.jpg.asset.json";
import editingVideo from "@/assets/benefits/editing-timeline.mp4.asset.json";
import editingPoster from "@/assets/benefits/editing-timeline.jpg.asset.json";
import designVideo from "@/assets/benefits/design-colors.mp4.asset.json";
import designPoster from "@/assets/benefits/design-colors.jpg.asset.json";
import screenVideo from "@/assets/benefits/programming-screen.mp4.asset.json";
import screenPoster from "@/assets/benefits/programming-screen.jpg.asset.json";
import keyboardVideo from "@/assets/benefits/developer-keyboard.mp4.asset.json";
import keyboardPoster from "@/assets/benefits/developer-keyboard.jpg.asset.json";
import workspaceVideo from "@/assets/benefits/software-workspace.mp4.asset.json";
import workspacePoster from "@/assets/benefits/software-workspace.jpg.asset.json";

const media = [
  { src: codeVideo.url, poster: codePoster.url },
  { src: editingVideo.url, poster: editingPoster.url },
  { src: designVideo.url, poster: designPoster.url },
  { src: screenVideo.url, poster: screenPoster.url },
  { src: keyboardVideo.url, poster: keyboardPoster.url },
  { src: workspaceVideo.url, poster: workspacePoster.url },
];
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
  return <div aria-hidden="true" className="flex shrink-0 items-start justify-end gap-1.5 md:gap-2">
      {Array.from({
      length: 6
    }).map((_, i) => <div key={i} className={`h-5 w-2 rotate-[30deg] rounded-full md:h-7 md:w-2.5 ${i < filled ? "bg-accent" : "border border-accent/70 bg-transparent"}`} />)}
    </div>;
};
const BenefitsSection = () => {
  const reducedMotion = useReducedMotion();
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
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        delay: index * 0.05,
        duration: 0.6
      }} className="benefit-card group relative min-h-[360px] overflow-hidden rounded-[24px] bg-card transition-shadow duration-500 md:aspect-[16/9] md:min-h-0">
            {media[index] && <BenefitVideo src={media[index].src} poster={media[index].poster} />}
            <div aria-hidden="true" className="benefit-card-overlay absolute inset-0" />
            <div className="relative flex h-full min-h-[360px] flex-col justify-between gap-10 p-6 md:min-h-0 md:p-12 lg:p-16">
              <div className="flex items-start justify-between gap-8">
                <span className="text-[10px] font-medium uppercase tracking-normal opacity-80 md:text-xs">
                  {String(index + 1).padStart(2, "0")} — Benefit
                </span>
                <ProgressIndicator filled={benefit.filled} />
              </div>

              <div className="max-w-4xl">
                <h3 className="mb-3 text-2xl font-medium leading-tight md:text-3xl lg:text-4xl">
                  {benefit.title}
                </h3>
                <p className="max-w-lg text-sm leading-relaxed opacity-85 md:text-base">
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
