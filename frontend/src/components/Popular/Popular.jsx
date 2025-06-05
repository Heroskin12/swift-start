const articles = [
  {
    title: "Getting Started with Our Platform",
    summary:
      "A step-by-step guide to help you navigate and use our platform efficiently.",
    url: "https://confluence.example.com/display/ART/Getting+Started+with+Our+Platform",
    recommendedReason: "Based on your recent onboarding activity.",
  },
  {
    title: "Best Practices for Remote Collaboration",
    summary: "Tips and tools for effective teamwork in a remote environment.",
    url: "https://confluence.example.com/display/ART/Best+Practices+for+Remote+Collaboration",
    recommendedReason: "You frequently join remote meetings.",
  },
  {
    title: "Design System Overview",
    summary: "Learn about our design principles and reusable components.",
    url: "https://confluence.example.com/display/ART/Design+System+Overview",
    recommendedReason: "You are involved in UI/UX projects.",
  },
  {
    title: "API Integration Guide",
    summary: "How to connect and use our APIs for your projects.",
    url: "https://confluence.example.com/display/ART/API+Integration+Guide",
    recommendedReason: "You recently accessed developer resources.",
  },
  {
    title: "Company Values and Culture",
    summary: "Understand our core values and what makes our culture unique.",
    url: "https://confluence.example.com/display/ART/Company+Values+and+Culture",
    recommendedReason: "Recommended for all new employees.",
  },
];

export default function Popular() {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Recommended Articles for You</h2>
      <ul className="space-y-4">
        {articles.map((article, idx) => (
          <li key={idx} className="border-b pb-4 last:border-b-0">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-700 hover:underline flex items-center gap-2"
            >
              {article.title}
            </a>
            <p className="text-gray-600 text-sm mt-1">{article.summary}</p>
            <span className="text-xs text-gray-500 italic">
              {article.recommendedReason}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
