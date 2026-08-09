'use client';
import { useState } from 'react';
import { Check, Mail, Send } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import Reveal from '@/app/components/Reveal';
import { pageWidth, sectionPad, sectionKicker, heading2 } from '@/app/styles';

const inputClass =
  'border-0 border-b border-[#bcd1cc] bg-transparent py-[11px] text-[13px] text-deep outline-none placeholder:text-[#9db5af] focus:border-teal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        number="06"
        title="Contact & inquiries"
        subtitle="Keynote speeches, academic reviews, policy consultations & media inquiries."
      />

      <section className={sectionPad}>
        <div className={`grid grid-cols-1 gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-[130px] ${pageWidth}`}>
          <Reveal direction="left">
            <div className={sectionKicker}>Start a conversation</div>
            <h2 className={`mb-5 mt-[30px] ${heading2}`}>
              Bring the research
              <br />
              into the room.
            </h2>
            <p className="max-w-[355px] text-sm leading-[1.8] text-[#58736d]">
              For academic reviews, keynote invitations, policy consultations, media inquiries, and institutional
              access.
            </p>
            <div className="mt-[46px] flex items-start gap-[13px] text-teal">
              <Mail size={18} />
              <span className="font-mono text-[10px] uppercase leading-[1.7] text-[#67857d]">
                For enquiries
                <br />
                <strong className="text-[11px] normal-case text-deep">connect@buildingthenation.org</strong>
              </span>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <form
              className="grid grid-cols-1 gap-x-[18px] gap-y-[21px] pt-2 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="grid gap-[9px] font-mono text-[9px] uppercase tracking-[.1em] text-teal">
                Full name
                <input className={inputClass} required placeholder="Your name" />
              </label>
              <label className="grid gap-[9px] font-mono text-[9px] uppercase tracking-[.1em] text-teal">
                Email address
                <input className={inputClass} required type="email" placeholder="you@institution.org" />
              </label>
              <label className="grid gap-[9px] font-mono text-[9px] uppercase tracking-[.1em] text-teal">
                Professional / academic affiliation
                <input className={inputClass} placeholder="Your institution" />
              </label>
              <label className="grid gap-[9px] font-mono text-[9px] uppercase tracking-[.1em] text-teal">
                Inquiry type
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select an inquiry
                  </option>
                  <option>Academic review</option>
                  <option>Keynote / guest lecture</option>
                  <option>Policy consultation</option>
                  <option>Media / interview</option>
                  <option>General inquiry</option>
                </select>
              </label>
              <label className="col-span-full grid gap-[9px] font-mono text-[9px] uppercase tracking-[.1em] text-teal">
                Message
                <textarea className={`${inputClass} resize-y`} required placeholder="Tell us a little about your enquiry" rows={4} />
              </label>
              <button
                className="col-span-full mt-[9px] inline-flex w-fit items-center justify-center gap-3 bg-deep px-[19px] py-[15px] text-[11px] uppercase tracking-[.08em] text-white transition-all hover:-translate-y-1 hover:bg-teal hover:shadow-lg"
                type="submit"
              >
                {submitted ? (
                  <>
                    Message received <Check size={17} />
                  </>
                ) : (
                  <>
                    Send enquiry <Send size={16} />
                  </>
                )}
              </button>
              {submitted && (
                <span className="col-span-full mt-[11px] font-mono text-[10px] text-teal">
                  Thank you. Your enquiry has been recorded.
                </span>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}