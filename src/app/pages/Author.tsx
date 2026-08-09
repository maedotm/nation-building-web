'use client';
import PageHeader from '@/app/components/PageHeader';
import Reveal from '@/app/components/Reveal';
import { pageWidth, sectionPad, sectionKicker } from '@/app/styles';
import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function Author() {
  const [showAuthorCard, setShowAuthorCard] = useState(false);
  const linkedinUrl = 'https://www.linkedin.com/in/desalegn-ambaw-006bab213/';
  const twitterUrl = 'https://twitter.com/AmbawDesalegne';
  const facebookUrl = 'https://www.facebook.com/desalegne.ambaw.35';
  const whatsappUrl = 'https://wa.me/251911523701';

  return (
    <>
      <PageHeader eyebrow="About the Author" number="02" title="About the Author" subtitle="Desalegn Ambaw (Ph.D.)" />

      <section className={sectionPad}>
        <div className={`grid grid-cols-1 items-start gap-14 lg:grid-cols-[.83fr_1.17fr] lg:gap-[100px] ${pageWidth}`}>
          <Reveal
            direction="left"
            className="relative flex h-[330px] items-center justify-center lg:h-[410px]"
          >
            {!showAuthorCard ? (
              /* ===== COLLAPSED: offset ring + circular photo ===== */
              <button
                onClick={() => setShowAuthorCard(true)}
                className="relative"
                aria-label="Show author info"
              >
                <div className="absolute h-[260px] w-[260px] translate-x-3 translate-y-3 rounded-full border border-mint lg:h-[320px] lg:w-[320px]" />
                <img
                  src="/images/Authors/image.png"
                  alt="Desalegn Ambaw"
                  className="relative h-[250px] w-[250px] rounded-full border-[3px] border-white object-cover shadow-[0_10px_25px_rgba(9,76,67,.25)] lg:h-[310px] lg:w-[310px]"
                />
              </button>
            ) : (
              /* ===== EXPANDED: card laid out top-to-bottom, no overlap ===== */
              <div className="relative flex h-[380px] w-[280px] flex-col rounded-2xl bg-teal p-5 shadow-[0_10px_25px_rgba(9,76,67,.25)] lg:h-[430px] lg:w-[320px] lg:p-6">
                <div
                  className="absolute right-4 top-4 z-[1] flex items-center gap-2.5"
                >
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white text-deep transition-transform hover:scale-110 hover:bg-mint"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white text-deep transition-transform hover:scale-110 hover:bg-mint"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white text-deep transition-transform hover:scale-110 hover:bg-mint"
                  >
                    <FaFacebookF size={14} />
                  </a>
                </div>
                <button
                  onClick={() => setShowAuthorCard(false)}
                  aria-label="Hide author info"
                  className="absolute right-4 top-4 -z-[1] h-8 w-8"
                />

                <img
                  src="/images/Authors/image.png"
                  alt="Desalegn Ambaw"
                  className="mx-auto mt-8 h-[130px] w-[130px] shrink-0 rounded-full border-[3px] border-white object-cover shadow-[0_6px_16px_rgba(9,76,67,.3)] lg:h-[150px] lg:w-[150px]"
                />

                <div className="mt-5 flex flex-col items-center gap-1.5 text-center">
                  <span className="text-lg font-semibold leading-tight text-white">Desalegn Ambaw, Ph.D.</span>
                  <span className="font-mono text-[10px] uppercase tracking-[.1em] text-mint">Addis Ababa, Ethiopia</span>
                  <span className="mt-2 font-mono text-[9px] uppercase leading-[1.7] text-white/75">
                    Scholar · Public Policy Expert
                    <br />
                    Governance Specialist · Senior Public Executive
                  </span>
                </div>

                <div className="mt-auto flex gap-3 pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    className="flex-1 rounded-md bg-white py-2.5 text-center text-[11px] font-semibold uppercase tracking-[.05em] text-deep transition-all hover:-translate-y-0.5 hover:bg-mint hover:text-white"
                  >
                    Message
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-md bg-white py-2.5 text-center text-[11px] font-semibold uppercase tracking-[.05em] text-deep transition-all hover:-translate-y-0.5 hover:bg-mint hover:text-white"
                  >
                    Follow
                  </a>
                </div>
              </div>
            )}
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className={sectionKicker}>Profile</div>
            <p className="mb-[22px] mt-5 text-xl leading-[1.55]">
              Desalegn Ambaw is a scholar of federalism, governance, and development policy, specializing in Ethiopia's
              institutional transformation and nation-building processes.
            </p>
            <p className="mb-[25px] text-sm leading-[1.8] text-[#58736d]">
              He earned his Ph.D. from the Center for Federalism and Governance Studies at Addis Ababa University and
              holds an MBA from the Open University (UK).
            </p>
            <p className="mb-[25px] text-sm leading-[1.8] text-[#58736d]">
              Dr. Ambaw has served in several senior leadership positions within the Ethiopian government, including
              Chief Executive Officer of the Ethiopian Deposit Insurance Fund, Executive Director of the Institute of
              Foreign Affairs, State Minister of Transport, and State Minister of Urban Development and Construction.
            </p>
            <p className="mb-[25px] text-sm leading-[1.8] text-[#58736d]">
              His professional career has provided extensive insight into the interaction between federal institutions,
              development planning, infrastructure governance, and territorial equity. He has published research on
              federalism, infrastructure governance, institutional capacity, and inclusive development and has
              contributed to national policy dialogues on state-building and social cohesion.
            </p>
            <p className="mb-[25px] text-sm leading-[1.8] text-[#58736d]">
              His research and professional interests include federalism, governance, infrastructure equity,
              institutional capacity, public policy, financial-sector governance, inclusive development, and
              nation-building.
            </p>
            <p className="mb-[25px] text-sm leading-[1.8] text-[#58736d]">
              Building the Nation: Infrastructure, Equity, and Federalism in Ethiopia reflects his long-standing
              engagement with Ethiopia's developmental and institutional challenges and presents an integrated
              analytical framework for advancing equitable and sustainable nation-building.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}