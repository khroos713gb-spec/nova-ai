import Container from "../components/Container";

const FAQ = () => {
  return (
    <section className="py-24 bg-black text-white">
      <Container>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400">
            Everything you need to know about Nova AI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold mb-2">
              Is Nova AI beginner friendly?
            </h3>

            <p className="text-slate-400">
              Yes. Anyone can generate content within minutes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold mb-2">
              Can I use generated content commercially?
            </h3>

            <p className="text-slate-400">
              Yes. All generated content can be used for business purposes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold mb-2">
              Do you offer team plans?
            </h3>

            <p className="text-slate-400">
              Yes. Business plans include collaboration features.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default FAQ;
