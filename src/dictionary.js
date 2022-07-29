const info = {
  Title: "About me",
  Author: {
    Name: "Roger",
    Study: "Mathematics",
  },
  "Strong points": [
    "Responsible",
    "Persistent",
    "Hard-working",
    "Learning facility",
  ],
  Motivations: ["Eager to start new projects", "To step out my comfort zone"],
  Skills: {
    "Team-wise":
      "Great communication and networking skills. Comfortable working in a team environment",
    "Personal-wise": "Ability to not crack under pressure",
  },
  "Coding knowladge": [
    "Python, Selenium, Django, Web Scrapping",
    "Reactjs, JavaScript, HTML, CSS & SASS",
    "JAVA",
    "C family",
  ],
};

function getDaysInMonth(month, year) {
  if (typeof year == "undefined") year = 1999; // any non-leap-year works as default
  var currmon = new Date(year, month),
    nextmon = new Date(year, month + 1);
  return Math.floor(
    (nextmon.getTime() - currmon.getTime()) / (24 * 3600 * 1000)
  );
}
function getDateTimeSince(target) {
  // target should be a Date object
  let now = new Date(),
    yd,
    md,
    dd,
    hd,
    nd,
    sd,
    out = [];

  yd = now.getFullYear() - target.getFullYear();
  md = now.getMonth() - target.getMonth();
  dd = now.getDate() - target.getDate();
  hd = now.getHours() - target.getHours();
  nd = now.getMinutes() - target.getMinutes();
  sd = now.getSeconds() - target.getSeconds();

  if (md < 0) {
    yd--;
    md += 12;
  }
  if (dd < 0) {
    md--;
    dd += getDaysInMonth(now.getMonth() - 1, now.getFullYear());
  }
  if (hd < 0) {
    dd--;
    hd += 24;
  }
  if (nd < 0) {
    hd--;
    nd += 60;
  }
  if (sd < 0) {
    nd--;
    sd += 60;
  }

  if (yd > 0) out.push(yd + " yr" + (yd === 1 ? "" : "s"));
  if (md > 0) out.push(md + " mo" + (md === 1 ? "" : "s"));
  return out.join(" ") || "1 mo";
}

const experience = {
  Title: "Work experience by relevance",
  Current: {
    Company: "mlean",
    Position: "Junior DevOps Engineer",
    Duration: `Jul 2022 - Present (${getDateTimeSince(new Date(2022, 6, 1))})`,
    // Job: [
    //   "Define and manage the development of new features of sold products",
    //   "Carry out training to the overseas operations team",
    // ],
  },
  Top: {
    Company: "Shalion",
    Position: "Junior Product Manager",
    Duration: `Dec 2021 - Jul 2022 (8 mos)`,
    Job: [
      "Define and manage the development of new features of sold products",
      "Carry out training to the overseas operations team",
    ],
  },
  Mid: {
    Company: "Shalion",
    Position: "Research & Development intern",
    Duration: " Feb 2021 - Dec 2021 (11 mos)",
    Job: [
      "Develop automation scripts for the operations team",
      "Start products that are sold to clients",
      "Technical support to the operations team",
      "Look for bugs in code",
    ],
  },
  Low: {
    Company: "Scytl",
    Position: "Software developer intern",
    Duration: "Jun 2019 - May 2020 (1 yr)",
    Job: [
      "Took part in the team of managers on the services Bitbucket, Jira, Jenkins, and Nexus",
      "Continuous integration and process automation scripts",
      "Fullstack developer on the Internal Tools team",
    ],
  },
  "Other-league": {
    Company: "Snorkel DC",
    Position: "Divemaster",
    Duration: "4 months",
    Job: ["Diving guide"],
  },
};

const education = {
  Title: "Education level and languages",
  "Field studies": {
    University: "Universitat de Barcelona",
    Degree: "Mathematics - Minor in CS",
    Duration: "2016 - 2021",
  },
  "Professional studies": {
    Organization: "PADI",
    Level: "Divemaster",
    "Issued date": "2017",
  },
  "Health studies": {
    Organization: "Rescatadores SL",
    Degree: "Beach Lifeguard",
    "Issued date": "2016",
  },
  Languages: {
    Catalan: "Native",
    Spanish: "Native",
    English: "Advanced",
  },
};

/* const teaching = {
  'Título': 'Aprende a programar',
  'Oferta': 'Realizaremos clases particulares de cualquier lenguaje vía Discord/Skype',
  'Lenguajes': ['Python', 'Familia C', 'Reactjs, Javascript, HTML & CSS', 'Y más...'],
  'Cursos': {
    'Begginer': 'Empieza a programar sin experiencia previa!',
    'Moderate': '¿Quieres ampliar tus conocimientos? Haremos clases de refuerzo des del nivel del alumno',
  },
  'Horario': 'Para acordar con el alumno',
  'Más información': 'Por favor, contactarme desde la opción de la pestaña "contact"',
};*/

const contact = {
  Title: "Please contact me from the options below",
  Mail: "brascoroger@gmail.com",
  Linkedin: "linkedin.com/in/rbrasco",
  Github: "github.com/rbrasco",
  // 'Instagram': 'brascoroger',
};

const dict = {
  info: info,
  experience: experience,
  education: education,
  // 'teaching': teaching,
  contact: contact,
};

const paths = {
  info: {
    dir: "about.me",
    key: "info",
    label: "info.yml",
  },
  experience: {
    dir: "work",
    key: "experience",
    label: "experience.yml",
  },
  education: {
    dir: "accomplishment",
    key: "education",
    label: "education.yml",
  },
  // 'teaching': { 'dir': 'code', 'key': 'teaching', 'label': 'teaching.yml' },
  contact: {
    dir: "for.you",
    key: "contact",
    label: "contact.yml",
  },
};

export { dict, paths };
