import Link from "next/link";
import Reveal from "./Reveal";

type BlogCardProps = {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  href: string;
  linkColor: string;
};

export default function BlogCard({
  category,
  categoryColor,
  title,
  description,
  href,
  linkColor,
}: BlogCardProps) {
  return (
    <Reveal>
      <article className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-200 h-full flex flex-col">
        <div className={`${categoryColor} text-xs sm:text-sm font-semibold mb-2 flex-shrink-0`}>
          {category}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 flex-shrink-0">{title}</h3>
        <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed flex-grow min-h-0">
          {description}
        </p>
        <Link
          href={href}
          className={`${linkColor} font-semibold hover:opacity-80 inline-block text-sm sm:text-base mt-auto flex-shrink-0`}
        >
          Read More →
        </Link>
      </article>
    </Reveal>
  );
}

