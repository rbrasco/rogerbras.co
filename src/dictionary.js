const info = {
  "title": "Learn Code",
  "author":{
    "name": "Roger",
    "study": "Mathmatics"
  },
  "codes":["Reactjs", "JAVA", "C family", "Python"],
  "contact":{
    "instagram": "brascoroger",
    "mail": "brascoroger@gmail.com"
  },
  "codes2":["Reactjs", "JAVA", "C family", "Python"],
  "codes3":["Reactjs", "JAVA", "C family", "Python"],
  "codes4":["Reactjs", "JAVA", "C family", "Python"],
};
const personal = {
  "title": "ada",
  "author":{
    "name": "Roger",
    "study": "Mathaskdfmatics"
  },
  "codes":["Reactjs", "JAVA", "C family", "Python"],
  "contact":{
    "instagram": "mamlut",
    "mail": "brascoroger@gmail.com"
  }
};

const dict = {
  "info": info,
  "personal": personal,
  "teaching": info,
  "experience": personal,
  "contact": info,

};

const paths = {
  "info": {"dir": "homepage", "key": "info", "label": "info.yml"},
  "personal": {"dir": "aboutme", "key": "personal", "label": "personal.yml"},
  "teaching": {"dir": "teaching", "key": "teaching", "label": "teaching.yml"},
  "experience": {"dir": "aboutme", "key": "experience", "label": "experience.yml"},
  "contact": {"dir": "contact", "key": "contact", "label": "contact.yml"},

}

export {dict, paths};