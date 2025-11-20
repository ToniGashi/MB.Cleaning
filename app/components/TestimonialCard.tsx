import Reveal from "./Reveal";

type TestimonialCardProps = {
  quote: string;
  author: string;
};

export default function TestimonialCard({
  quote,
  author,
}: TestimonialCardProps) {
  return (
    <Reveal>
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-200 h-full flex flex-col">
        <div className="flex mb-3 sm:mb-4 text-yellow-400 text-lg sm:text-xl">{"⭐".repeat(5)}</div>
        <p
          className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed flex-grow"
          dangerouslySetInnerHTML={{ __html: quote }}
        />
        <p className="font-semibold text-slate-900 text-sm sm:text-base">{author}</p>
      </div>
    </Reveal>
  );
}

