import { Award, Zap } from "lucide-react";

const activities = [
  {
    title: "Coding Wise Hackathon",
    description: "Participated in Coding Wise hackathon – Certificate received",
    date: "Mar 2024",
    icon: Award,
  },
  {
    title: "24 Hours Hackathon",
    description:
      "Participated in 24-hour hackathon focused on building interactive website design",
    date: "Feb 2025",
    icon: Zap,
  },
];

export const ExtraCurricular = () => {
  return (
    <section id="extra-curricular" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Extra-Curricular{" "}
            <span className="text-primary glow-text">Activities</span>
          </h2>

          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          <p className="text-muted-foreground mt-6">
            Active participation in hackathons and coding competitions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 opacity-40" />

          <div className="space-y-16">
            {activities.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } animate-fade-in`}
              >
                {/* Card */}
                <div className="w-[45%] glass rounded-2xl p-6 relative group hover:scale-[1.02] transition-all duration-300">
                  {/* Date badge */}
                  <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                    {item.date}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg" />

                {/* Empty Space */}
                <div className="w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
