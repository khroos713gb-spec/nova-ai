import Container from "../components/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-violet-950 via-slate-950 to-black text-white">
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
<Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
              ? Trusted By 10,000+ Creators
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Create Content
              <span className="text-violet-400"> 10x Faster </span>
              With AI
            </h1>

            <p className="text-slate-300 text-lg mb-8">
              Generate blogs, emails, ads and social media content in seconds using powerful AI automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <button className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition-all duration-300">
                Start Free Trial
              </button>

              <button className="px-6 py-3 rounded-xl border border-white/20">
                Watch Demo
              </button>

            </div>

          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-6">

            <p className="text-slate-300 mb-3">
              Prompt
            </p>

            <div className="bg-black/30 rounded-xl p-4 mb-6">
              Write a blog about React.js
            </div>

            <p className="text-slate-300 mb-3">
              AI Output
            </p>

            <div className="space-y-3">

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                Blog Generated
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                1200 Words
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                SEO Optimized
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                Ready To Publish
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Hero;


