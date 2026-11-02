interface LogoProps {
  className?: string;
}

const Logo = ({ className = "text-[22px]" }: LogoProps) => (
  <span
    className={`inline-flex items-baseline whitespace-nowrap leading-none tracking-tight ${className}`}
    aria-label="ice7 studio"
  >
    <span className="font-semibold text-foreground">ice</span>
    <span className="font-semibold text-accent">7</span>
    <span className="font-light text-muted-foreground ml-1.5">studio</span>
  </span>
);

export default Logo;
