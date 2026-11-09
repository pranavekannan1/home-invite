'use client';

import { useState } from 'react';

export default function SecretWelcome() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="px-5 pb-12 text-center sm:px-8">
      <button
        type="button"
        aria-expanded={isRevealed}
        onClick={() => setIsRevealed((revealed) => !revealed)}
        className="min-h-11 rounded-full border border-[#c48a2c]/50 bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-[#7d2937] transition hover:bg-[#fff3d8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7d2937]"
      >
        {isRevealed ? 'അനുഗ്രഹങ്ങളോടെ · With blessings' : 'ഒരു ചെറിയ കുറിപ്പ് · A little note'}
      </button>
      {isRevealed && (
        <div className="mx-auto mt-4 max-w-xl space-y-2 font-serif text-lg leading-8 text-[#7d2937]">
          <p>നിങ്ങളുടെ വരവോടെ ഞങ്ങളുടെ പുതിയ വീട് യഥാർത്ഥത്തിൽ വീടാകും.</p>
          <p>
            Your presence will truly make our new house a home. We can’t wait
            to celebrate with you.
          </p>
        </div>
      )}
    </section>
  );
}
