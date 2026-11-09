'use client';

import { useEffect, useState } from 'react';

const units = [
  { label: 'Days', divisor: 24 * 60 * 60 },
  { label: 'Hours', divisor: 60 * 60, modulus: 24 },
  { label: 'Minutes', divisor: 60, modulus: 60 },
  { label: 'Seconds', divisor: 1, modulus: 60 },
];

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();

    if (Number.isNaN(targetTime)) {
      throw new Error(`Invalid countdown target date: ${targetDate}`);
    }

    const updateCountdown = () => {
      setSecondsRemaining(
        Math.max(0, Math.floor((targetTime - Date.now()) / 1000)),
      );
    };

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  if (secondsRemaining === 0) {
    return (
      <p className="rounded-2xl border border-[#c48a2c]/40 bg-[#fffaf0] px-6 py-8 text-center font-serif text-2xl font-semibold text-[#7d2937]">
        ശുഭാരംഭം! The celebration has begun.
      </p>
    );
  }

  return (
    <div
      aria-label="Countdown to the housewarming celebration"
      aria-live="off"
      className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5"
    >
      {units.map(({ label, divisor, modulus }) => {
        const unitValue =
          secondsRemaining === null
            ? null
            : Math.floor(secondsRemaining / divisor) % (modulus ?? Infinity);
        const value =
          unitValue === null ? '--' : String(unitValue).padStart(2, '0');

        return (
          <div
            key={label}
            className="rounded-2xl border border-[#c48a2c]/40 bg-[#fffaf0] px-4 py-6 text-center shadow-sm sm:py-8"
          >
            <p className="font-serif text-4xl font-semibold tabular-nums text-[#7d2937] sm:text-5xl">
              {value}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8e2f38]">
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
