const roles = ['Software Developer', 'Full-Stack Developer', 'AI App Builder'];
const roleRotator = document.getElementById('roleRotator');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (roleRotator && !reduceMotion) {
    let roleIndex = 0;
    window.setInterval(() => {
        roleRotator.classList.add('is-swapping');
        window.setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            roleRotator.textContent = roles[roleIndex];
            roleRotator.classList.remove('is-swapping');
        }, 300);
    }, 2600);
}

const projects = [
    {
        image: 'GeoShield.webp',
        title: 'GeoShield',
        category: 'Full-stack · Real-time',
        context: 'McMaster Engineering Competition',
        date: 'November 2025',
        pitch: 'A real-time disaster response platform connecting survivors requesting help with volunteers who respond, plus a coordinator dashboard to monitor operations, all visualized on a live interactive map.',
        action: 'Built the Node.js and Express backend APIs for accounts, help requests, and safe-zone data, implemented Socket.io for instant real-time sync, and traced and resolved request-flow bugs across user roles.',
        tags: [
            { label: 'Node.js', color: 'tag-green' },
            { label: 'Express', color: 'tag-blue' },
            { label: 'Socket.io', color: 'tag-yellow' },
            { label: 'React.js', color: 'tag-purple' },
            { label: 'Google Maps API', color: 'tag-orange' }
        ],
        buttons: [
            { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/lohit555/GeoShield' },
            { label: 'Demo', icon: 'fas fa-play', href: 'https://youtu.be/8tVIzGkGMsE' }
        ]
    },
    {
        image: 'WorDex.webp',
        title: 'WorDex',
        category: 'Systems · CLI game',
        context: 'McMaster University',
        date: 'November–December 2025',
        pitch: 'A terminal-based Wordle-style game with user authentication, persistent history, and a global leaderboard, built in C with file I/O.',
        action: 'Built a timestamped game history log with color-coded WIN/LOSS entries ordered by recency, and a global leaderboard ranking players by wins, games played, losses, win rate, and average guesses.',
        tags: [
            { label: 'C', color: 'tag-blue' },
            { label: 'Makefile', color: 'tag-yellow' },
            { label: 'File I/O', color: 'tag-green' }
        ],
        buttons: [
            { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/lohit555/WorDex' },
            { label: 'Demo', icon: 'fas fa-play', href: 'https://youtu.be/MVTS1ZGwnl8' }
        ]
    },
    {
        image: 'SafeGuard.webp',
        title: 'SafeGuard',
        category: 'AI · Full-stack',
        context: 'MacHacks',
        date: 'March 2026',
        pitch: 'An AI-powered workplace hazard detection app. Users upload site photos and receive a severity-ranked hazard list and action checklist powered by Gemini.',
        action: 'Engineered the Node.js serverless backend on Vercel to securely proxy Gemini API calls, integrated multi-image upload and live camera capture for up to 8 concurrent images, and validated AI accuracy across 15+ test images.',
        tags: [
            { label: 'Node.js', color: 'tag-green' },
            { label: 'Vercel', color: 'tag-blue' },
            { label: 'Gemini API', color: 'tag-yellow' },
            { label: 'React.js', color: 'tag-purple' },
            { label: 'Vite', color: 'tag-orange' }
        ],
        buttons: [
            { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/lohit555/SafeGuard' },
            { label: 'Live demo', icon: 'fas fa-arrow-up-right-from-square', href: 'https://fall-guard-nine.vercel.app/' }
        ]
    },
    {
        image: 'Catan.webp',
        title: 'Catan',
        category: 'Java · Software design',
        context: 'McMaster University',
        date: 'January–March 2026',
        pitch: 'A Java-based board game simulator modeling settlements, cities, roads, resources, trading, the Robber mechanic, and an AI-driven computer player, with a Python visualizer for the board state.',
        action: "Implemented the AI's decision-making in Java using the Strategy pattern, designed the full UML class diagram in Eclipse Papyrus, and authored JUnit partition and boundary tests covering board limits, resources, and building logic.",
        tags: [
            { label: 'Java', color: 'tag-orange' },
            { label: 'JUnit', color: 'tag-blue' },
            { label: 'Eclipse Papyrus', color: 'tag-purple' },
            { label: 'UML', color: 'tag-yellow' },
            { label: 'Python', color: 'tag-green' }
        ],
        buttons: [
            { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/lohit555/Catan' },
            { label: 'Demo', icon: 'fas fa-play', href: 'https://youtu.be/I_Pxknsg1I0' }
        ]
    },
    {
        image: 'RivalRefs.webp',
        title: 'RivalRefs',
        category: 'AI · Web app',
        context: 'Code the Cup Hackathon',
        date: 'July 2026',
        pitch: 'An AI football commentary app where two rival AI commentators trade live roast-battle banter over a replay of the 2022 World Cup Final.',
        action: "Led our team's live demo, then directed a full migration to free-tier Gemini and Web Speech APIs, eliminating all costs.",
        tags: [
            { label: 'React.js', color: 'tag-purple' },
            { label: 'Next.js', color: 'tag-blue' },
            { label: 'Tailwind CSS', color: 'tag-green' },
            { label: 'TypeScript', color: 'tag-blue' },
            { label: 'Gemini API', color: 'tag-yellow' },
            { label: 'Web Speech API', color: 'tag-orange' }
        ],
        buttons: [
            { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/lohit555/RivalRefs' },
            { label: 'Demo', icon: 'fas fa-play', href: 'https://youtu.be/I3scA103eSU' }
        ]
    },
    {
        image: 'Expecta.webp',
        title: 'Expecta',
        category: 'AI · Health tech',
        context: 'Cursor Hackathon',
        date: 'July 2026',
        award: '🥈 2nd place',
        pitch: 'An AI-powered pregnancy and breastfeeding safety app. It scans a barcode or ingredient list and returns a stage-specific Safe, Caution, or Avoid verdict.',
        action: 'Directed the AI-assisted build, defining the safety-verdict logic sourced from ACOG, FDA, CDC, and NIH LactMed.',
        tags: [
            { label: 'React.js', color: 'tag-purple' },
            { label: 'Next.js', color: 'tag-blue' },
            { label: 'TypeScript', color: 'tag-blue' },
            { label: 'Tailwind CSS', color: 'tag-green' }
        ],
        buttons: [
            { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/lohit555/Expecta' },
            { label: 'Live demo', icon: 'fas fa-arrow-up-right-from-square', href: 'https://cursor-hackathon-july-2026-nine.vercel.app/' }
        ]
    },
    {
        image: 'RivalRuns.webp',
        number: 7,
        title: 'RivalRuns',
        category: 'Computer vision · Game',
        context: 'Hack the Valley',
        date: 'July 2026',
        award: '🥈 2nd place',
        pitch: 'A two-player, two-laptop endless runner using full-body motion tracking, where one player dodges obstacles while a rival places them in real time using hand gestures.',
        action: 'Built the Ursina 3D scene, deterministic collision detection, and the WebSocket architecture connecting both laptops in real time.',
        tags: [
            { label: 'Python', color: 'tag-orange' },
            { label: 'MediaPipe', color: 'tag-green' },
            { label: 'Ursina', color: 'tag-purple' },
            { label: 'WebSocket', color: 'tag-blue' },
            { label: 'OpenCV', color: 'tag-yellow' },
            { label: 'CV', color: 'tag-green' }
        ],
        buttons: [
            { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/lohit555/RivalRuns' },
            { label: 'Demo', icon: 'fas fa-play', href: 'https://youtu.be/evwKSR_Tm4g' }
        ]
    },
    {
        image: 'Perimeter.png',
        number: 8,
        title: 'Perimeter',
        category: 'FinTech . Security',
        context: 'Ignition Hacks V7',
        date: 'August 2026',
        pitch: "A token isolation platform where every merchant gets its own encrypted payment token, locked to that merchant's domain and assigned its own spending limit. This ensures that a breach at any one merchant is automatically contained by revoking and replacing only the affected token.",
        action: 'Built the n8n breach-containment automation workflow, connected the React dashboard to the live Vault API, implemented Supabase authentication, and deployed the full system on Vercel.',
        tags: [
            { label: 'React', color: 'tag-perimeter-cyan' },
            { label: 'TypeScript', color: 'tag-perimeter-violet' },
            { label: 'Vault API', color: 'tag-perimeter-green' },
            { label: 'PostgreSQL', color: 'tag-perimeter-navy' },
            { label: 'n8n', color: 'tag-perimeter-red' },
            { label: 'Supabase', color: 'tag-perimeter-teal' }
        ],
        buttons: [
            { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/lohit555/Perimeter' },
            { label: 'Live demo', icon: 'fas fa-arrow-up-right-from-square', href: 'https://perimeter-beta.vercel.app/' }
        ]
    }
];

function renderProjects() {
    const projectGrid = document.getElementById('projectGrid');
    if (!projectGrid) return;

    projectGrid.innerHTML = projects.map((project, index) => `
        <article class="project-card spotlight-card">
            <div class="project-image-wrap">
                <img class="project-image" src="${project.image}" alt="${project.title} project screenshot" loading="lazy">
                <span class="project-image-title">${project.title}</span>
                <span class="project-number">${String(project.number || index + 1).padStart(2, '0')}</span>
                ${project.award ? `<span class="project-award">${project.award}</span>` : ''}
            </div>
            <div class="project-card-body">
                <div class="project-card-topline">
                    <span class="project-category">${project.category}</span>
                    <span class="project-context"><i class="fas fa-location-dot"></i>${project.context}</span>
                </div>
                <h3>${project.title}</h3>
                <p class="project-date"><i class="far fa-calendar"></i> ${project.date}</p>
                <p class="project-pitch">${project.pitch}</p>
                <p class="project-action"><strong>My contribution</strong>${project.action}</p>
                <div class="tags">${project.tags.map(tag => `<span class="tag ${tag.color}">${tag.label}</span>`).join('')}</div>
                <div class="card-buttons">${project.buttons.map(button => `<a class="card-link" href="${button.href}" target="_blank" rel="noopener noreferrer"><i class="${button.icon}"></i>${button.label}</a>`).join('')}</div>
            </div>
        </article>
    `).join('');
}

function setupSpotlights() {
    if (reduceMotion || window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('pointermove', event => {
            const bounds = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
            card.style.setProperty('--my', `${event.clientY - bounds.top}px`);
        });
    });
}

function setupNavigation() {
    const nav = document.getElementById('siteNav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const progress = document.getElementById('scrollProgress');
    const links = [...document.querySelectorAll('.nav-links a')];
    const sections = [...document.querySelectorAll('main section[id]')];

    const updateScrollState = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progressValue = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        if (progress) progress.style.width = `${progressValue}%`;
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
    };

    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
            navToggle.innerHTML = `<i class="fas fa-${isOpen ? 'xmark' : 'bars'}"></i>`;
        });

        links.forEach(link => link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Open navigation');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }));
    }

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => sectionObserver.observe(section));
}

function setupSectionReveals() {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.content-section').forEach(section => revealObserver.observe(section));
}

renderProjects();
setupNavigation();
setupSectionReveals();
setupSpotlights();
