 function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      {[
        {
          title: "Symptoms",
          desc: "Ask about symptoms and their possible causes",
        },
        {
          title: "Prevention",
          desc: "Learn about disease prevention and healthy habits",
        },
        {
          title: "General Info",
          desc: "Get information about medical conditions",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`p-4 border rounded-lg backdrop-blur-sm ${
            idx === 0
              ? "bg-red-950/50 border-red-800/30"
              : idx === 1
              ? "bg-red-950/30 border-red-800/20"
              : "bg-red-950/40 border-red-800/25"
          }`}
        >
          <h3 className="font-semibold text-red-300 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-400">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

