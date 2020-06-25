const info = {
  'Title': 'About me',
  'Author':{
    'Name': 'Roger',
    'Study': 'Mathematics',
  },
  'Strong points':['Responsible', 'Persistent', 'Hard-working', 'Learning facility'],
  'Motivations': ['Eager to start new projects', 'To step out my comfort zone'],
  'Skills':{
    'Team-wise': 'Great communication and networking skills. Comfortable working in a team environment',
    'Personal-wise': 'Ability to not crack under pressure',
  },
  'Coding knowladge':['Python, Selenium webdriver', 'Reactjs, JavaScript, HTML, CSS & SASS', 'JAVA', 'C family'],
};

const experience = {
  'Title': 'Work experience by importance',
  'Top':{
    'Company': 'Scytl',
    'Position': 'Software developer intern',
    'Duration': '1 year',
    'Job':['Took part in the team of managers on the services Bitbucket, Jira, Jenkins and Nexus', 'Continuous integration and process automation scripts', 'Fullstack developer on the Internal Tools team'],
  },
  'Mid':{
    'Company': 'Snorkel DC',
    'Position': 'Divemaster',
    'Duration': '4 months',
    'Job':['Diving guide', 'Shop attendant'],
  },
  'Low':{
    'Company': 'ICM CSIC',
    'Position': 'Electronic technician intern',
    'Duration': '2 months',
    'Job':['Provided help to the technical team of the Technology Laboratory in ICM CSIC Biology Institute'],
  },
};

const education = {
  'Title': 'Education level and lenguages',
  'Field studies':{
    'University': 'Universitat de Barcelona',
    'Degree': 'Mathematics',
    'Duration': '2016 - Present',
  },
  'Professional studies': {
    'Organization': 'PADI',
    'Level': 'Divemaster',
    'Issued date': '2017',
  },
  'Health studies': {
    'Organization': 'Rescatadores SL',
    'Degree': 'Beach Lifeguard',
    'Issued date': '2016',
  },
  'Lenguages':{
    'Catalan': 'Native',
    'Spanish': 'Native',
    'Eglish': 'Advanced',
  },
};

const teaching = {
  'Title': 'Learn to code',
  'Offer': 'To teach the following languages via Discord/Skype and live sharing coding app',
  'Languages': ['Python', 'C family', 'Reactjs, Javascript, HTML & CSS', 'And more...'],
  'Courses types': {
    'Beginner': 'Learn from 0 to be able to write any problem on a specific coding language',
    'Moderate': 'Peer to peer tutoring of a specific coding language for school or university level'
  },
  'Schedule': 'To be agreed with the alumn',
  'More info': 'Please, open the contact tab and reach out from any option available there',
}

const contact = {
  'Title': 'Please contact me from the options below',
  'Mail': 'brascoroger@gmail.com',
  'Linkedin': 'linkedin.com/in/rbrasco',
  'Github': 'github.com/rbrasco',
  'Instagram': 'brascoroger',
};

const dict = {
  'info': info,
  'experience': experience,
  'education': education,
  'teaching': teaching,
  'contact': contact,
};

const paths = {
  'info': { 'dir': 'about.me', 'key': 'info', 'label': 'info.yml' },
  'experience': { 'dir': 'work', 'key': 'experience', 'label': 'experience.yml' },
  'education': { 'dir': 'accomplishment', 'key': 'education', 'label': 'education.yml' },
  'teaching': { 'dir': 'code', 'key': 'teaching', 'label': 'teaching.yml' },
  'contact': { 'dir': 'for.you', 'key': 'contact', 'label': 'contact.yml' },
};

export { dict, paths };
