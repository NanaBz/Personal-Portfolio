import leagueSchedulerVisual from '../assets/images/projects/league-scheduler/visual.png';
import aetherqoreLogo from '../assets/images/projects/aetherqore/logo.png';
import ancoraVisual from '../assets/images/projects/ancora/visual.png';
import feastflowLogo from '../assets/images/projects/feastflow/logo.png';
import novaforgeLogo from '../assets/images/projects/novaforge/logo.png';
import fakeNewsVisual from '../assets/images/projects/fake-news-detector/visual.png';
import spikeAssistant from '../assets/images/projects/spikesense/spike.png';

export const projects = [
  {
    id: 'league-scheduler',
    number: '01',
    title: 'League Scheduler',
    category: 'Problem Solver',
    hook:
      'Fixing a football scheduling problem led me to an algorithm I didn\u2019t know existed — and then to a fantasy system I didn\u2019t expect to have to build.',
    summary:
      'What started as frustration with repetitive fixtures at Academic City became a full league platform — live match tracking, multiple real competitions, and a custom fantasy football game (ACFPL) with its own rules, scoring engine, and knockout cup.',
    problem:
      'Academic City\u2019s sports league had six teams in a double round-robin format, but the fixture scheduling felt repetitive and awkward. NBA wanted a better way to generate fair, usable matchweeks. As the platform grew, another problem appeared: the school wanted fantasy football too — but not an off-the-shelf version. It needed to run on real match data, follow custom rules, and stay separate from the actual cup competitions on the pitch.',
    idea:
      'If professional football competitions had solved scheduling, there had to be a method worth learning. And if fantasy was going to exist inside the same system, it couldn\u2019t be a bolt-on — it had to be powered by the same live results, validated squads, and scoring logic that made the league trustworthy.',
    build:
      'After a first scheduling attempt that produced conflicts — teams appearing more than once in the same matchweek — NBA researched how professional leagues handle fixtures and discovered the Circle Method. He adapted it by randomizing the first team before applying the method, so rescheduling didn\u2019t always lock the same team in place. That scheduling foundation grew into a full league platform: live match tracking, standings, stats, and multiple real competitions including the men\u2019s league, Agha Cup, and Super Cup.\n\nThe fantasy layer — ACFPL (Acity Fantasy Premier League) — became a project in its own right. Managers build squads within budget and club limits, set a custom 8+1 starting lineup, and compete across ten gameweeks with transfers, chips, auto-substitutions, and a custom Duo Captain rule. Real match events cascade into fantasy points automatically. A separate Fantasy Cup runs as a 32-manager knockout bracket from gameweek 6 onward — distinct from the Agha Cup, which is the real school football competition for the top four league teams. Fantasy also needed its own user accounts, admin tooling, pricing, deadlines, and rescoring workflows — not just a leaderboard pasted onto the side of the app.',
    learning:
      'I didn\u2019t start by knowing the right algorithm — I started by knowing the schedule wasn\u2019t good enough. But the fantasy system taught me something else: the hardest part wasn\u2019t picking features from a template. It was designing rules, validation, and scoring that could stay consistent as live match data changed every week. One problem became a platform. The platform became two systems that had to trust each other.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/NanaBz/League-Scheduler',
      live: 'https://league-scheduler-bqav.vercel.app/',
    },
    image: leagueSchedulerVisual,
    imageAlt: 'League Scheduler — desktop league management interface',
    imageFit: 'contain',
  },
  {
    id: 'aetherqore',
    number: '02',
    title: 'AetherQore',
    category: 'Pharmacy Operations Platform · Co-founder & Backend Lead',
    hook:
      'One pharmacy shouldn\u2019t need five disconnected systems to run one business.',
    summary:
      'AetherQore is a pharmacy operations platform I\u2019m helping build as co-founder and backend lead — bringing inventory, catalogue, purchasing, POS, and operational data into one AI-ready system.',
    problem:
      'Pharmacy operations can fragment across spreadsheets, legacy POS tools, manual stock counts, separate purchasing processes, and disconnected records. That makes it harder to maintain a reliable picture of stock, reconcile inventory, reduce waste from expiry, and run day-to-day operations with confidence.',
    idea:
      'Build one operational system around a reliable source of truth for pharmacy catalogue and stock data — then layer sales, purchasing, and future AI-assisted decisions on top of it. Designed to be role-aware, compliance-friendly in approach, and appropriate for independent and mid-size pharmacies, including realities common in African and emerging markets.',
    build:
      'AetherQore is aetherOS — a full-stack platform we\u2019re building with a React command center, FastAPI backend, and PostgreSQL database. Current scope includes authentication, role-based access control, audit trails, medicine catalogue management, and UI for inventory, POS, and purchasing.\n\nAs co-founder and backend lead, I work across product scope and backend architecture — designing APIs, database schemas, authentication, RBAC, audit trails, and backend test coverage. We work in modular sprints with clear ownership — for example, one migration owner for inventory schema so parallel work doesn\u2019t break Alembic.\n\nA planned AI layer aims to add reorder suggestions, operational insights, and copilot functionality — but that layer is forward-looking, not something I describe as already live.',
    learning:
      'AetherQore is teaching me that building software is only part of solving a problem. Product scope, data structure, ownership, collaboration, and the decisions made before implementation can determine whether a system actually solves the problem it was built for. After learning to identify problems and build around them on my own, this is what it looks like to do that with a team — for problems beyond my own.',
    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Alembic',
      'pytest',
      'React 19',
      'TypeScript',
      'Tailwind',
      'Docker',
    ],
    image: aetherqoreLogo,
    imageAlt: 'AetherQore logo',
    imageFit: 'logo',
  },
  {
    id: 'spikesense',
    number: '03',
    title: 'SpikeSense',
    category: 'Final Year Project · Digital Wellness',
    hook:
      'Screen time tells you how long you were on your phone. It doesn\u2019t always tell you when digital use stops feeling healthy.',
    summary:
      'SpikeSense is my final-year project — a mobile digital wellness system that detects patterns of digital overstimulation in students and responds with gentle, personalized nudges through Spike, the in-app assistant.',
    problem:
      'For many students, heavy phone use is not just about hours logged. It is about switching between apps, losing focus, and feeling mentally overloaded without a clear moment to pause. Generic screen-time limits rarely explain why a session feels draining or what to do next.',
    idea:
      'Combine usage tracking with intelligent pattern recognition — app-switching frequency, session duration, and category mix — then surface support through an assistant that can educate, motivate, or gently restrict depending on the student\u2019s chosen mode.',
    build:
      'SpikeSense is a cross-platform React Native + Expo app backed by a Python Flask API. The system analyzes usage patterns with rule-based detection and optional lightweight ML, calculates focus scores, and generates context-aware nudges through Spike. Students can work in Supportive, Motivational, Restrictive, or Balanced modes, with dashboards for daily and weekly trends, category breakdowns, and streak-style progress.\n\nThe project was developed as our team final-year capstone — combining mobile experience design, pattern detection, nudging logic, and privacy-first data handling in one cohesive system.',
    learning:
      'SpikeSense stretched me beyond a single feature demo. It asked how you design for behavior, privacy, and trust at the same time — local-first data handling, transparent nudges, and an assistant personality that helps instead of shaming. It also reinforced why I am moving toward Data Science: the interesting question was never only how long someone scrolled, but what the pattern meant and what to do about it.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Python',
      'Flask',
      'PostgreSQL',
      'SQLite',
      'Machine Learning',
    ],
    links: {
      github: 'https://github.com/Benedict-nds/Spikesense',
    },
    image: spikeAssistant,
    imageAlt: 'Spike — SpikeSense digital wellness assistant',
    imageFit: 'contain',
  },


  {
    id: 'feastflow',
    number: '04',
    title: 'FeastFlow',
    category: 'Classroom Challenge → System',
    hook:
      'What started as a classroom challenge became a question about how a real canteen actually works.',
    summary:
      'A canteen management system with a points-based ordering flow — built to translate requirements into something people could actually use.',
    problem:
      'FeastFlow began as an exam project: design a system that could manage canteen operations, not just demonstrate code on a slide.',
    idea:
      'What if the assignment became an opportunity to think through real user flows — how people order, how points work, how staff manage transactions?',
    build:
      'A full-stack canteen management platform where customers browse a menu, place orders, and earn loyalty points, while admins manage the order queue, menu catalog, and dietary information. The server enforces pricing, access control, and business rules.',
    learning:
      'Not every project needs a grand origin story. Sometimes the value is in taking a constrained brief seriously enough to think like a systems designer.',
    technologies: ['React', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/NanaBz/FeastFlow',
      live: 'https://feastflowdev.netlify.app/',
    },
    image: feastflowLogo,
    imageAlt: 'FeastFlow logo',
    imageFit: 'logo-circle',
  },
  {
    id: 'novaforge',
    number: '05',
    title: 'NovaForge',
    category: 'Collaboration + Frontend Craft',
    hook:
      'Taking someone else\u2019s vision and turning it into a polished web experience.',
    summary:
      'Frontend web implementation for a broader VR/XR training concept — translating immersive training ideas into clear, credible interfaces.',
    problem:
      'NovaForge is built around a larger vision for immersive AI, XR, and VR training — including industrial, mining, and higher-education contexts, with considerations for low-bandwidth and offline-capable environments.',
    idea:
      'The concept needed a web presence that could communicate the vision clearly — without pretending the entire platform was one person\u2019s invention.',
    build:
      'NBA contributed primarily to the frontend web implementation — building the interface that presents NovaForge\u2019s offerings, use cases, and positioning using Next.js, TypeScript, and Tailwind CSS.',
    learning:
      'Strong frontend work isn\u2019t always about originating the idea. Sometimes it\u2019s about listening carefully to a vision and giving it the clarity and craft it deserves.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Resend'],
    links: {
      github: 'https://github.com/NanaBz/NovaForge',
      live: 'https://novaforge-lnn8emuvk-nanabzs-projects.vercel.app/',
    },
    image: novaforgeLogo,
    imageAlt: 'NovaForge logo',
    imageFit: 'logo-wide',
  },
  {
    id: 'fake-news-detector',
    number: '06',
    title: 'Fake News Detector',
    category: 'Data + Responsible AI',
    hook:
      'A model is only as good as the data, assumptions, and evaluation behind it.',
    summary:
      'A text classification project using TF-IDF and Logistic Regression — and a lesson in what happens when your data doesn\u2019t represent the problem you care about.',
    problem:
      'Misinformation is a real concern, but detecting it reliably requires more than picking an algorithm and calling it done. What assumptions does the data encode? What happens when the training set doesn\u2019t reflect the world you want to evaluate?',
    idea:
      'Start with a clear classification pipeline — ISOT-based news data, TF-IDF features, Logistic Regression — and treat confidence scores and evaluation as part of the design, not an afterthought.',
    build:
      'A fake news classification system built in Python with TF-IDF vectorization and Logistic Regression, including confidence handling and structured evaluation. When broader or African news coverage was considered, insufficient representation in the training data became a visible limitation — not a hidden one.',
    learning:
      'This project pushed me toward Data Science not because the model was perfect, but because it showed me what happens when you ask why — why the data looks the way it does, why the model fails, why representation matters. A model is only as good as the problem definition behind it.',
    technologies: ['Python', 'TF-IDF', 'Logistic Regression', 'ISOT'],
    links: {
      github: 'https://github.com/NanaBz/Fake-News-Detector',
      live: 'https://fake-news-detector-ashen.vercel.app/',
    },
    image: fakeNewsVisual,
    imageAlt: 'Fake News Detector — text classification interface',
    imageFit: 'contain',
  },
  {
    id: 'ancora',
    number: '07',
    title: 'Ancora',
    category: 'Care + System Thinking',
    hook:
      'A reminder helps you remember. But how do you know the medication was actually taken?',
    summary:
      'A medication tracking app exploring the gap between reminders and accountability — with caretaker support and photo verification.',
    problem:
      'Remembering to take medication is one challenge. Knowing whether someone actually took it — especially when care involves another person — can be a separate one.',
    idea:
      'Technology could do more than send alerts. It could help bridge the space between a reminder and the confidence that care actually happened.',
    build:
      'Ancora is a medication tracking and reminder application with a caretaker system and photo verification — designed to give patients and caregivers greater confidence that medication was taken, without replacing medical advice or clinical oversight.',
    learning:
      'Some problems aren\u2019t solved by adding more notifications. They require thinking about trust, accountability, and the human relationship behind the system.',
    technologies: ['Flutter', 'Firebase'],
    links: {
      github: 'https://github.com/NanaBz/Ancora',
    },
    image: ancoraVisual,
    imageAlt: 'Ancora — medication adherence app landing screen',
    imageFit: 'contain',
  },
];
