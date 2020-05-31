const info = {
  'title': 'About me',
  'author':{
    'name': 'Roger',
    'study': 'Mathmatics',
  },
  'strong points':['Responsible', 'Persistent', 'Hard-working', 'Learning facility'],
  'motivations': ['Eager to start new projects', 'Step out my comfort zone'],
  'skills':{
    'team-wise': 'Great communication and networking skills. Comfortable workingin a team environment',
    'personal-wise': 'Ability to not crack under pressure',
  },
  'coding knowladge':['Python, Selenium webdriver', 'Reactjs, JavaScript, HTML, CSS & SASS', 'JAVA', 'C family'],
};

const experience = {
  'title': 'Work experience by importance',
  'top':{
    'company': 'Scytl',
    'position': 'Software developer intern',
    'duration': '1 year',
    'job':['Took part in the team of managers on the services Bitbucket, Jira, Jenkins and Nexus', 'Continuous integration and process automation scripts', 'Fullstack developer in Internal Tools team'],
  },
  'mid':{
    'company': 'Snorkel DC',
    'position': 'Divemaster',
    'duration': '4 months',
    'job':['Diving guide', 'Shop attendant'],
  },
  'low':{
    'company': 'ICM CSIC',
    'position': 'Electronic technic intern',
    'duration': '2 months',
    'job':['Provided help to the technical team of the Technology Laboratory in ICM CSIC Biology Institute'],
  },
};

const education = {
  'title': 'Education level and lenguages',
  'Field studies':{
    'university': 'Universitat de Barcelona',
    'degree': 'Mathematics',
    'duration': '2016 - Present',
  },
  'Professional studies': {
    'organization': 'PADI',
    'level': 'Divemaster',
    'issued_date': '2017',
  },
  'Health studies': {
    'organization': 'Rescatadores SL',
    'degree': 'Beach Lifeguard',
    'issued_date': '2016',
  },
  'lenguages':{
    'catalan': 'Native',
    'spanish': 'Native',
    'english': 'Advanced',
  },
};

const contact = {
  'title': 'Please contact me from the options below',
  'home': 'Barcelona',
  'mail': 'brascoroger@gmail.com',
  'linkedIn': 'linkedin.com/in/roger-brasco-garces',
};

const dict = {
  'info': info,
  'experience': experience,
  'education': education,
  'teaching': info,
  'contact': contact,
};

const paths = {
  'info': { 'dir': 'about.me', 'key': 'info', 'label': 'info.yml' },
  'experience': { 'dir': 'work', 'key': 'experience', 'label': 'experience.yml' },
  'education': { 'dir': 'accomplishment', 'key': 'education', 'label': 'education.yml' },
  'teaching': { 'dir': 'teaching', 'key': 'teaching', 'label': 'teaching.yml' },
  'contact': { 'dir': 'for.you', 'key': 'contact', 'label': 'contact.yml' },
};

export { dict, paths };
