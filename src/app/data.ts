import {
  GraduationCap,
  Landmark,
  Network,
  Scale,
  ShieldCheck,
  Target,
  type LucideIcon,
} from 'lucide-react';

export type FrameworkItem = {
  number: string;
  title: string;
  short: string;
  description: string;
  indicators: string[];
  icon: LucideIcon;
};

export type Audience = {
  label: string;
  title: string;
  description: string;
  items: string[];
  cta: string;
  icon: LucideIcon;
};

export const framework: FrameworkItem[] = [
  {
    number: '01',
    title: 'Institutional Capacity',
    short: 'Can the state deliver?',
    description:
      'Institutional capacity determines whether governments can effectively plan, coordinate, and deliver infrastructure.',
    indicators: ['Planning frameworks', 'Administrative capability', 'Resource mobilization'],
    icon: Landmark,
  },
  {
    number: '02',
    title: 'Governance Quality',
    short: 'Is the process fair?',
    description:
      'Governance quality determines whether decisions are transparent, accountable, and responsive to differentiated regional needs.',
    indicators: ['Intergovernmental transfers', 'Stakeholder participation', 'Decision transparency'],
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Infrastructure Equity',
    short: 'Who gets what?',
    description:
      'Infrastructure equity represents the resulting distributive outcome and serves as the critical bridge between state functionality and national cohesion.',
    indicators: ['Composite Infrastructure Index', 'Infrastructure Equity Index', 'Territorial access'],
    icon: Scale,
  },
  {
    number: '04',
    title: 'Nation-Building',
    short: 'What holds us together?',
    description:
      'The overarching societal outcome reflected in political trust, territorial cohesion, and state legitimacy.',
    indicators: ['Shared belonging', 'Institutional legitimacy', 'Political stability'],
    icon: Network,
  },
];

export const audiences: Audience[] = [
  {
    label: 'Primary audience',
    title: 'Academic & research',
    description:
      'A rigorous resource for scholars, students, and institutions studying federalism, governance, and development.',
    items: ['University professors', 'PhD students & researchers', 'Academic libraries', 'Policy schools'],
    cta: 'Explore the research',
    icon: GraduationCap,
  },
  {
    label: 'Secondary audience',
    title: 'Policy & institutions',
    description:
      'Evidence and practical language for public leaders working across infrastructure, finance, and regional development.',
    items: ['Government ministries', 'International organisations', 'Think tanks', 'Development agencies'],
    cta: 'View policy themes',
    icon: Landmark,
  },
  {
    label: 'Tertiary audience',
    title: 'Practice & civil society',
    description:
      'A shared evidence base for practitioners translating territorial data into more inclusive public outcomes.',
    items: ['Policy consultants', 'Civil society organisations', 'Infrastructure analysts', 'Graduate students'],
    cta: 'Start a conversation',
    icon: Target,
  },
];

export type Chapter = {
  part: string;
  partTitle: string;
  chapters: { number: string; title: string }[];
};

export const toc: Chapter[] = [
  {
    part: 'Part I',
    partTitle: 'Foundations: Theory and Conceptual Architecture',
    chapters: [
      { number: 'Chapter 1', title: 'Introduction: Why Equity Matters?' },
      { number: 'Chapter 2', title: 'Theory of Equity in Development' },
      { number: 'Chapter 3', title: 'Theoretical and Conceptual Model: Equity and Infrastructure in Ethiopia' },
    ],
  },
  {
    part: 'Part II',
    partTitle: 'The Federal Context: Institutions, History, and Design',
    chapters: [
      { number: 'Chapter 4', title: 'Ethiopian Federalism: Institutions, History, and Design' },
    ],
  },
  {
    part: 'Part III',
    partTitle: 'Empirical Evidence: Measuring Regional Inequities',
    chapters: [
      { number: 'Chapter 5', title: 'The Macro View: Patterns of Growth and Gaps' },
      { number: 'Chapter 6', title: 'Synthesizing Empirical and Theoretical Insights: Roads, Electricity, and Telecommunications: Who Gets What?' },
      { number: 'Chapter 7', title: 'Strategic Investments: Universities, Airports, and Industrial Parks' },
    ],
  },
  {
    part: 'Part IV',
    partTitle: 'Synthesis, Policy, and the Future',
    chapters: [
      { number: 'Chapter 8', title: 'Infrastructure Equity Index: Linking Capacity, Governance, and Equity' },
      { number: 'Chapter 9', title: 'Toward an Equitable Future: Conclusions and Reflections' },
    ],
  },
];

export const contributions = [
  {
    number: '1',
    title: 'A new way of understanding infrastructure equity',
    description: 'The book moves beyond measuring infrastructure investment in aggregate and focuses on the fairness of its territorial distribution.',
  },
  {
    number: '2',
    title: 'The Composite Infrastructure Index (CII)',
    description: 'The CII provides a systematic approach to assessing regional infrastructure disparities across major infrastructure sectors.',
  },
  {
    number: '3',
    title: 'The Infrastructure Equity Index (IEI)',
    description: 'The IEI provides an analytical framework for examining infrastructure equity and linking distributional outcomes with institutional and governance conditions.',
  },
  {
    number: '4',
    title: 'The Three-Pillar Framework',
    description: 'The book develops an integrated framework connecting: Institutional Capacity → Infrastructure Governance → Infrastructure Equity → Nation-Building.',
  },
  {
    number: '5',
    title: 'Infrastructure as a nation-building instrument',
    description: 'Infrastructure is examined not only as an economic asset but also as a mechanism through which citizens and regions experience the state.',
  },
  {
    number: '6',
    title: 'Evidence-based policy reform',
    description: 'The final chapters translate the empirical findings into practical policy pathways, including institutional strengthening, governance reform, equitable allocation, and a sequenced reform roadmap.',
  },
  {
    number: '7',
    title: 'Lessons beyond Ethiopia',
    description: 'Although Ethiopia provides the principal case, the analytical framework offers potentially useful lessons for other multinational and developing federations confronting territorial inequality and nation-building challenges.',
  },
];

export const endorsements = [
  { quote: '[Endorsement or review quotation]', author: 'Name, title, institution' },
  { quote: '[Endorsement or review quotation]', author: 'Name, title, institution' },
  { quote: '[Endorsement or review quotation]', author: 'Name, title, institution' },
];

export const journalOutlets = [
  'Public Organization Review (Springer)',
  'International Review of Administrative Sciences',
  'Journal of Infrastructure, Policy and Development',
  'Journal of Mega Infrastructure & Sustainable Development',
  'Management Theory and Studies for Rural Business and Infrastructure Development',
];

export const mediaLinks = [
  { title: 'Deposit Insurance Awareness Workshop for Key Stakeholders', source: 'EDIF', url: 'https://edif.gov.et/2025/07/16/deposit-insurance-awareness-workshop-for-key-stakeholders/' },
  { title: "Ethiopia's Deposit Insurance Fund Collects 5.2 Billion Birr", source: 'Stock Market Ethiopia', url: 'https://www.stockmarket.et/ethiopias-deposit-insurance-fund-collects-5-2-billion-birr/' },
  { title: 'EDIF Holds Awareness Dialogue Conference', source: 'National Bank of Ethiopia', url: 'https://nbe.gov.et/nbe_news/edif-holds-awareness-dialogue-conference/' },
  { title: 'Ethiopian Deposit Insurance Fund Collects Birr 13.84 Billion in Two Years', source: '2merkato', url: 'https://www.2merkato.com/news/banking-and-finance/8529-ethiopian-deposit-insurance-fund-collects-birr-1384-billion-in-two-years' },
  { title: 'African Leadership Magazine Feature: Dr. Desalegn Ambaw', source: 'African Leadership Magazine', url: 'https://web.facebook.com/africanleadershipmagazine/posts/congratulations-to-dr-desalegn-ambaw-chief-executive-officer-of-the-ethiopian-de/1374175654737040/' },
];

export const researchInterests = [
  'Federalism and intergovernmental relations',
  'Infrastructure equity and territorial development',
  'Governance and institutional capacity',
  'Public policy and development',
  'Inclusive and equitable development',
  'State-building and nation-building',
  'Financial-sector governance',
  'Infrastructure governance',
];

export const bookUrl = 'https://link.springer.com/book/10.1007/978-3-032-25701-7';
export const citation =
  '@book{ambaw2026building, title={Building the Nation: Infrastructure, Equity, and Federalism in Ethiopia}, author={Ambaw, Desalegn}, year={2026}, publisher={Palgrave Macmillan Cham}, doi={10.1007/978-3-032-25701-7}}';
