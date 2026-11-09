'use client';

import { useState, type AnimationEvent, type ReactNode } from 'react';

export default function InvitationEnvelope({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAnimationEnd = (event: AnimationEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(true);
    }
  };

  if (isOpen) {
    return <>{children}</>;
  }

  return (
    <main className="envelope-gate relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12 text-center text-white">
      <div aria-hidden="true" className="envelope-gate__ornament" />
      <div className="relative z-10 mx-auto w-full max-w-xl">
        <p className="font-serif text-lg text-white/85">ശ്രീ ഗണേശായ നമഃ</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
          You&apos;re invited
        </h1>
        <p className="mt-2 text-sm tracking-[0.18em] text-white/80">
          സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു
        </p>

        <div
          onAnimationEnd={handleAnimationEnd}
          className={`invitation-envelope mx-auto mt-10 ${
            isOpening ? 'invitation-envelope--opening' : ''
          }`}
        >
          <div className="invitation-envelope__paper">
            <span className="font-serif text-lg text-[#9b6338]">A little note for you</span>
            <span className="mt-2 block font-serif text-3xl font-semibold text-[#d43474]">
              ശുഭ ഗൃഹപ്രവേശം
            </span>
          </div>
          <div aria-hidden="true" className="invitation-envelope__flap" />
          <div aria-hidden="true" className="invitation-envelope__fold" />
          <button
            type="button"
            disabled={isOpening}
            onClick={() => setIsOpening(true)}
            className="invitation-envelope__ribbon group"
            aria-label="Untie the ribbon and open the invitation"
          >
            <span className="invitation-envelope__thread" aria-hidden="true" />
            <span className="invitation-envelope__bow" aria-hidden="true">
              <span />
            </span>
            <span className="relative z-10 rounded-full border border-white/60 bg-[#d43474] px-5 py-3 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-lg transition group-hover:scale-105 group-hover:bg-[#b82560] group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-white">
              {isOpening ? 'Opening…' : 'Untie the ribbon'}
            </span>
          </button>
        </div>

        <p className="mt-8 text-sm text-white/90">
          Pull the ribbon to reveal your invitation
        </p>
        <p className="mt-1 text-xs text-white/75">
          റിബൺ അഴിച്ച് ക്ഷണക്കത്ത് കാണുക
        </p>
      </div>
    </main>
  );
}
