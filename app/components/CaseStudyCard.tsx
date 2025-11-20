import Reveal from "./Reveal";

type CaseStudyCardProps = {
  category: string;
  title: string;
  description: string;
  completionTime: string;
  accentColor: string;
};

export default function CaseStudyCard({
  category,
  title,
  description,
  completionTime,
  accentColor,
}: CaseStudyCardProps) {
  return (
    <Reveal>
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-200 h-full flex flex-col">
        <div className={`${accentColor} text-xs sm:text-sm font-semibold mb-2`}>
          {category}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
          {description}
        </p>
        <div className={`flex items-center ${accentColor}`}>
          <span className="font-semibold text-sm sm:text-base">{completionTime}</span>
        </div>
      </div>
    </Reveal>
  );
}

