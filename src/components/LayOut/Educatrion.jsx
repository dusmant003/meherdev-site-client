import { GraduationCap, Award, Briefcase } from "lucide-react";

const data = [
  {
    title: "Education",
    icon: <GraduationCap size={28} />,
    items: [
      { name: "BCA - Computer Science", sub: "Sambalpur University", year: "2019 - 2022" },
      { name: "12th Science", sub: "Lambodar college of science", year: "2016 - 2018" },
    ],
  },
  {
    title: "Certification",
    icon: <Award size={28} />,
    items: [
      { name: "Full Stack Development", sub: "MERN Stack", year: "2022" },
      { name: "React Certification", sub: "Frontend Dev", year: "2023" },
    ],
  },
  {
    title: "Work Experience",
    icon: <Briefcase size={28} />,
    items: [
      { name: "Freelancer", sub: "Web Developer", year: "2023 - Present" },
      { name: "Intern", sub: "Frontend Dev", year: "2022 - 2023" },
    ],
  },
];

const Education = () => {
  return (
    <section className="bg-[#0b0f19] py-12 px-6 md:px-20 text-white">

      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <p className="text-green-400 mb-3">● Education & Work</p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Foundation & Growth:
          <span className="block text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 to-cyan-400">
            Education, Certification & Work
          </span>
        </h2>
      </div>

      {/* 🔥 Cards */}
      <div className="grid md:grid-cols-3 gap-10">

        {data.map((card, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl 
            bg-white/5 backdrop-blur-xl border border-white/10

            shadow-[0_10px_30px_rgba(0,0,0,0.6)]
            hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]

            transform hover:-translate-y-4 hover:scale-105
            transition-all duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl 
            bg-gradient-to-r from-purple-500/10 to-cyan-400/10 
            opacity-0 group-hover:opacity-100 blur-xl transition"></div>

            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center 
            rounded-full bg-gradient-to-r from-purple-500 to-cyan-400
            text-black mb-6 shadow-lg">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-6">
              {card.title}
            </h3>

            {/* Items */}
            <div className="space-y-5">
              {card.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center">

                  <div>
                    <p className="text-gray-200 font-medium">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {item.sub}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full 
                  bg-gradient-to-r from-purple-500 to-cyan-400 text-black">
                    {item.year}
                  </span>

                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;