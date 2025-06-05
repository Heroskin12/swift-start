import stockImage from "../../assets/Thumbnail.png";

export default function KnowledgeRow({ title, items, type }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3 px-2">{title}</h2>
      <div className="flex overflow-x-auto gap-4 px-2">
        {items.map((item) =>
          type === "video" ? (
            <div
              key={item.id}
              className="min-w-[220px] bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={stockImage}
                alt={item.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-3">
                <div className="font-medium">{item.title}</div>
                <div className="text-xs text-gray-500 mt-1">Video</div>
              </div>
            </div>
          ) : (
            <a
              key={item.id}
              href={item.url}
              className="min-w-[220px] bg-blue-50 border border-blue-200 rounded-lg flex flex-col justify-center items-center p-4 hover:bg-blue-100 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="font-medium text-blue-800">{item.title}</div>
              <div className="text-xs text-blue-500 mt-1">Article</div>
            </a>
          )
        )}
      </div>
    </div>
  );
}
