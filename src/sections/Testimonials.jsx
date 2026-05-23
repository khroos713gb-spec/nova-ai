import Container from "../components/Container";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 text-white">
      <Container>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Loved By Creators
          </h2>

          <p className="text-slate-400">
            Thousands of users generate content daily with Nova AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center font-bold mb-4">
              SJ
            </div>

            <p className="text-violet-400 mb-4">
              5/5 Rating
            </p>

            <p className="text-slate-300 mb-6">
              Nova AI helps us create blog content in minutes instead of hours.
            </p>

            <h4 className="font-bold">
              Sarah Johnson
            </h4>

            <p className="text-slate-500 text-sm">
              Marketing Manager
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-bold mb-4">
              MB
            </div>

            <p className="text-violet-400 mb-4">
              5/5 Rating
            </p>

            <p className="text-slate-300 mb-6">
              The AI output quality is amazing and saves our team a lot of time.
            </p>

            <h4 className="font-bold">
              Michael Brown
            </h4>

            <p className="text-slate-500 text-sm">
              Startup Founder
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="w-14 h-14 rounded-full bg-pink-600 flex items-center justify-center font-bold mb-4">
              ED
            </div>

            <p className="text-violet-400 mb-4">
              5/5 Rating
            </p>

            <p className="text-slate-300 mb-6">
              Best AI writing assistant we've tested so far.
            </p>

            <h4 className="font-bold">
              Emily Davis
            </h4>

            <p className="text-slate-500 text-sm">
              Content Strategist
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default Testimonials;
