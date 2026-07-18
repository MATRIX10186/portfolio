// -----------------------------------------------------------------------------
// Single source of truth for all site content.
// Edit anything here and it updates across the whole page.
// TODO(sawat): replace the LinkedIn/GitHub placeholder URLs with your real ones.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Sawat Wongsaroj',
  role: 'Software Engineer',
  location: 'Parramatta, Sydney',
  email: 'sawatw2000@gmail.com',
  description:
    'Sawat Wongsaroj — a software engineer in Sydney. React, TypeScript and Node up front; SQL, Azure and IoT hardware underneath.',
  links: {
    email: 'mailto:sawatw2000@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sawat-wongsaroj', // TODO: real URL
    github: 'https://github.com/MATRIX10186',
    resume: '/Sawat_Resume_2026_public.pdf',
  },
} as const;

export const nav = [
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'I build systems that turn real-world signals into decisions.',
  intro:
    'Full-stack engineer working across field systems, React and TypeScript interfaces, Node.js APIs, data pipelines and cloud deployment.',
  primaryCta: { label: 'View selected work', href: '#work' },
  caption:
    'Based in Sydney. Open to full-stack, software engineering and product-focused development roles.',
  bgImg: '/media/solar-station.jpg',
  bgImgWebp: '/media/solar-station.webp',
  bgAlt: 'Smartadata field deployment — solar-powered environmental monitoring station, regional NSW',
  mediaCaption: 'Smartadata field deployment, regional NSW',
  portrait: {
    img: '/media/profile.jpg',
    imgWebp: '/media/profile.webp',
    alt: 'Portrait of Sawat Wongsaroj',
  },
};

export const stats = [
  { value: '3', label: "Years' professional experience" },
  { value: '90%+', label: 'Platform performance improvement' },
  { value: '2', label: 'Production platforms delivered end to end' },
  { value: 'Distinction', label: 'Engineering thesis result' },
];

export const work = {
  heading: 'Selected work',
  blurb:
    'Three builds that show the range — field systems, production platforms and applied research. Each one owned end to end.',
  projects: [
    {
      tag: 'RWDI',
      title: 'Smartadata',
      description:
        'Rebuilt a legacy environmental monitoring platform in React and Node.js, integrating field sensor data, authentication and Azure deployment. Reduced key dashboard loading times by over 90%.',
      href: 'https://smartadata.io/',
      hrefLabel: 'Visit site',
      img: '/media/smartaidata-demo.jpg',
      imgWebp: '/media/smartaidata-demo.webp',
      alt: 'Smartadata platform dashboard showing environmental monitoring data.',
      logo: {
        img: '/media/logo-rwdi.png',
        imgWebp: '/media/logo-rwdi.webp',
        alt: 'RWDI logo',
      },
    },
    {
      tag: 'Property Management',
      title: 'The Lake House',
      description:
        'Owned design and delivery of a production property-management and guest-facing villa platform — React, TypeScript, Express, Prisma and PostgreSQL — from schema through bilingual PDFs and an SEO-focused public catalog, replacing spreadsheet workflows.',
      href: 'https://thelakehousephuket.com',
      hrefLabel: 'Visit site',
      img: '/media/lakehouse-landing.jpg',
      imgWebp: '/media/lakehouse-landing.webp',
      alt: 'The Lake House villa booking landing page.',
      logo: {
        img: '/media/logo-lakehouse.png',
        imgWebp: '/media/logo-lakehouse.webp',
        alt: 'Phuket Greenland Property logo',
        plate: true,
      },
    },
    {
      tag: 'UNSW Thesis',
      title: 'Brain Computer Interface Game',
      description:
        'Designed and built a real-time BCI game controlled by EEG signals — signal processing pipeline, game loop and user interface. Distinction-graded engineering thesis (80/100).',
      href: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003557555-12/leveraging-brain%E2%80%93computer-interfaces-advance-interaction-within-digital-landscape-ali-darejeh-colby-rehn-dylan-ngo-dyllanson-sawat-wongsaroj-samad-sepasgozar',
      hrefLabel: 'View publication',
      img: '/media/bci-demo.jpg',
      imgWebp: '/media/bci-demo.webp',
      alt: 'Brain-computer interface game demo setup.',
      // CSS object-position — tweak X/Y to reframe the crop inside the 16:10 band.
      objectPosition: 'center 28%',
      logo: {
        img: '/media/logo-unsw.png',
        imgWebp: '/media/logo-unsw.webp',
        alt: 'UNSW Sydney logo',
      },
    },
  ],
  additional: {
    heading: 'Additional work',
    items: [
      {
        title: 'Shopify',
        body: 'Custom Liquid themes and storefronts for Australian clients at COG Branding.',
      },
      {
        title: 'WordPress',
        body: 'Parallel WordPress builds — performance, cross-browser fixes and on-page SEO.',
      },
      {
        title: 'BioBrain',
        body: 'Applied neuroscience / BCI-adjacent project work alongside the thesis.',
      },
    ],
  },
};

export const capabilities = {
  heading: 'Technical capabilities',
  blurb: 'Keywords recruiters and hiring managers look for — grouped by how I actually ship.',
  groups: [
    {
      title: 'Frontend',
      items: [
        'React',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'Shopify Liquid',
        'WordPress',
        'Responsive UI',
        'On-page SEO',
      ],
    },
    {
      title: 'Backend and data',
      items: [
        'Node.js',
        'REST APIs',
        'PostgreSQL',
        'MySQL',
        'Python',
        'Query optimisation',
        'Legacy system integration',
        'Data pipelines',
      ],
    },
    {
      title: 'Cloud and delivery',
      items: [
        'Microsoft Azure',
        'Railway',
        'Cloudflare',
        'GitHub Actions CI/CD',
        'Linux & SSH',
        'Git & GitHub',
        'JWT / SSO / MFA',
        'Role-based access control',
      ],
    },
    {
      title: 'Engineering',
      items: [
        'IoT / monitoring systems',
        'Field deployment',
        'Legacy modernisation',
        'API composition',
        'Technical documentation',
        'Full-stack delivery',
        'GitHub Copilot / Cursor / Claude',
        'Unity (C#) / BCI',
      ],
    },
  ],
};

export const availability = {
  card: {
    tag: 'Open to new opportunities',
    title: 'Ready to ship for your team.',
    checks: [
      'Full-stack and software engineering roles',
      'Field engineering and IoT / monitoring work',
      'Remote, hybrid, Sydney or Thailand-based',
      'Available now — immediate start',
    ],
  },
  side: {
    tag: 'Availability',
    title: 'Open for new opportunities.',
    body:
      'Looking for full-stack, software engineering and field engineering roles. Based in Parramatta, Sydney — comfortable fully remote or on-site. Three years across product teams, agencies and field work; equally at home talking to engineers, designers and non-technical stakeholders.',
  },
};

export const experience = {
  heading: "Where I've shipped.",
  roles: [
    {
      featured: true,
      open: true,
      dates: 'Mar 2025 — Apr 2026',
      title: 'Full-Stack & Field Engineer',
      org: 'RWDI Australia · Sydney',
      logo: {
        img: '/media/logo-rwdi.png',
        imgWebp: '/media/logo-rwdi.webp',
        alt: 'RWDI logo',
      },
      highlights: [
        'Led the end-to-end rebuild of smartadata.io from legacy Drupal/PHP to React + Node on Azure — frontend, APIs, auth and CI/CD — cutting key dashboard load times by over 90% against a 12-month plan.',
        'Owned live reliability for environmental monitoring (noise, vibration, PM2.5) across NSW and ACT — diagnosing faults across networking, IoT hardware, Linux services and data pipelines.',
      ],
      details: [
        'Mapped and replaced a legacy Drupal/PHP codebase — product UI, backend services, internal APIs, authentication, Azure deployment and GitHub Actions pipelines for build, test and release.',
        'Designed REST APIs and optimised MySQL queries for high-frequency sensor ingestion and retrieval across connected monitoring sites.',
        'Implemented JWT, SSO, Microsoft MFA and role-based access control with audit logging for multi-user operational access.',
        'Delivered in Agile sprints; used Copilot, Cursor and Claude to accelerate legacy analysis, tests and technical documentation while holding production security standards.',
        'Troubleshot live field devices end to end — root-causing issues across PCB/hardware, networking and backend systems with Linux and Python validation scripts.',
        'Deployed and maintained on-site IoT monitoring software so sensor data stayed continuous for client reporting across NSW and the ACT.',
      ],
      stack:
        'React · Node.js · MySQL · Azure · GitHub Actions · JWT/SSO/MFA · Linux · Python · IoT / PCB field systems',
      media: [
        {
          type: 'video' as const,
          src: '/media/field-wiring.mp4',
          poster: '/media/field-wiring-poster.jpg',
          caption: 'Field cabinet wiring on site',
        },
        {
          type: 'image' as const,
          img: '/media/rwdi-office.jpg',
          imgWebp: '/media/rwdi-office.webp',
          alt: 'RWDI Australia office.',
          caption: 'RWDI Australia, Sydney',
        },
      ],
    },
    {
      dates: 'Jun 2024 — Mar 2025',
      title: 'Full-Stack Web Developer',
      org: 'Phuket Greenland Property · Remote',
      logo: {
        img: '/media/logo-lakehouse.png',
        imgWebp: '/media/logo-lakehouse.webp',
        alt: 'Phuket Greenland Property logo',
        plate: true,
      },
      highlights: [
        'Owned design and delivery of a production property-management and guest-facing villa platform — from database schema through bilingual PDFs and an SEO-focused public catalog.',
        'Cut operational friction by automating invoice, VAT and PDF workflows and centralising property, lease and client data previously handled in spreadsheets.',
      ],
      details: [
        'Built a full-stack villa ops system (React, TypeScript, Express, Prisma, PostgreSQL) for staff — properties, clients, leases, maintenance, invoices and owner statements.',
        'Delivered bilingual Thai/English invoicing with 7% VAT, templates and PDF generation (@react-pdf/renderer), replacing manual Excel/Word workflows.',
        'Shipped The Lake House Phuket marketing site with villa listings, SEO (meta, slugs, sitemap), inquiry flow and Cloudinary-optimised media.',
        'Improved Core Web Vitals (LCP/CLS) via hero preloading, early font loading and reserved-height gallery skeletons.',
        'Implemented staff JWT auth, role-based access, settings/bank accounts and email notifications (Resend/Nodemailer) for inquiries and ops.',
        'Structured a monorepo (Vite frontend, Node API, shared Zod packages) with TanStack Query, i18n and Vitest for maintainable delivery.',
      ],
      stack:
        'TypeScript · React · Vite · TanStack Query · Express · Prisma · PostgreSQL · Cloudinary · React PDF · i18next · Zod · Vercel/Node · Sentry',
      mediaCarousel: true,
      media: [
        {
          type: 'image' as const,
          img: '/media/lakehouse-landing.jpg',
          imgWebp: '/media/lakehouse-landing.webp',
          alt: 'The Lake House Phuket marketing landing page.',
          caption: 'Public marketing site',
        },
        {
          type: 'image' as const,
          img: '/media/lakehouse-dashboard.jpg',
          imgWebp: '/media/lakehouse-dashboard.webp',
          alt: 'The Lake House property management dashboard.',
          caption: 'Villa operations dashboard',
        },
        {
          type: 'image' as const,
          img: '/media/lakehouse-villa.jpg',
          imgWebp: '/media/lakehouse-villa.webp',
          alt: 'The Lake House Phuket villa detail page.',
          caption: 'Villa listing detail page',
        },
      ],
    },
    {
      dates: 'Oct 2023 — Mar 2024',
      title: 'Software Developer',
      org: 'COG Branding · Sydney',
      logo: {
        img: '/media/cog-branding.jpg',
        imgWebp: '/media/cog-branding.webp',
        alt: 'COG Branding logo',
        plate: true,
      },
      highlights: [
        'Built and shipped custom Shopify storefronts in Liquid for Australian clients — theme sections, product, collection and landing pages with maintainable, scalable theme code.',
        'Delivered parallel WordPress and React solutions alongside Shopify, giving clients flexible CMS and app-style surfaces from one agency workflow.',
      ],
      details: [
        'Owned end-to-end front-end delivery across client brands (including work in the ANSTO, Olympics, Ocean & Earth, Deus Ex Machina, Red Bull and Peaches pipelines) — from creative brief to production storefront.',
        'Wrote Liquid for custom sections and templates, keeping theme architecture organised for handoff and future iteration.',
        'Diagnosed and resolved layout bugs, cross-browser inconsistencies and performance issues; improved mobile responsiveness and on-page SEO.',
        'Partnered with designers, marketers and project managers — translating creative direction into shippable builds and explaining technical constraints in plain language.',
        'Balanced speed and quality in a fast agency environment, shipping client-ready Shopify and WordPress experiences on commercial timelines.',
      ],
      stack: 'Shopify Liquid · WordPress · React · HTML/CSS · JavaScript · On-page SEO · Responsive UI',
      media: [
        {
          type: 'image' as const,
          img: '/media/cog-sample-works.jpg',
          imgWebp: '/media/cog-sample-works.webp',
          alt: 'Sample client work from COG Branding including ANSTO, Olympics, Ocean & Earth, Deus Ex Machina, Red Bull and Peaches.',
          caption: 'Selected client work — COG Branding',
        },
      ],
    },
  ],
  education: [
    {
      dates: '2020 — 2024',
      title: 'BE Computer Engineering — UNSW',
      sub: 'Honours Class 2 Div 2 · Distinction thesis result (80/100)',
      logo: {
        img: '/media/logo-unsw.png',
        imgWebp: '/media/logo-unsw.webp',
        alt: 'UNSW Sydney logo',
      },
    },
    {
      dates: '2018 — 2020',
      title: 'BE Electrical Engineering — Thammasat University',
      sub: 'Bangkok, Thailand · GPA 3.60',
      logo: {
        img: '/media/logo-thammasat.jpg',
        imgWebp: '/media/logo-thammasat.webp',
        alt: 'Thammasat University logo',
        plate: true,
      },
    },
  ],
};

export const contact = {
  tag: 'Contact',
  title: "Let's build solutions businesses can rely on.",
  body:
    'Email is quickest — I reply within a day. Happy to walk through any of these builds in detail.',
  email: 'sawatw2000@gmail.com',
  locations: ['Parramatta, Sydney', 'Bangkok, Thailand'],
  media: {
    src: '/media/rooftop.mp4',
    poster: '/media/rooftop-poster.jpg',
  },
};
