import Reveal from "./Reveal";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
};

export default function Section({
  title,
  children,
  className = "",
  titleClassName = "text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center mb-8 sm:mb-10 md:mb-12",
}: SectionProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className={titleClassName}>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

