import Header from "../components/Reusables/Headers/HomeHeader/Header";
import KnowledgeRow from "../components/KnowledgeRow/KnowledgeRow";

const videoRows = [
  {
    title: "Tech Videos",
    items: [
      { id: 1, title: "Cloud Basics", type: "video" },
      { id: 2, title: "Cybersecurity 101", type: "video" },
      { id: 3, title: "AI in Banking", type: "video" },
      { id: 4, title: "DevOps for Beginners", type: "video" },
      { id: 5, title: "Data Privacy Essentials", type: "video" },
      { id: 6, title: "Blockchain in Finance", type: "video" },
      { id: 7, title: "APIs Explained", type: "video" },
      { id: 8, title: "Cloud Security", type: "video" },
      { id: 9, title: "Machine Learning Basics", type: "video" },
      { id: 10, title: "Quantum Computing Overview", type: "video" },
      { id: 11, title: "Zero Trust Security", type: "video" },
      { id: 12, title: "Mobile Banking Trends", type: "video" },
      { id: 13, title: "Digital Identity", type: "video" },
      { id: 14, title: "API Security", type: "video" },
    ],
  },
  {
    title: "Career Progression",
    items: [
      { id: 15, title: "Leadership Skills", type: "video" },
      { id: 16, title: "Mentorship Stories", type: "video" },
      { id: 17, title: "Effective Communication", type: "video" },
      { id: 18, title: "Time Management", type: "video" },
      { id: 19, title: "Personal Branding", type: "video" },
      { id: 20, title: "Interview Techniques", type: "video" },
      { id: 21, title: "Networking for Success", type: "video" },
    ],
  },
];

const articleRows = [
  {
    title: "Cyber & FinCrime Articles",
    items: [
      {
        id: 22,
        title: "Preventing Phishing Attacks",
        url: "#",
        type: "article",
      },
      { id: 23, title: "AML Best Practices", url: "#", type: "article" },
      {
        id: 24,
        title: "Fraud Detection in Banking",
        url: "#",
        type: "article",
      },
      {
        id: 25,
        title: "Ransomware Response Guide",
        url: "#",
        type: "article",
      },
      {
        id: 26,
        title: "Insider Threats Explained",
        url: "#",
        type: "article",
      },
      { id: 27, title: "KYC Compliance Tips", url: "#", type: "article" },
    ],
  },
  {
    title: "Tech Insights",
    items: [
      { id: 28, title: "Cloud Migration in Banks", url: "#", type: "article" },
      { id: 29, title: "Open Banking APIs", url: "#", type: "article" },
      { id: 30, title: "The Future of FinTech", url: "#", type: "article" },
      {
        id: 31,
        title: "Legacy System Modernization",
        url: "#",
        type: "article",
      },
      {
        id: 32,
        title: "Data Analytics in Finance",
        url: "#",
        type: "article",
      },
    ],
  },
  {
    title: "Career Development",
    items: [
      { id: 33, title: "Resume Writing Tips", url: "#", type: "article" },
      {
        id: 34,
        title: "Interview Preparation",
        url: "#",
        type: "article",
      },
      {
        id: 35,
        title: "Upskilling for the Digital Age",
        url: "#",
        type: "article",
      },
      {
        id: 36,
        title: "Remote Work Best Practices",
        url: "#",
        type: "article",
      },
    ],
  },
];

export default function Knowledge() {
  return (
    <div className="bg-light-primary min-h-screen">
      <h1 className="font-semibold text-2xl text-dark-primary">
        Upcoming Recommended Events
      </h1>
      <p className="font-light text-text-secondary mb-4">
        Here we draw on multiple sources to bring you trainings, workshops and
        events from Barclays worldwide based on your roles, skills and
        interests.
      </p>
      <div className="max-w-6xl mx-auto py-8">
        {videoRows.map((row) => (
          <KnowledgeRow
            key={row.title}
            title={row.title}
            items={row.items}
            type="video"
          />
        ))}
        {articleRows.map((row) => (
          <KnowledgeRow
            key={row.title}
            title={row.title}
            items={row.items}
            type="article"
          />
        ))}
      </div>
    </div>
  );
}
