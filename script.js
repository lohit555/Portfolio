window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#000d30';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.backgroundColor = '#001f60';
        nav.style.boxShadow = 'none';
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

const projects = [
    {
        image: 'GeoShield.png',
        title: 'GeoShield - Real-Time Disaster Response Web App',
        badges: [
            { text: 'McMaster Engineering Competition (MEC) &middot; Nov 2025' }
        ],
        pitch: 'GeoShield is a real-time disaster response web app that lets coordinators manage help requests, track missions, and monitor safe zones across every connected user.',
        action: 'Built the Node.js and Express backend and implemented Socket.io so mission and safe-zone updates sync instantly across all connected users.',
        tags: [
            { label: 'Node.js', color: 'tag-green' },
            { label: 'Express', color: 'tag-blue' },
            { label: 'Socket.io', color: 'tag-yellow' },
            { label: 'React.js', color: 'tag-purple' },
            { label: 'Google Maps API', color: 'tag-orange' }
        ],
        buttons: [
            { label: 'View on GitHub', href: 'https://github.com/lohit555/GeoShield' },
            { label: 'Watch Demo', href: 'https://youtu.be/8tVIzGkGMsE' }
        ]
    },
    {
        image: 'WorDex.png',
        title: 'WorDex - Command-Line Wordle Game',
        badges: [
            { text: 'McMaster University &middot; Nov 2025 - Dec 2025' }
        ],
        pitch: "WorDex is a terminal-based Wordle-style game with user authentication, persistent history, and a global leaderboard, built as a team project using C and file I/O.",
        action: 'Designed the file I/O system for match history and built the leaderboard module ranking players by wins, win rate, and average guesses.',
        tags: [
            { label: 'C', color: 'tag-blue' },
            { label: 'Makefile', color: 'tag-yellow' },
            { label: 'File I/O', color: 'tag-green' }
        ],
        buttons: [
            { label: 'View on GitHub', href: 'https://github.com/lohit555/WorDex' },
            { label: 'Watch Demo', href: 'https://youtu.be/MVTS1ZGwnl8' }
        ]
    },
    {
        image: 'SafeGuard.png',
        title: 'SafeGuard - AI-Powered Workplace Hazard Detection App',
        badges: [
            { text: 'MacHacks &middot; Mar 2026' }
        ],
        pitch: 'SafeGuard is an AI-powered workplace hazard detection app. Users upload site photos and receive a severity-ranked hazard list and action checklist powered by Gemini.',
        action: 'Built the Vercel serverless backend that securely proxies Gemini calls and validated AI accuracy across 15+ diverse test images.',
        tags: [
            { label: 'Node.js', color: 'tag-green' },
            { label: 'Vercel', color: 'tag-blue' },
            { label: 'Gemini API', color: 'tag-yellow' },
            { label: 'React.js', color: 'tag-purple' },
            { label: 'Vite', color: 'tag-orange' }
        ],
        buttons: [
            { label: 'View on GitHub', href: 'https://github.com/lohit555/SafeGuard' },
            { label: 'Live Demo', href: 'https://fall-guard-nine.vercel.app/' }
        ]
    },
    {
        image: 'Catan.png',
        title: 'Catan - Board Game Simulator with AI Agent',
        badges: [
            { text: 'McMaster University &middot; Jan 2026 - Mar 2026' }
        ],
        pitch: 'Catan is a Java-based board game simulator built as a team project, modeling resource management, trading, and the Robber mechanic with an AI-driven computer player.',
        action: "Implemented the AI's decision-making using the Strategy pattern and designed the full UML class diagram in Eclipse Papyrus.",
        tags: [
            { label: 'Java', color: 'tag-orange' },
            { label: 'JUnit', color: 'tag-blue' },
            { label: 'Eclipse Papyrus', color: 'tag-purple' },
            { label: 'UML', color: 'tag-yellow' }
        ],
        buttons: [
            { label: 'View on GitHub', href: 'https://github.com/lohit555/Catan' },
            { label: 'Watch Demo', href: 'https://youtu.be/I_Pxknsg1I0' }
        ]
    },
    {
        image: 'RivalRefs.png',
        title: 'RivalRefs - AI Football Commentary Web App',
        badges: [
            { text: 'Code the Cup Hackathon &middot; Jul 2026' }
        ],
        pitch: 'RivalRefs is an AI football commentary app where two rival AI commentators trade live roast-battle banter over a replay of the 2022 World Cup Final.',
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
            { label: 'View on GitHub', href: 'https://github.com/lohit555/RivalRefs' },
            { label: 'Watch Demo', href: 'https://youtu.be/I3scA103eSU' }
        ]
    },
    {
        image: 'Expecta.png',
        title: 'Expecta - Pregnancy & Nursing Safety Web App',
        badges: [
            { text: '&#129352; 2nd Place', prize: true },
            { text: 'Cursor Hackathon &middot; Jul 2026' }
        ],
        pitch: 'Expecta is an AI-powered pregnancy and breastfeeding safety app. It scans a barcode or ingredient list and returns a stage-specific Safe, Caution, or Avoid verdict.',
        action: 'Directed the AI-assisted build, defining the safety-verdict logic sourced from ACOG, FDA, CDC, and NIH LactMed.',
        tags: [
            { label: 'React.js', color: 'tag-purple' },
            { label: 'Next.js', color: 'tag-blue' },
            { label: 'TypeScript', color: 'tag-blue' },
            { label: 'Tailwind CSS', color: 'tag-green' }
        ],
        buttons: [
            { label: 'View on GitHub', href: 'https://github.com/lohit555/Expecta' },
            { label: 'Live Demo', href: 'https://cursor-hackathon-july-2026-nine.vercel.app/' }
        ]
    },
    {
        image: 'RivalRuns.png',
        title: 'RivalRuns - Gesture-Controlled Two-Player Runner Game',
        badges: [
            { text: '&#129352; 2nd Place', prize: true },
            { text: 'Hack the Valley &middot; Jul 2026' }
        ],
        pitch: 'RivalRuns is a two-player, two-laptop endless runner using full-body motion tracking, where one player dodges obstacles while a rival places them in real time using hand gestures.',
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
            { label: 'View on GitHub', href: 'https://github.com/lohit555/RivalRuns' }
        ]
    }
];

const showcaseImage = document.getElementById('showcaseImage');
const showcaseNumber = document.getElementById('showcaseNumber');
const showcaseTitle = document.getElementById('showcaseTitle');
const showcaseSubheader = document.getElementById('showcaseSubheader');
const showcasePitch = document.getElementById('showcasePitch');
const showcaseAction = document.getElementById('showcaseAction');
const showcaseTags = document.getElementById('showcaseTags');
const showcaseButtons = document.getElementById('showcaseButtons');
const showcaseDots = document.getElementById('showcaseDots');
const showcaseMedia = document.querySelector('.showcase-media');

let currentProject = 0;
let rotationTimer = null;

function renderProject(index) {
    const project = projects[index];

    showcaseImage.src = project.image;
    showcaseImage.alt = project.title + ' screenshot';
    showcaseNumber.textContent = index + 1;
    showcaseTitle.textContent = project.title;

    showcaseSubheader.innerHTML = project.badges.map(badge =>
        `<span class="project-badge${badge.prize ? ' project-badge-prize' : ''}">${badge.text}</span>`
    ).join('');

    showcasePitch.textContent = project.pitch;
    showcaseAction.textContent = project.action;

    showcaseTags.innerHTML = project.tags.map(tag =>
        `<span class="tag ${tag.color}">${tag.label}</span>`
    ).join('');

    showcaseButtons.innerHTML = project.buttons.map(btn =>
        `<a href="${btn.href}" target="_blank" class="card-link">${btn.label}</a>`
    ).join('');

    document.querySelectorAll('.showcase-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToProject(index) {
    currentProject = index;
    showcaseMedia.parentElement.classList.remove('showcase-fade');
    void showcaseMedia.parentElement.offsetWidth;
    showcaseMedia.parentElement.classList.add('showcase-fade');
    renderProject(currentProject);
}

function nextProject() {
    goToProject((currentProject + 1) % projects.length);
}

function startRotation() {
    rotationTimer = setInterval(nextProject, 5000);
}

function stopRotation() {
    clearInterval(rotationTimer);
}

projects.forEach((project, i) => {
    const dot = document.createElement('button');
    dot.className = 'showcase-dot';
    dot.setAttribute('aria-label', 'Show project ' + (i + 1) + ': ' + project.title);
    dot.addEventListener('click', () => {
        goToProject(i);
        stopRotation();
        startRotation();
    });
    showcaseDots.appendChild(dot);
});

renderProject(currentProject);
startRotation();

const showcaseEl = document.querySelector('.project-showcase');
showcaseEl.addEventListener('mouseenter', stopRotation);
showcaseEl.addEventListener('mouseleave', startRotation);