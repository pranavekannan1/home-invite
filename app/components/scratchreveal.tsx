export default function ScratchDetails({
  date,
  time,
  venue,
}: {
  date: string;
  time: string;
  venue: string;
}) {
  const details = [
    { label: 'Date · തീയതി', value: date, symbol: '✦' },
    { label: 'Time · സമയം', value: time, symbol: '◷' },
    { label: 'Venue · വേദി', value: venue, symbol: '⌖' },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {details.map(({ label, value, symbol }) => (
        <article
          key={label}
          className="rounded-2xl border border-[#c48a2c]/30 bg-[#fff8e9] p-5 text-center sm:p-6"
        >
          <span aria-hidden="true" className="text-2xl text-[#c48a2c]">
            {symbol}
          </span>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-[#a33c36]">
            {label}
          </p>
          <p className="mt-2 font-semibold leading-7 text-[#572532]">{value}</p>
        </article>
      ))}
    </div>
  );
}
