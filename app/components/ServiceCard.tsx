import Reveal from "./Reveal";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  hoverColor?: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  hoverColor = "blue",
}: ServiceCardProps) {
  const hoverColors = {
    blue: "hover:border-blue-300 group-hover:text-blue-600",
    orange: "hover:border-orange-300 group-hover:text-orange-600",
  };

  return (
    <Reveal>
      <div
        className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 ${hoverColors[hoverColor as keyof typeof hoverColors]} transform hover:-translate-y-2 h-full flex flex-col`}
      >
        <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3
          className={`text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 ${hoverColors[hoverColor as keyof typeof hoverColors]} transition-colors`}
        >
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </Reveal>
  );
}

