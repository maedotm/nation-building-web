'use client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Clipboard, Check, ExternalLink, Quote } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import Reveal from '@/app/components/Reveal';
import { framework, contributions, toc, endorsements, bookUrl, citation } from '@/app/data';
import { pageWidth, sectionPad, sectionKicker, heading2 } from '@/app/styles';

export default function Book() {
  const [activeFramework, setActiveFramework] = useState(2);
  const [openChapter, setOpenChapter] = useState<string | null>(null);
  const [citationCopied, setCitationCopied] = useState(false);
  const activePillar = framework[activeFramework];

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(citation);
    } catch {
      /* clipboard unavailable */
    }
    setCitationCopied(true);
    window.setTimeout(() => setCitationCopied(false), 2400);
  };

  return (
    <>
      <PageHeader
        eyebrow="About the Book"
        number="01"
        title="About the Book"
        subtitle="Building the Nation: Infrastructure, Equity, and Federalism in Ethiopia"
        onDark
      />

      {/* One-time keyframes for the 3D book flip. Plain <style> tag — no extra
          dependency or styled-jsx required. */}
      <style>{`
        @keyframes bookFlip {
          0%, 12%   { transform: rotateY(0deg); }
          50%, 62%  { transform: rotateY(180deg); }
          100%      { transform: rotateY(0deg); }
        }
      `}</style>

      {/* ===== ABOUT THE BOOK ===== */}
      <section className={sectionPad} id="about-book">
        <div className={pageWidth}>
          <Reveal>
            <div className={sectionKicker}>The development paradox</div>
          </Reveal>
          <div className="mt-11 grid grid-cols-1 items-start gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-[100px]">
            <Reveal direction="left" className="sticky top-[110px] mx-auto max-w-[380px] self-start">
              {/* ===== 3D FLIPPING BOOK COVER ===== */}
              <div className="mx-auto w-full max-w-[340px] [perspective:1600px]">
                <div
                  className="relative aspect-[340/00] w-full [transform-style:preserve-3d]"
                  style={{ animation: 'bookFlip 7s ease-in-out infinite' }}
                >
                  {/* FRONT FACE — right-hand portion of the wrap image */}
                  <div
                    className="absolute inset-0 rounded-sm shadow-[17px_22px_30px_rgba(0,0,0,.25)] [backface-visibility:hidden]"
                    style={{
                      backgroundImage: "url('/images/book-covers/image.png')",
                      backgroundSize: '230% 100%',
                      backgroundPosition: 'right center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  {/* BACK FACE — left-hand portion of the wrap image, pre-rotated
                      180deg so it only becomes visible once the flip passes 90deg */}
                  <div
                    className="absolute inset-0 rounded-sm shadow-[17px_22px_30px_rgba(0,0,0,.25)] [backface-visibility:hidden]"
                    style={{
                      transform: 'rotateY(180deg)',
                      backgroundImage: "url('/images/book-covers/image.png')",
                      backgroundSize: '230% 100%',
                      backgroundPosition: 'left center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </div>
              </div>

              <a
                className="mt-[22px] inline-flex w-full items-center justify-center gap-3 bg-mint px-[19px] py-[15px] text-[11px] uppercase tracking-[.08em] text-deep transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                href={bookUrl}
                target="_blank"
                rel="noreferrer"
              >
                Buy the Book <ExternalLink size={16} />
              </a>
            </Reveal>

            <Reveal direction="right" delay={120} className="max-w-[730px]">
              <p className="mb-[22px] text-xl leading-[1.6] text-deep">
                Ethiopia presents a striking development paradox: substantial expansion of roads, electricity,
                telecommunications, universities, airports, and industrial parks has occurred alongside persistent
                regional disparities and political fragility.
              </p>
              <p className="mb-[22px] text-sm leading-[1.8] text-[#58736d]">
                Building the Nation investigates this paradox through a central question:
              </p>
              <h3 className="my-7 border-l-[3px] border-teal pl-[22px] font-serif text-2xl italic leading-[1.4] text-deep lg:text-[26px]">
                Why can rapid infrastructure development coexist with political fragmentation and weakened national
                cohesion?
              </h3>
              <p className="mb-[22px] text-sm leading-[1.8] text-[#58736d]">
                The book argues that the answer cannot be found simply by examining the volume of investment. How
                infrastructure is distributed—and whether citizens and regional states perceive that distribution as
                fair—is equally important.
              </p>
              <p className="mb-[22px] text-sm leading-[1.8] text-[#58736d]">
                The analytical framework developed in the book connects three foundational pillars:
              </p>
              <div className="my-[22px] border border-line bg-[#edf6f4] p-4 px-5 font-mono text-[11px] uppercase tracking-[.05em] text-teal">
                Institutional Capacity → Governance Quality → Infrastructure Equity → Nation-Building
              </div>
              <p className="mb-[22px] text-sm leading-[1.8] text-[#58736d]">
                Institutional capacity determines whether governments can effectively plan, coordinate, and deliver
                infrastructure. Governance quality determines whether decisions are transparent, accountable, and
                responsive to differentiated regional needs. Infrastructure equity represents the resulting
                distributive outcome and serves as the critical bridge between state functionality and national
                cohesion.
              </p>
              <p className="mb-[22px] text-sm leading-[1.8] text-[#58736d]">
                The book combines quantitative and qualitative approaches, including the Composite Infrastructure
                Index (CII), Infrastructure Equity Index (IEI), spatial analysis, and structural equation modelling,
                together with interviews and focus group discussions.
              </p>
              <p className="mb-[22px] text-sm leading-[1.8] text-[#58736d]">
                Rather than treating infrastructure merely as physical capital, the book presents it as a material
                and symbolic expression of state fairness. Equitable infrastructure can strengthen trust, legitimacy,
                opportunity, and belonging; persistent inequity can reinforce perceptions of exclusion and regional
                grievance.
              </p>
              <p className="mb-[22px] text-sm leading-[1.8] text-[#58736d]">
                The book therefore makes a broader contribution to debates on federalism, development, infrastructure
                governance, territorial equity, and nation-building in diverse states.
              </p>
              <p className="mb-[22px] text-sm leading-[1.8] text-[#58736d]">
                It is intended for scholars, policymakers, development practitioners, government officials,
                researchers, and students interested in federal governance, equitable development, infrastructure
                policy, and state- and nation-building.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FRAMEWORK ===== */}
      <section className={`bg-deep text-white ${sectionPad}`} id="why-matters">
        <div className={pageWidth}>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <div className={`${sectionKicker} text-mint`}>Why this book matters</div>
                <h2 className={`mt-8 ${heading2}`}>Infrastructure → Equity → Governance → Nation-Building</h2>
              </div>
              <p className="max-w-[285px] text-[13px] leading-[1.7] text-[#91b7ae]">Explore the analytical framework.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[90px]">
            <Reveal direction="left" className="grid gap-2.5">
              {framework.map((item, index) => {
                const Icon = item.icon;
                const selected = activeFramework === index;
                return (
                  <button
                    className={`flex items-center gap-[17px] border p-[18px_17px] text-left transition-all hover:translate-x-[7px] hover:bg-mint-deep/[.23] hover:border-mint-deep hover:shadow-lg ${
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
                    <ChevronDown className="ml-auto text-white/50" size={18} />
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
                  {activePillar.indicators.map((indicator) => (
                    <span key={indicator} className="inline-flex items-center gap-1.5 text-[11px] text-[#d0e6e1] before:content-['•'] before:text-mint before:mr-1">
                      {indicator}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== KEY CONTRIBUTIONS ===== */}
      <section className={`bg-white ${sectionPad}`} id="contributions">
        <div className={pageWidth}>
          <Reveal>
            <div className={sectionKicker}>Key Contributions</div>
            <h2 className={`mb-[52px] mt-7 ${heading2}`}>Key Contributions of the Book</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {contributions.map((c, i) => (
              <Reveal
                key={c.number}
                delay={i * 80}
                direction="up"
                className="bg-white p-[30px_26px] transition-colors hover:bg-pearl lg:p-[36px_30px]"
              >
                <span className="font-mono text-[11px] text-teal">{c.number}</span>
                <h3 className="my-4 text-lg font-semibold tracking-[-.02em]">{c.title}</h3>
                <p className="text-[13px] leading-[1.65] text-[#66847c]">{c.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TABLE OF CONTENTS ===== */}
      <section className={`bg-white ${sectionPad}`} id="contents">
        <div className={pageWidth}>
          <Reveal>
            <div className={sectionKicker}>Table of Contents</div>
            <h2 className={`mb-[52px] mt-7 ${heading2}`}>Table of Contents</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mb-[50px]">
              <div className="flex items-center justify-between gap-[18px] bg-[#edf6f4] p-[17px]">
                <div className="grid gap-2 overflow-hidden">
                  <span className="font-mono text-[9px] uppercase tracking-[.13em] text-teal">Cite this book</span>
                  <code className="overflow-hidden text-ellipsis whitespace-nowrap text-[10px] text-[#53736c]">
                    Ambaw, D. (2026). Building the Nation...
                  </code>
                </div>
                <button
                  className="grid h-[33px] w-[33px] shrink-0 place-items-center bg-deep text-mint"
                  onClick={copyCitation}
                  aria-label="Copy citation"
                >
                  {citationCopied ? <Check size={17} /> : <Clipboard size={17} />}
                </button>
              </div>
              {citationCopied && <div className="mt-[11px] font-mono text-[10px] text-teal">Citation copied to clipboard</div>}
            </div>
          </Reveal>

          <div className="border-t border-line">
            {toc.map((part, pi) => (
              <Reveal key={part.part} delay={pi * 100} direction="up" className="border-b border-line">
                <div className="flex items-baseline gap-5 pb-2.5 pt-6">
                  <span className="min-w-[70px] font-mono text-[11px] uppercase text-teal">{part.part}</span>
                  <span className="text-sm font-semibold text-deep">{part.partTitle}</span>
                </div>
                <div>
                  {part.chapters.map((ch) => {
                    const key = `${part.part}-${ch.number}`;
                    const open = openChapter === key;
                    return (
                      <div className="border-b-0" key={key}>
                        <button
                          className={`flex w-full items-center gap-5 py-3.5 pl-0 text-left transition-all hover:pl-1.5 sm:pl-[90px] sm:hover:pl-[96px] ${
                            open ? 'text-teal' : 'text-deep'
                          }`}
                          onClick={() => setOpenChapter(open ? null : key)}
                        >
                          <span className="text-[10px] font-normal text-[#78928d]">{ch.number}</span>
                          <strong className={`text-[13px] font-semibold ${open ? 'text-teal' : ''}`}>{ch.title}</strong>
                          <ChevronDown size={17} className={`ml-auto transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
            <Reveal direction="up" className="flex gap-8 py-[22px] font-mono text-[11px] uppercase text-teal">
              <span>Appendices</span>
              <span>Index</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className={`bg-deep text-white ${sectionPad}`} id="reviews">
        <div className={pageWidth}>
          <Reveal>
            <div className={`${sectionKicker} text-mint`}>Endorsements &amp; Reviews</div>
            <h2 className={`mb-[52px] mt-7 ${heading2}`}>What Scholars and Practitioners Are Saying</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {endorsements.map((e, i) => (
              <Reveal
                key={i}
                delay={i * 120}
                direction="up"
                className="min-h-[215px] border border-mint/20 bg-white/5 p-7 transition-all hover:-translate-y-[5px] hover:border-mint/50 hover:bg-white/[.08]"
              >
                <Quote size={28} className="text-mint" />
                <blockquote className="my-[25px] font-serif text-[19px] italic leading-[1.5] text-[#d2e5e0]">
                  "{e.quote}"
                </blockquote>
                <div className="font-mono text-[10px] uppercase text-[#85b2a8]">— {e.author}</div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-[58px] border-t border-mint/20 pt-[27px] text-[#a3c7bf]">
              <h3 className="mb-3 text-xl text-white">Reviews</h3>
              <p className="mb-4 text-[13px] leading-[1.7]">
                Academic and professional reviews of Building the Nation will be featured here as they become
                available.
              </p>
              <p className="mt-[25px] text-[13px] leading-[1.7] text-mint">
                Are you a scholar, policymaker, or development practitioner who has read the book?
              </p>
              <Link
                className="mt-[25px] inline-flex items-center gap-2 border-b border-current pb-[7px] text-[11px] uppercase tracking-[.07em] text-white transition-all hover:gap-3.5"
                to="/contact"
              >
                Submit a review / Contact the author <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PURCHASE ===== */}
      <section className={`bg-[#edf5f3] ${sectionPad}`} id="buy">
        <div className={`grid grid-cols-1 items-start gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 ${pageWidth}`}>
          <Reveal direction="left">
            <div className={sectionKicker}>Purchase / Access the Book</div>
            <h2 className={`mt-7 ${heading2}`}>Buy the Book</h2>
            <p className="mt-6 max-w-[390px] text-sm leading-[1.7] text-[#58736d]">
              Because the book is published by Palgrave Macmillan / Springer Nature, the primary purchase button
              directs you to the official Springer book page.
            </p>
            <a
              className="mt-[26px] inline-flex items-center justify-center gap-3 bg-deep px-[19px] py-[15px] text-[11px] uppercase tracking-[.08em] text-white transition-all hover:-translate-y-1 hover:bg-teal hover:shadow-lg"
              href={bookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Buy the Book <ExternalLink size={18} />
            </a>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <div className="font-mono text-[10px] uppercase tracking-[.12em] text-teal">Available from:</div>
            <div className="mt-[22px] border-t border-line">
              <a
                className="flex items-center justify-between gap-5 border-b border-line py-[18px] text-[13px] text-deep transition-all hover:pl-2"
                href={bookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>Springer Nature / Palgrave Macmillan</span> <ExternalLink className="shrink-0 text-teal" size={15} />
              </a>
              <a
                className="flex items-center justify-between gap-5 border-b border-line py-[18px] text-[13px] text-deep transition-all hover:pl-2"
                href={bookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>SpringerLink</span> <ExternalLink className="shrink-0 text-teal" size={15} />
              </a>
              <span className="flex items-center justify-between gap-5 border-b border-line py-[18px] text-[13px] text-[#78928d]">
                Amazon — if/when an official listing is available
              </span>
              <span className="flex items-center justify-between gap-5 border-b border-line py-[18px] text-[13px] text-[#78928d]">
                Other international academic booksellers
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}