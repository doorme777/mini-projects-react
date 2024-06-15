const profiles = [
  {
    image: 'https://www.w3schools.com/w3images/avatar2.png',
    name: 'John Doe',
    job: 'Software Engineer',
    description:
      'I am a software engineer with 10 years of experience in the industry. I have worked on various projects and have a good understanding of different technologies.',
  },
  {
    image: 'https://www.w3schools.com/w3images/avatar6.png',
    name: 'Jane Doe',
    job: 'Web Developer',
    description:
      'I am a web developer with 5 years of experience in the industry. I have worked on various projects and have a good understanding of different technologies.',
  },
  {
    image: 'https://www.w3schools.com/w3images/avatar3.png',
    name: 'Alice Doe',
    job: 'Data Scientist',
    description:
      'I am a data scientist with 3 years of experience in the industry. I have worked on various projects and have a good understanding of different technologies',
  },
];

const numberRandom = (number) => {
  return Math.floor(Math.random() * number);
};

export { profiles, numberRandom };
