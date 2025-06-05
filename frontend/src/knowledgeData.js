// Example data structure
const videoRows = [
  {
    title: "Tech Videos",
    items: [
      { id: 1, title: "Cloud Basics", type: "video" },
      { id: 2, title: "Cybersecurity 101", type: "video" },
      { id: 3, title: "AI in Banking", type: "video" },
    ],
  },
  {
    title: "Career Progression",
    items: [
      { id: 4, title: "Leadership Skills", type: "video" },
      { id: 5, title: "Mentorship Stories", type: "video" },
    ],
  },
  {
    title: "Personal Development",
    items: [
      { id: 10, title: "Time Management", type: "video" },
      { id: 11, title: "Effective Communication", type: "video" },
    ],
  },
];

const articleRows = [
  {
    title: "Cyber & FinCrime Articles",
    items: [
      { id: 6, title: "Preventing Phishing Attacks", url: "#", type: "article" },
      { id: 7, title: "AML Best Practices", url: "#", type: "article" },
    ],
  },
  {
    title: "Tech Insights",
    items: [
      { id: 8, title: "Cloud Migration in Banks", url: "#", type: "article" },
      { id: 9, title: "Open Banking APIs", url: "#", type: "article" },
    ],
  },
  {
    title: "Career Development",
    items: [
      { id: 12, title: "Resume Writing Tips", url: "#", type: "article" },
      { id: 13, title: "Interview Preparation", url: "#", type: "article" },
    ],
  },
];

export { videoRows, articleRows };
