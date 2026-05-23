import Container from "../components/Container";
import { FaRobot, FaBolt, FaChartLine, FaPenNib, FaSearch, FaUsers } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaPenNib className="text-4xl text-violet-500" />,
      title: "AI Content Writer",
      description: "Generate blogs, emails and marketing copy instantly.",
    },
    {
      icon: <FaSearch className="text-4xl text-blue-500" />,
      title: "SEO Optimization",
      description: "Create content optimized for search engines.",
    },
    {
      icon: <FaRobot className="text-4xl text-pink-500" />,
      title: "50+ Templates",
      description: "Ready-made templates for every business need.",
    },
    {
      icon: <FaChartLine className="text-4xl text-green-500" />,
      title: "Analytics Dashboard",
      description: "Track content performance and usage statistics.",
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-500" />,
      title: "Team Collaboration",
      description: "Work together with your content team.",
    },
    {
      icon: <FaBolt className="text-4xl text-cyan-500" />,
      title: "Lightning Fast",
      description: "Generate content in seconds with AI.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-slate-950 text-white"
    >
      <Container>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Powerful AI Features
          </h2>

          <p className="text-slate-400">
            Everything you need to create content faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Features;
