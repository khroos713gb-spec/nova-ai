import Container from "../components/Container";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-32 bg-black text-white"
    >
      <Container>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Flexible Pricing
          </h2>

          <p className="text-slate-400">
            Scale your content creation with the perfect AI plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Starter
            </h3>

            <div className="text-5xl font-bold mb-6">
              $9
              <span className="text-lg text-slate-400">
                /month
              </span>
            </div>

            <ul className="space-y-3 text-slate-300 mb-8">
              <li>10 AI Generations</li>
              <li>Basic Templates</li>
              <li>Email Support</li>
              <li>Content History</li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-white text-black font-semibold">
              Get Started
            </button>
          </div>

          <div className="p-8 rounded-3xl border border-violet-500 bg-gradient-to-b from-violet-600/20 to-violet-900/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <span className="inline-block px-4 py-2 rounded-full bg-violet-600 text-sm mb-4">
              Most Popular
            </span>

            <h3 className="text-2xl font-bold mb-4">
              Pro
            </h3>

            <div className="text-5xl font-bold mb-6">
              $29
              <span className="text-lg text-slate-400">
                /month
              </span>
            </div>

            <ul className="space-y-3 text-slate-300 mb-8">
              <li>Unlimited Content</li>
              <li>SEO Optimization</li>
              <li>Analytics Dashboard</li>
              <li>Priority Support</li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition-all duration-300">
              Start Free Trial
            </button>

          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">
              Business
            </h3>

            <div className="text-5xl font-bold mb-6">
              $99
              <span className="text-lg text-slate-400">
                /month
              </span>
            </div>

            <ul className="space-y-3 text-slate-300 mb-8">
              <li>Custom AI Models</li>
              <li>Team Access</li>
              <li>Dedicated Manager</li>
              <li>24/7 Support</li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-white text-black font-semibold">
              Contact Sales
            </button>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Pricing;
