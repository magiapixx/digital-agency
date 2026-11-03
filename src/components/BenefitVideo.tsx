import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type BenefitVideoProps = {
  src: string;
  poster: string;
};

export default function BenefitVideo({ src, poster }: BenefitVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const nearby = useInView(ref, { margin: "300px", once: true });
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (visible && !reducedMotion) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [visible, nearby, reducedMotion]);

  return (
    <video
      ref={ref}
      src={nearby && !reducedMotion ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}