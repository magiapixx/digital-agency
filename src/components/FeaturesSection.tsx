import { motion } from "framer-motion";
import { ColorsIcon, AiSecurity01Icon, Layers01Icon } from "hugeicons-react";
import looper1 from "@/assets/looper-1.svg";
import looper2 from "@/assets/looper-2.png";
import looper3 from "@/assets/looper-3.png";
const features = [{
  icon: ColorsIcon,
  title: "Web design & development",
  description: "Fast, beautiful websites and web apps — designed and built end to end.",
  meshType: "spiral"
}, {
  icon: AiSecurity01Icon,
  title: "Branding & identity",
  description: "Logos, visual systems, and guidelines that make your brand unmistakable.",
  meshType: "wave"
}, {
  icon: Layers01Icon,
  title: "Growth & digital marketing",
  description: "SEO, content, and campaigns that turn visitors into loyal customers.",
  meshType: "flow"
}];

// Decorative mesh SVG components
const SpiralMesh = () => <img src={looper1} alt="" className="w-full h-full object-cover" />;
const WaveMesh = () => <img src={looper2} alt="" className="w-full h-full object-cover" />;
const FlowMesh = () => <img src={looper3} alt="" className="w-full h-full object-cover" />;
const meshComponents = {
  spiral: SpiralMesh,
  wave: WaveMesh,
  flow: FlowMesh
};
const FeaturesSection = () => {
  return <section id="about" className="py-24 md:py-36 bg-background">
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
          }} className="inline-block px-6 py-2 bg-[#F6F8F7] border border-[#E8E8E8] rounded-[100px] mb-2">
              <p className="text-[12px] font-medium text-[#1F2420]">
                // What we do //
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
              Full-service.{" "}
              <br />
              Built for growth
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
            <p className="text-[#59605A] max-w-lg">
              We help ambitious companies launch, refresh, and grow their digital presence.
              From first sketches to shipped products, one team handles strategy, design,
              development, and the ongoing work that keeps you moving forward.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, index) => {
          const MeshComponent = meshComponents[feature.meshType as keyof typeof meshComponents];
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-[#F6F8F7] border-[#E8E8E8] rounded-2xl overflow-hidden flex flex-col border-0">
                <div className="m-2 p-5 bg-[#FFFFFF] rounded-xl shadow-[0_1px_4px_rgba(12,12,13,0.1),0_1px_4px_rgba(12,12,13,0.05)] flex flex-col gap-2 relative z-10">
                  <div className="w-12 h-12 bg-[#EFF1EF] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#6B7280]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2420]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="h-40 -mt-2 overflow-hidden">
                  <MeshComponent />
                </div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;