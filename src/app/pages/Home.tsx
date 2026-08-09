'use client';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, BookOpen, ChevronRight, ExternalLink } from 'lucide-react';
import { framework, audiences, bookUrl } from '@/app/data';
import { useState } from 'react';
import Reveal from '@/app/components/Reveal';
import { pageWidth, sectionPad, sectionKicker, heading2 } from '@/app/styles';

export default function Home() {
  const [activeFramework, setActiveFramework] = useState(2);
  const [activeAudience, setActiveAudience] = useState(0);
  const activePillar = framework[activeFramework];
  const activeAudienceData = audiences[activeAudience];

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative isolate min-h-[560px] overflow-hidden bg-[linear-gradient(115deg,rgba(9,76,67,.98)_0%,rgba(11,60,53,.9)_49%,rgba(14,51,45,.72)_100%)] text-white lg:min-h-[750px]
          after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_78%_60%,rgba(56,156,142,.2),transparent_30%),linear-gradient(to_bottom,transparent_70%,rgba(9,76,67,.35))] after:content-['']"
        id="home"
      >
        <div className="absolute inset-0 opacity-[.17] [background-image:linear-gradient(rgba(145,200,190,.42)_1px,transparent_1px),linear-gradient(90deg,rgba(145,200,190,.42)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(90deg,transparent,black_38%,black_100%)]" />

        <div className={`relative z-[2] grid min-h-[560px] grid-cols-1 items-center gap-12 pt-20 lg:min-h-[750px] lg:grid-cols-[1.05fr_.95fr] lg:gap-[50px] lg:pt-[50px] ${pageWidth}`}>
          <div className="pt-9 lg:pt-0">
            <div className="flex max-w-[480px] animate-heroFadeIn items-start gap-2.5 font-mono text-[10px] uppercase leading-[1.65] tracking-[.14em] text-mint [animation-delay:.1s]">
              <span className="mt-1 h-px w-8 shrink-0 bg-current" /> A research and policy platform on infrastructure
              equity, federalism, governance, and sustainable nation-building.
            </div>
            <h1 className="my-[25px] max-w-[700px] animate-heroFadeIn text-[45px] font-medium leading-[.98] tracking-[-.055em] [animation-delay:.2s] lg:text-[82px]">
              Building the Nation
            </h1>
            <p className="mb-2.5 max-w-[420px] animate-heroFadeIn font-serif text-base italic leading-[1.4] text-mint [animation-delay:.35s] lg:text-lg">
              Infrastructure, Equity, and Federalism in Ethiopia
            </p>
            <p className="animate-heroFadeIn font-mono text-[11px] uppercase tracking-[.1em] text-white/70 [animation-delay:.45s]">
              Desalegn Ambaw (Ph.D.)
            </p>
            <p className="mt-4 max-w-[440px] animate-heroFadeIn text-[17px] leading-[1.65] text-white/75 [animation-delay:.55s]">
              How equitable infrastructure can strengthen governance, federalism, and nation-building in Ethiopia
            </p>
            <div className="mt-9 flex animate-heroFadeIn flex-wrap items-center gap-6 [animation-delay:.7s]">
              <a
                className="inline-flex items-center justify-center gap-3 bg-white px-[19px] py-[15px] text-[11px] uppercase tracking-[.08em] text-deep transition-all hover:-translate-y-1 hover:bg-mint hover:shadow-lg"
                href={bookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Buy the Book <ArrowRight size={17} />
              </a>
              <Link
                className="inline-flex items-center gap-2 border-b border-white pb-[7px] text-[11px] uppercase tracking-[.07em] text-white transition-all hover:gap-3.5"
                to="/book"
              >
                Explore the Book <ArrowDownRight size={17} />
              </Link>
            </div>
          </div>

          <div className="relative flex h-[300px] items-center justify-center animate-heroFadeIn [animation-delay:.4s] lg:h-[570px]">
            <div className="absolute h-[300px] w-[460px] -rotate-[28deg] rounded-full border border-mint/35" />
            <div className="absolute h-[380px] w-[480px] rotate-[53deg] rounded-full border border-mint/15" />
            <div className="absolute right-[9%] top-10 z-[3] flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.1em] text-mint lg:top-[65px]">
              <BookOpen size={15} /> Featured monograph
            </div>
            <div className="relative z-[2] w-[200px] rotate-[7deg] animate-float drop-shadow-[25px_32px_22px_rgba(0,0,0,.35)] transition-transform duration-500 hover:-translate-y-2.5 hover:rotate-[2deg] lg:w-[280px]">
              <img
                className="block w-full"
                src="/images/book-covers/cover-front.jpeg"
                alt="Building the Nation book cover"
              />
            </div>
            <div className="absolute bottom-6 left-[8%] right-[8%] flex justify-between border-t border-mint/40 pt-3 font-mono text-[10px] uppercase tracking-[.1em] text-white/60 lg:bottom-[57px]">
              <span className="text-mint">01</span>
              <span>Federalism · Equity · Governance</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-10 z-[3] hidden origin-left -rotate-90 items-center gap-3 font-mono text-[9px] uppercase tracking-[.1em] text-white/45 sm:flex">
          <span>Scroll to explore</span>
          <div className="h-px w-10 bg-mint" />
        </div>
      </section>

      {/* ===== SUMMARY ===== */}
      <section className={`bg-pearl ${sectionPad}`}>
        <div className={pageWidth}>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.35fr_.65fr] lg:gap-[110px]">
            <Reveal direction="left" className="max-w-[720px]">
              <p className="mb-[22px] text-lg leading-[1.6] text-deep sm:text-xl">
                Building the Nation: Infrastructure, Equity, and Federalism in Ethiopia examines how the distribution
                of public infrastructure shapes governance, development outcomes, and the broader nation-building
                process in one of Africa's most diverse federal states.
              </p>
              <p className="mb-[22px] text-[15px] leading-[1.85] text-[#58736d]">
                Combining political economy, federalism theory, spatial analysis, quantitative methods, and
                institutional analysis, the book introduces the Composite Infrastructure Index (CII) and
                Infrastructure Equity Index (IEI) as analytical tools for examining territorial disparities.
              </p>
              <p className="mb-[22px] text-[15px] leading-[1.85] text-[#58736d]">
                The central argument is that infrastructure equity—not merely investment volume or economic growth—is
                a decisive factor linking institutional capacity and governance quality to national cohesion.
              </p>
              <p className="mb-[22px] text-[15px] leading-[1.85] text-[#58736d]">
                The book examines roads, electricity, telecommunications, universities, airports, and industrial
                parks, demonstrating how disparities in infrastructure access can influence perceptions of fairness,
                political trust, regional development, and national cohesion.
              </p>
              <p className="mb-[22px] text-[15px] leading-[1.85] text-[#58736d]">
                The book concludes by moving beyond diagnosis toward practical policy solutions, including a framework
                for equitable infrastructure allocation and a sequenced reform roadmap for strengthening
                institutions, governance, and sustainable nation-building.
              </p>
            </Reveal>
            <Reveal
              direction="right"
              delay={150}
              className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"
            >
              <div className="font-mono text-[10px] uppercase tracking-[.12em] text-teal">Key themes</div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {[
                  'Federalism',
                  'Infrastructure',
                  'Equity',
                  'Governance',
                  'Institutional Capacity',
                  'Development',
                  'Nation-Building',
                  'Territorial Justice',
                  'Ethiopia',
                ].map((theme) => (
                  <span
                    key={theme}
                    className="border border-line px-3 py-2.5 font-mono text-[10px] uppercase tracking-[.05em] text-[#52716a] transition-all hover:-translate-y-0.5 hover:border-teal hover:text-deep"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FRAMEWORK ===== */}
      <section className={`bg-deep text-white ${sectionPad}`} id="framework">
        <div className={pageWidth}>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <div className={`${sectionKicker} text-mint`}>
                  Why this book matters <span className="opacity-55">02</span>
                </div>
                <h2 className={`mt-8 ${heading2}`}>Infrastructure → Equity → Governance → Nation-Building</h2>
              </div>
              <p className="max-w-[285px] text-[13px] leading-[1.7] text-[#91b7ae]">
                The analytical framework connects four essential stages.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[90px]">
            <Reveal direction="left" className="grid gap-2.5">
              {framework.map((item, index) => {
                const Icon = item.icon;
                const selected = activeFramework === index;
                return (
                  <button
                    className={`flex items-center gap-[17px] border p-[18px_17px] text-left transition-all hover:-translate-x-0 hover:translate-x-[7px] hover:bg-mint-deep/[.23] hover:border-mint-deep hover:shadow-lg ${
                      selected ? 'translate-x-[7px] border-mint-deep bg-mint-deep/[.23] shadow-lg' : 'border-mint/[.16] bg-white/5'
                    }`}
                    key={item.number}
                    onClick={() => setActiveFramework(index)}
                  >
                    <span className="font-mono text-[11px] text-mint">{item.number}</span>
                    <span className="grid h-[34px] w-[34px] place-items-center bg-mint/[.11] text-mint">
                      <Icon size={18} />
                    </span>
                    <span className="grid gap-[5px]">
                      <strong className="text-sm font-semibold">{item.title}</strong>
                      <small className="text-[11px] text-[#9dc4bc]">{item.short}</small>
                    </span>
                    <ChevronRight className="ml-auto text-white/50" size={18} />
                  </button>
                );
              })}
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div
                key={activeFramework}
                className="relative min-h-[280px] animate-detailFade border border-mint/25 bg-deep-2 p-6 lg:min-h-[330px] lg:p-[29px_32px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-mint">{activePillar.number}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[.12em] text-[#72ada0]">Diagnostic lens</span>
                </div>
                <h3 className="mb-4 mt-10 text-[26px] font-medium leading-[1.1] lg:mt-[55px] lg:text-[30px]">
                  {activePillar.title}
                </h3>
                <p className="max-w-[385px] text-[13px] leading-[1.7] text-[#a1c6be]">{activePillar.description}</p>
                <div className="mt-7 font-mono text-[10px] uppercase tracking-[.12em] text-mint">Key indicators</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activePillar.indicators.map((indicator: string) => (
                    <span key={indicator} className="inline-flex items-center gap-1.5 text-[11px] text-[#d0e6e1] before:content-['•'] before:text-mint before:mr-1">
                      {indicator}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3 border-t border-mint/[.18] pt-4 font-mono text-[8px] uppercase text-[#8eb9b0] sm:justify-between sm:text-[10px] lg:mt-[78px]">
              <span>Institutional Capacity</span>
              <ArrowRight className="text-teal" />
              <span>Governance Quality</span>
              <ArrowRight className="text-teal" />
              <span>Infrastructure Equity</span>
              <ArrowRight className="text-teal" />
              <span>Nation-Building</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section className={`bg-white ${sectionPad}`}>
        <div className={pageWidth}>
          <Reveal>
            <div className="flex items-start justify-between gap-8">
              <div>
                <div className={sectionKicker}>
                  Who this is for <span className="opacity-55">03</span>
                </div>
                <h2 className={`mt-7 ${heading2}`}>
                  Intended for scholars, policymakers, development practitioners, government officials, researchers,
                  and students.
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-1 border-b border-line sm:grid-cols-3 lg:mt-[67px]">
              {audiences.map((audience, index) => {
                const active = activeAudience === index;
                return (
                  <button
                    className={`flex items-center gap-[17px] border-b border-t-2 border-line px-3.5 py-[18px] text-left text-[13px] text-[#78928d] transition-all hover:bg-pearl sm:border-b-0 ${
                      active ? 'border-l-2 border-t-teal text-deep sm:border-l-0' : 'border-t-transparent'
                    }`}
                    onClick={() => setActiveAudience(index)}
                    key={audience.title}
                  >
                    <span className={`font-mono text-[10px] ${active ? 'text-teal' : 'text-[#b4cbc5]'}`}>0{index + 1}</span>
                    {audience.title}
                    <ChevronRight className="ml-auto" size={15} />
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div
            key={activeAudience}
            className="relative mt-7 grid animate-detailFade grid-cols-[6px_55px_1fr] items-center gap-5 overflow-hidden border border-line shadow-[12px_14px_0_#edf5f3] lg:grid-cols-[6px_75px_1fr_1fr] lg:gap-8"
          >
            <div className="self-stretch bg-teal" />
            <div className="grid h-[57px] w-[57px] place-items-center bg-[#dceeea] text-teal">
              <activeAudienceData.icon size={27} />
            </div>
            <div className="py-8 pr-5 lg:pr-0">
              <div className="mb-4 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[.14em] text-teal">
                {activeAudienceData.label}
              </div>
              <h3 className="mb-3 text-2xl font-medium tracking-[-.04em] lg:text-[29px]">{activeAudienceData.title}</h3>
              <p className="mb-[22px] max-w-[390px] text-sm leading-[1.8] text-[#58736d]">{activeAudienceData.description}</p>
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-4 border-t border-line p-5 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:p-[27px_42px]">
              {activeAudienceData.items.map((item: string) => (
                <span key={item} className="flex items-center gap-3 text-xs text-[#52716a]">
                  <ChevronRight className="text-teal" size={14} /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOK FEATURE ===== */}
      <section
        className={`relative bg-deep text-white after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(90deg,transparent_48%,rgba(56,156,142,.1))] after:content-[''] ${sectionPad}`}
        id="purchase"
      >
        <div className={`relative z-[1] grid grid-cols-1 items-center gap-14 lg:grid-cols-[.83fr_1.17fr] lg:gap-[100px] ${pageWidth}`}>
          <Reveal direction="left" className="relative mx-auto max-w-[390px] after:absolute after:-inset-y-[18px] after:-right-[18px] after:left-[19px] after:-z-10 after:border after:border-mint/40 after:content-['']">
            <img
              className="block w-full shadow-[17px_22px_30px_rgba(0,0,0,.3)]"
              src="/images/book-previews/SM_Image_Square_978-3-032-25701-7_(1).png"
              alt="Building the Nation preview"
            />
            <span className="absolute -right-[25px] -top-6 grid h-[69px] w-[69px] rotate-[12deg] place-items-center rounded-full bg-mint text-center font-mono text-[9px] uppercase leading-[1.2] text-deep">
              New
              <br />
              release
            </span>
          </Reveal>

          <Reveal direction="right" delay={150} className="max-w-[590px]">
            <div className={`${sectionKicker} text-mint`}>
              Buy / Access the Book <span className="opacity-55">04</span>
            </div>
            <h2 className="mt-8 font-serif text-[42px] font-semibold tracking-[-.04em] lg:text-[66px]">Building the Nation</h2>
            <p className="my-2.5 mb-6 text-[17px] leading-[1.45] text-mint">Infrastructure, Equity, and Federalism in Ethiopia</p>
            <p className="max-w-[510px] text-sm leading-[1.75] text-[#a3c7bf]">Available from:</p>
            <div className="mt-3 flex flex-col gap-1">
              <a
                className="inline-flex items-center gap-1.5 py-1 text-[13px] text-[#a3c7bf] hover:text-mint"
                href={bookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Springer Nature / Palgrave Macmillan <ExternalLink size={14} />
              </a>
              <a
                className="inline-flex items-center gap-1.5 py-1 text-[13px] text-[#a3c7bf] hover:text-mint"
                href={bookUrl}
                target="_blank"
                rel="noreferrer"
              >
                SpringerLink <ExternalLink size={14} />
              </a>
              <span className="py-1 text-[13px] text-[#a3c7bf]">Amazon — if/when an official listing is available</span>
              <span className="py-1 text-[13px] text-[#a3c7bf]">Other international academic booksellers</span>
            </div>
            <a
              className="mt-[29px] inline-flex items-center justify-center gap-3 bg-mint px-[19px] py-[15px] text-[11px] uppercase tracking-[.08em] text-deep transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              href={bookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Buy the Book <ExternalLink size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}