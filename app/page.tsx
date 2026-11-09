import Countdown from './components/countdown';
import SecretWelcome from '@/app/components/secretwelcome';
import ScratchDetails from '@/app/components/scratchreveal';
import Lamp from '@/app/components/lamp';
import InvitationEnvelope from '@/app/components/invitation-envelope';

const event = {
  hosts: 'Kannan M and Sreelatha Kannan',
  date: 'Wednesday, 11 November 2026',
  time: '07:00 AM onwards',
  eventDateTime: '2026-11-11T07:00:00+05:30',
  venue: 'Pranavam Pottayil Malayinkeezh',
  address: 'Pranavam Perukavu Pottayil Malayinkeezh Kerala 695571',
  latitude: 8.4912,
  longitude: 77.0184053,
  whatsappNumber: '919205475738',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7892.168288161884!2d77.01467508951255!3d8.491199666200462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b085d47f33ed%3A0x6ad1a35e9158009a!2sPottayil%2C%20Keralam%20695571!5e0!3m2!1sen!2sin!4v1794203329773!5m2!1sen!2sin',
};

function SectionTitle({
  label,
  title,
  description,
  light = false,
}: {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-xs font-bold uppercase tracking-[0.24em] sm:text-sm ${light ? 'text-[#f2cd7a]' : 'text-[#a33c36]'}`}>
        {label}
      </p>
      <div
        aria-hidden="true"
        className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-3 text-[#c48a2c]"
      >
        <span>✦</span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c48a2c] to-transparent" />
        <span className="text-lg">❋</span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c48a2c] to-transparent" />
        <span>✦</span>
      </div>
      <h2 className={`mt-4 font-serif text-3xl font-semibold leading-tight sm:text-5xl ${light ? 'text-[#fff8e9]' : 'text-[#572532]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg ${light ? 'text-white/90' : 'text-[#7d2937]'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const whatsappMessage = encodeURIComponent(
    `ശുഭ ഗൃഹപ്രവേശം! ${event.hosts}യുടെ പുതിയ വീടിന് ഹൃദയം നിറഞ്ഞ ആശംസകൾ.`,
  );
  const whatsappLink = `https://wa.me/${event.whatsappNumber}?text=${whatsappMessage}`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${event.latitude},${event.longitude}`;
  const startDate = new Date(event.eventDateTime);
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);
  const googleDate = (date: Date) =>
    date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z/, 'Z');
  const googleCalendarLink =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(`ഗൃഹപ്രവേശം - ${event.hosts}`)}` +
    `&dates=${googleDate(startDate)}/${googleDate(endDate)}` +
    `&details=${encodeURIComponent('Please join us for our housewarming celebration.')}` +
    `&location=${encodeURIComponent(event.address)}`;

  return (
    <InvitationEnvelope>
      <Lamp>
        <main className="invitation-page min-h-screen overflow-hidden text-[#572532]">
        <section className="relative isolate min-h-screen px-4 py-6 sm:px-8 sm:py-10">
          <div aria-hidden="true" className="toran-pattern absolute inset-x-0 top-0 h-12 opacity-90" />
          <div aria-hidden="true" className="absolute -left-28 top-36 h-72 w-72 rounded-full bg-[#eebd55]/15 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-[#a33c36]/10 blur-3xl" />

          <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col justify-between rounded-[2rem] border border-[#c48a2c]/45 bg-[#fffaf0]/90 px-5 py-8 shadow-[0_24px_90px_rgba(83,42,29,0.12)] sm:min-h-[calc(100vh-5rem)] sm:px-12 sm:py-10">
            <header className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-3 text-[#8e2f38]">
                <span
                  role="img"
                  aria-label="Om"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c48a2c]/50 bg-[#fff3d8] font-serif text-3xl text-[#c48a2c]"
                >
                  ॐ
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold">
                    ശ്രീ ഗണേശായ നമഃ
                  </p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#8e2f38]">
                    With the blessings of the divine
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <p className="max-w-full rounded-full border border-[#c48a2c]/45 px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#8e2f38] sm:px-4 sm:tracking-[0.2em]">
                  സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു
                </p>
                <div
                  aria-label="Shubh Labh"
                  className="rounded-lg border border-[#c48a2c]/50 bg-[#fff3d8] px-4 py-2 font-serif text-lg font-bold text-[#7d2937] shadow-sm"
                >
                  शुभ लाभ
                </div>
              </div>
            </header>

            <div className="mx-auto grid w-full max-w-5xl items-center gap-10 py-14 text-center lg:grid-cols-[1fr_auto_1fr] lg:gap-12 lg:text-left">
              <div className="order-2 lg:order-1">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#a33c36] sm:text-sm">
                  A new home, a beautiful beginning
                </p>
                <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] text-[#572532] sm:text-6xl lg:text-7xl">
                  ഗൃഹ
                  <span className="block text-[#a33c36]">പ്രവേശം</span>
                </h1>
                <p className="mt-5 font-serif text-xl text-[#8e2f38] sm:text-2xl">
                  Housewarming celebration
                </p>
                <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-[#7d2937] sm:text-lg lg:mx-0">
                  With grateful hearts, we invite you and your family to bless
                  our new home and share in a day of joy, prayers, and togetherness.
                </p>
                <p className="mt-5 text-lg font-semibold text-[#572532]">
                  {event.hosts}
                </p>
              </div>

              <div
                role="img"
                aria-label="Traditional Kerala nilavilakku, a standing brass oil lamp"
                className="order-1 mx-auto lg:order-2"
              >
                <svg viewBox="0 0 220 270" className="h-60 w-52 drop-shadow-xl sm:h-72 sm:w-56" fill="none">
                  <defs>
                    <linearGradient id="brass" x1="70" y1="0" x2="150" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#98522c" />
                      <stop offset=".28" stopColor="#f4ce70" />
                      <stop offset=".52" stopColor="#bd772f" />
                      <stop offset=".76" stopColor="#f8d984" />
                      <stop offset="1" stopColor="#8e4528" />
                    </linearGradient>
                    <linearGradient id="lamp-flame" x1="110" y1="12" x2="110" y2="52" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff8bd" />
                      <stop offset="1" stopColor="#f19b35" />
                    </linearGradient>
                  </defs>
                  <g stroke="#8e4528" strokeLinejoin="round" strokeWidth="2">
                    <path d="M110 10c-15 17-11 30 0 35 11-5 15-18 0-35Z" fill="url(#lamp-flame)" />
                    <path d="M78 26c-13 12-10 22 0 26 9-5 12-14 0-26Zm64 0c-13 12-10 22 0 26 9-5 12-14 0-26Z" fill="url(#lamp-flame)" />
                    <path d="M52 43c-11 10-8 18 0 22 8-4 10-12 0-22Zm116 0c-11 10-8 18 0 22 8-4 10-12 0-22Z" fill="url(#lamp-flame)" />
                    <path d="M110 48v13M78 51l14 12m50-12-14 12M52 65l37 8m79-8-37 8" stroke="#a95c2b" strokeWidth="3" />
                    <path d="M81 68h58l-7 12H88l-7-12Z" fill="url(#brass)" />
                    <path d="M98 80h24l7 14-7 81h-24l-7-81 7-14Z" fill="url(#brass)" />
                    <path d="M93 99h34m-34 12h34m-32 31h30m-30 11h30" stroke="#8e4528" />
                    <path d="M89 175h42l16 16c-10 11-22 15-37 15s-27-4-37-15l16-16Z" fill="url(#brass)" />
                    <path d="M73 190c19 12 45 12 74 0m-50 17v12h26v-12m-36 12h46l12 12H87l10-12Z" fill="url(#brass)" />
                    <path d="M76 243h68l16 8H60l16-8Zm-20 8h108v8H56v-8Z" fill="url(#brass)" />
                    <path d="M93 91h34m-32 87h30m-42 12h54m-45 26h36m-54 27h72" stroke="#fff0a8" strokeWidth="2" />
                  </g>
                  <circle cx="110" cy="127" r="4" fill="#fff0a8" />
                  <circle cx="110" cy="127" r="9" stroke="#8e4528" strokeWidth="2" />
                </svg>
              </div>

              <div className="order-3 mx-auto w-full max-w-xs rounded-2xl border border-[#c48a2c]/40 bg-[#fff3d8]/70 p-6 text-center shadow-sm lg:mx-0">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a33c36]">
                  Please join us
                </p>
                <p className="mt-3 font-serif text-2xl font-semibold text-[#572532]">
                  2026 നവംബർ 11
                </p>
                <p className="mt-1 text-sm font-medium text-[#7d2937]">
                  ബുധനാഴ്ച · {event.time}
                </p>
                <div className="mx-auto my-4 h-px w-16 bg-[#c48a2c]/70" />
                <p className="font-semibold text-[#572532]">{event.venue}</p>
                <a
                  href="#details"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#7d2937] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#a33c36] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7d2937]"
                >
                  ചടങ്ങിന്റെ വിവരങ്ങൾ
                </a>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#details"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8e2f38] transition hover:text-[#8e2f38]"
              >
                <span>Join our celebration</span>
                <span aria-hidden="true" className="text-lg text-[#c48a2c]">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="relative px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-[2rem] border border-[#d6b77a]/45 bg-[#fffaf0] p-7 shadow-[0_18px_60px_rgba(83,42,29,0.08)] sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div role="img" aria-label="A father, mother, elder son, and younger daughter standing together in front of their new home" className="mx-auto w-full max-w-sm">
              <svg viewBox="0 0 380 280" className="h-auto w-full drop-shadow-sm">
                <path d="M34 128 190 24l156 104" fill="#d43474" stroke="#8e2f38" strokeWidth="7" strokeLinejoin="round" />
                <path d="M60 125v118h260V125L190 39 60 125Z" fill="#fff3d8" stroke="#c48a2c" strokeWidth="4" />
                <path d="M155 243v-72a35 35 0 0 1 70 0v72" fill="#d9a66a" stroke="#8e2f38" strokeWidth="4" />
                <circle cx="190" cy="151" r="3" fill="#8e2f38" />
                <path d="M80 145h48v43H80zM252 145h48v43h-48z" fill="#f3c967" stroke="#8e2f38" strokeWidth="4" />
                <path d="M104 145v43m172-43v43M80 166h48m124 0h48" stroke="#8e2f38" strokeWidth="3" />
                <path d="M42 244h296" stroke="#c48a2c" strokeWidth="5" strokeLinecap="round" />
                <g stroke="#7d2937" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="91" cy="205" r="13" fill="#d99b69" />
                  <path d="M77 222q14-12 28 0l6 36H71l6-36Z" fill="#7d2937" />
                  <path d="m76 230-12 19m38-19 10 19m-34 10-2 23m18-23 3 23" />
                  <circle cx="139" cy="211" r="11" fill="#d99b69" />
                  <path d="M127 226q12-10 24 0l5 31h-34l5-31Z" fill="#d43474" />
                  <path d="m128 232-10 16m30-16 9 16m-28 9-2 21m15-21 2 21" />
                  <circle cx="253" cy="212" r="10" fill="#d99b69" />
                  <path d="M242 225q11-9 22 0l5 30h-32l5-30Z" fill="#457c72" />
                  <path d="m243 231-9 16m29-16 9 16m-25 8-2 21m13-21 2 21" />
                  <circle cx="290" cy="218" r="9" fill="#d99b69" />
                  <path d="M280 230q10-8 20 0l4 26h-28l4-26Z" fill="#e1a943" />
                  <path d="m281 235-8 13m24-13 8 13m-21 8-1 18m10-18 1 18" />
                </g>
                <path d="M83 198q8-11 16 0m33 4q7-9 14 0m117 1q7-9 13 0m20 5q6-8 12 0" fill="#572532" />
                <path d="M65 245h55m2 0h45m65 0h40m2 0h43" stroke="#f2cd7a" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a33c36]">
                പുതിയ വീട്, പുതിയ സന്തോഷങ്ങൾ
              </p>
              <p className="mt-2 text-sm font-medium text-[#7d2937]">
                The new home is yours; the happiness is ours.
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#572532] sm:text-4xl">
                A home becomes special when shared with loved ones.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#7d2937] sm:text-lg">
                നിങ്ങളുടെ സ്നേഹവും ആശംസകളും അനുഗ്രഹവും ഞങ്ങളുടെ പുതിയ വീടിനെ
                കൂടുതൽ മനോഹരമാക്കും. ഈ മംഗളാവസരത്തിൽ നിങ്ങളുടെ സാന്നിധ്യം
                ഞങ്ങൾക്ക് വിലമതിക്കാനാവാത്തതാണ്.
              </p>
              <p className="mt-3 text-base leading-8 text-[#7d2937] sm:text-lg">
                Your love, wishes, and blessings will make our new home even
                more special. Having you with us on this auspicious occasion
                would mean so much to us.
              </p>
              <p className="mt-6 font-serif text-xl text-[#8e2f38]">
                സ്നേഹത്തോടെ, {event.hosts}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f3e7d0] px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              label="കാത്തിരിപ്പിന്റെ കൗണ്ട്ഡൗൺ"
              title="The celebration is getting closer"
              description="We are counting every moment until we can welcome you."
            />
            <div className="mt-10 sm:mt-14">
              <Countdown targetDate={event.eventDateTime} />
            </div>
          </div>
        </section>

        <section id="details" className="scroll-mt-8 px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle
              label="താങ്കളെ സാദരം ക്ഷണിക്കുന്നു"
              title="The celebration details"
              description="Please join us for prayers, warm company, and a joyful new beginning."
              light
            />
            <div className="mt-10 rounded-[2rem] border border-[#d6b77a]/50 bg-[#fffaf0] p-5 shadow-[0_18px_60px_rgba(83,42,29,0.08)] sm:mt-14 sm:p-10">
              <ScratchDetails
                date={event.date}
                time={event.time}
                venue={event.venue}
              />
            </div>
            <div className="mt-8 text-center">
              <a
                href={googleCalendarLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#7d2937]/25 bg-[#fffaf0] px-6 py-3 text-sm font-bold text-[#7d2937] transition hover:border-[#7d2937] hover:bg-[#7d2937] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7d2937]"
              >
                കലണ്ടറിലേക്ക് ചേർക്കുക · Add to calendar
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#702737] shadow-[0_24px_70px_rgba(83,42,29,0.2)] md:grid-cols-2">
            <div className="p-8 text-center text-[#fff8e9] sm:p-12 md:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f2cd7a]">
                നിങ്ങളെ കാത്തിരിക്കുന്നു
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
                Find our new home
              </h2>
              <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                {event.address}
              </p>
              <a
                href={directionsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#f2cd7a] px-6 py-3 text-sm font-bold text-[#572532] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                വഴി കാണുക · Get directions
              </a>
            </div>
            <iframe
              title="Housewarming location map"
              src={event.mapEmbedUrl}
              className="min-h-80 w-full border-0 md:min-h-full"
              loading="lazy"
            />
          </div>
        </section>

        <section className="px-5 pb-20 text-center sm:px-8 sm:pb-24">
          <SectionTitle
            label="സ്വാഗതം"
            title="Will you celebrate with us?"
            description="നിങ്ങളുടെ സാന്നിധ്യമാണ് ഞങ്ങൾക്ക് ലഭിക്കുന്ന ഏറ്റവും വലിയ സമ്മാനം."
            light
          />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#7d2937] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#7d2937]/15 transition hover:-translate-y-0.5 hover:bg-[#a33c36] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7d2937]"
          >
            ആശംസകൾ അയക്കൂ · Send wishes on WhatsApp
          </a>
        </section>

        <SecretWelcome />

        <footer className="border-t border-[#c48a2c]/35 bg-[#fffaf0] px-5 py-8 text-center sm:px-8">
          <p className="font-serif text-xl font-semibold text-[#7d2937]">
            സ്നേഹത്തോടെ, PRANAVE KANNAN & PAVITHRA KANNAN
          </p>
          <p className="mt-2 text-sm text-[#7d2937]">
            നിങ്ങളുടെ വരവിനായി കാത്തിരിക്കുന്നു · We look forward to welcoming you.
          </p>
        </footer>
        <div className="bg-[#572532] px-5 py-3 text-center">
          <p className="text-xs font-medium tracking-wide text-white/75">
            2026 · Rights Reserved · Designed & Developed by{' '}
            <span className="font-bold text-[#f2cd7a]">MAHI</span>
          </p>
        </div>
        </main>
      </Lamp>
    </InvitationEnvelope>
  );
}
