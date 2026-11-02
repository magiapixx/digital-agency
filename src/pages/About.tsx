import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoStrip from "@/components/LogoStrip";
import { ColorsIcon, AiSecurity01Icon, Layers01Icon } from "hugeicons-react";
import heroRings from "@/assets/hero-rings.jpg";
import glassSphere from "@/assets/about-glass-sphere.jpg";
import commitmentImage from "@/assets/about-commitment.jpg";
const About = () => {
  const beliefs = [{
    icon: ColorsIcon,
    title: "Design with intent",
    description: "Every pixel and every line of copy should serve a business goal — not just look good."
  }, {
    icon: AiSecurity01Icon,
    title: "Craft is non-negotiable",
    description: "Accessibility, performance, and polish are built in from the start — not patched on later."
  }, {
    icon: Layers01Icon,
    title: "Long-term partners",
    description: "We win when our clients grow, so we build relationships measured in years, not deliverables."
  }];
  const stats = [{
    value: "120+",
    label: "projects",
    description: "shipped for startups, scale-ups, and established brands"
  }, {
    value: "6wk",
    label: "average",
    description: "from kickoff to a launched, production-ready website"
  }, {
    value: "98%",
    label: "return",
    description: "of our clients come back for a second project or ongoing plan"
  }, {
    value: "4.9★",
    label: "rating",
    description: "average client satisfaction across every engagement"
  }];
  return <div className="min-h-dvh bg-background">
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="pt-32 pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                <span className="inline-block mb-6 text-sm text-muted-foreground bg-muted/50 border border-border rounded-full py-[4px] px-[12px] font-light">
                  About us
                </span>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-medium text-foreground leading-[1.1] mb-6">
                  Our Mission
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                  Designing and building the digital side of ambitious brands. Our vision: be the studio founders and marketing teams trust to make them look and perform their best.
                </p>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative">
                <img alt="3D Orange Rings" className="w-full rounded-3xl object-cover aspect-[4/3]" src="/lovable-uploads/5d758149-458c-4711-aee9-d704f3406698.png" />
              </motion.div>
            </div>

            {/* Logo Strip */}
            <div className="mt-16 overflow-hidden">
              <LogoStrip label="Tools and platforms we build on" />
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-medium text-foreground leading-[1.2]">
                  We believe{" "}
                  <span className="text-orange-500">great digital experiences compound,</span>
                  {" "}not happen by accident. ice7 studio exists to make world-class design and development accessible to teams of any size.
                </h2>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="space-y-6">
                <div>
                  <p className="text-[16px] font-medium mb-4 text-foreground">
                    From scattered tools to a real digital presence
                  </p>
                  <p className="text-muted-foreground leading-relaxed">Most teams juggle freelancers, templates, and tools that never quite fit together. Work stalls, brands drift, and growth leaks through the cracks.


ice7 studio was created to close that gap — one dedicated team for strategy, design, and development, turning good ideas into digital products that perform.</p>
                </div>
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Believe Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }} className="relative">
                <img alt="Glass Sphere" className="w-full rounded-3xl" src="/lovable-uploads/97137d00-d934-4f44-8da3-90d254cbb1d3.png" />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="max-w-[600px]">
                <h3 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium text-foreground mb-8">
                  What we believe
                </h3>
                <p className="text-muted-foreground mb-10 leading-relaxed">ice7 studio is built on a few simple principles that guide every project we take on. We listen first, design with intent, and sweat the details — because that's what separates a site that works from one that wins.</p>
                <div className="bg-[#F7F8F7] rounded-[24px] p-2 flex flex-col gap-2">
                  {beliefs.map((belief, index) => <motion.div key={belief.title} initial={{
                  opacity: 0,
                  y: 10
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }} className="bg-background rounded-[16px] p-5" style={{
                  boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.1), 0px 1px 4px rgba(12, 12, 13, 0.05)'
                }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-[#EFF1EF] rounded-xl flex items-center justify-center flex-shrink-0">
                          <belief.icon className="w-5 h-5 text-[#6B7280]" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-[18px] font-medium text-foreground">{belief.title}</h4>
                      </div>
                      <p className="text-[15px] text-muted-foreground leading-relaxed">{belief.description}</p>
                    </motion.div>)}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="max-w-[600px] mb-16">
              <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-medium text-foreground leading-[1.2] mb-4">
                We are committed to{" "}
                <span className="text-[#f97415]">helping brands grow online</span>
                {" "}— with honest advice, clear pricing, and work we're proud to sign.
              </h2>
              <p className="text-muted-foreground mt-6 max-w-[430px]">
                As more business moves online, ice7 studio helps teams avoid the usual pitfalls — slow builds, generic design, and agencies that disappear after launch.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-background rounded-2xl p-6 space-y-2" style={{
              boxShadow: '0px 1px 4px rgba(12, 12, 13, 0.1), 0px 1px 4px rgba(12, 12, 13, 0.05)'
            }}>
                  <div className="text-[36px] md:text-[48px] font-medium text-foreground leading-none">
                    {stat.value} <span className="text-[20px] md:text-[24px] font-normal">{stat.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }}>
                <h3 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium text-foreground mb-4">
                  Our commitment
                </h3>
                <p className="text-[16px] font-medium mb-6 text-foreground">
                  Craft at every scale
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We are committed to raising the bar for what a studio partnership feels like — clear communication, honest timelines, and no black boxes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it's a landing page or a full platform, ice7 studio brings the same care, process, and accountability to every engagement.
                </p>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="relative">
                <img alt="Abstract 3D Shape" className="w-full rounded-3xl object-cover aspect-square" src="/lovable-uploads/11793a48-92cb-46ff-90f3-16b017c43dbf.png" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;