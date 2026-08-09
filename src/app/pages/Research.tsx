'use client';
import { ExternalLink } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import Reveal from '@/app/components/Reveal';
import { journalOutlets, mediaLinks, researchInterests } from '@/app/data';
import { pageWidth, sectionPad, sectionKicker, heading2 } from '@/app/styles';

export default function Research() {
  return (
    <>
      <PageHeader eyebrow="Resources" number="03" title="Author's Research & Professional Profile" subtitle="Connect With the Author" />

      {/* ===== INTRO ===== */}
      <section className={sectionPad}>
        <div className={`grid grid-cols-1 items-end gap-14 lg:grid-cols-2 lg:gap-[100px] ${pageWidth}`}>
          <Reveal direction="left">
            <div className={sectionKicker}>Connect With the Author</div>
            <h2 className={`mt-7 ${heading2}`}>Desalegn Ambaw (Ph.D.)</h2>
            <p className="mt-5 font-mono text-[11px] uppercase leading-[1.7] tracking-[.07em] text-teal">
              Scholar · Public Policy Expert · Governance Specialist · Senior Public Executive
            </p>
          </Reveal>
          <Reveal direction="right" delay={150}>
            <p className="text-lg leading-[1.55] sm:text-xl">
              Dr. Desalegn Ambaw's work focuses on the intersection of federalism, governance, infrastructure equity,
              institutional capacity, public policy, and nation-building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== RESEARCH INTERESTS ===== */}
      <section className={`bg-[#edf5f3] ${sectionPad}`}>
        <div className={pageWidth}>
          <Reveal>
            <div className={sectionKicker}>Research Interests</div>
            <h2 className={`mb-10 mt-7 ${heading2}`}>Research Interests</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2.5">
              {researchInterests.map((interest: string) => (
                <span
                  key={interest}
                  className="inline-flex items-center gap-2 border border-line bg-white px-4 py-[11px] text-xs text-[#4c7067] transition-all hover:-translate-y-0.5 hover:border-teal hover:text-deep"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== ACADEMIC PROFILE ===== */}
      <section className={`bg-white ${sectionPad}`}>
        <div className={pageWidth}>
          <Reveal>
            <div className={sectionKicker}>Academic Profile</div>
            <h2 className={`mb-[50px] mt-7 ${heading2}`}>Academic Profile</h2>
          </Reveal>
          <div className="mt-[45px] border-t border-line">
            <Reveal
              direction="up"
              delay={0}
              className="grid grid-cols-[26px_1fr_auto] items-start gap-[10px] border-b border-line py-[22px] text-xs leading-[1.7] text-[#52716a] transition-all hover:pl-2 hover:text-deep sm:grid-cols-[35px_1fr_auto] sm:gap-[18px] sm:text-[13px]"
            >
              <span className="font-mono text-[11px] text-teal">1.</span>
              <span>
                My Palgrave Macmillan book (Building the Nation: Infrastructure, Equity, and Federalism in Ethiopia,
                published by Springer Nature/ Palgrave Macmillan
              </span>
              <ExternalLink size={16} />
            </Reveal>
            <Reveal
              direction="up"
              delay={80}
              className="grid grid-cols-[26px_1fr_auto] items-start gap-[10px] border-b border-line py-[22px] text-xs leading-[1.7] text-[#52716a] transition-all hover:pl-2 hover:text-deep sm:grid-cols-[35px_1fr_auto] sm:gap-[18px] sm:text-[13px]"
            >
              <span className="font-mono text-[11px] text-teal">2.</span>
              <span>Google Scholar profile (Scholar of Governance, Federalism, Infrastructure Policy and Inclusive Development).</span>
              <ExternalLink size={16} />
            </Reveal>
            <Reveal
              direction="up"
              delay={160}
              className="grid grid-cols-[26px_1fr_auto] items-start gap-[10px] border-b border-line py-[22px] text-xs leading-[1.7] text-[#52716a] transition-all hover:pl-2 hover:text-deep sm:grid-cols-[35px_1fr_auto] sm:gap-[18px] sm:text-[13px]"
            >
              <span className="font-mono text-[11px] text-teal">3.</span>
              <span>ORCID profile (https://orcid.org/0000-0003-2152-0366).</span>
              <ExternalLink size={16} />
            </Reveal>
            <Reveal
              direction="up"
              delay={240}
              className="grid grid-cols-[26px_1fr_auto] items-start gap-[10px] border-b border-line py-[22px] text-xs leading-[1.7] text-[#52716a] transition-all hover:pl-2 hover:text-deep sm:grid-cols-[35px_1fr_auto] sm:gap-[18px] sm:text-[13px]"
            >
              <span className="font-mono text-[11px] text-teal">4.</span>
              <span>ResearchGate profile (https://www.researchgate.net/scientific-contributions/Ambaw-Desalegn-2195330478).</span>
              <ExternalLink size={16} />
            </Reveal>
            <Reveal
              direction="up"
              delay={320}
              className="grid grid-cols-[26px_1fr] items-start gap-[10px] border-b border-line py-[22px] text-xs leading-[1.7] text-[#52716a] sm:grid-cols-[35px_1fr] sm:gap-[18px] sm:text-[13px]"
            >
              <span className="font-mono text-[11px] text-teal">5.</span>
              <span>
                Selected journal article: published multiple peer-reviewed articles in leading international journals.
                <br />
                <strong className="font-semibold text-deep">Published in journals including:</strong>
                <br />
                {journalOutlets.map((outlet: string) => (
                  <span className="text-[#66847c]" key={outlet}>
                    • {outlet}
                    <br />
                  </span>
                ))}
              </span>
            </Reveal>
            <Reveal
              direction="up"
              delay={400}
              className="grid grid-cols-[26px_1fr] items-start gap-[10px] border-b border-line py-[22px] text-xs leading-[1.7] text-[#52716a] sm:grid-cols-[35px_1fr] sm:gap-[18px] sm:text-[13px]"
            >
              <span className="font-mono text-[11px] text-teal">6.</span>
              <span>Professional interview or keynote presentation</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MEDIA / RESOURCES ===== */}
      <section className={`bg-[#edf5f3] ${sectionPad}`}>
        <div className={pageWidth}>
          <Reveal>
            <div className={sectionKicker}>Professional interview or keynote presentation</div>
            <h2 className={`mb-[50px] mt-7 ${heading2}`}>Professional interview or keynote presentation</h2>
          </Reveal>
          <div className="mt-[45px] border-t border-line">
            {mediaLinks.map((item: any, i: number) => (
              <Reveal key={item.url} delay={i * 80} direction="up">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-between gap-5 border-b border-line py-[18px] text-[13px] text-[#52716a] transition-all hover:pl-2 hover:text-deep"
                >
                  <span>
                    {item.source}: {item.title}
                  </span>
                  <ExternalLink className="shrink-0 text-teal" size={16} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}