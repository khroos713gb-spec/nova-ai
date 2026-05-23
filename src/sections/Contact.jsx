import Container from "../components/Container";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-black text-white"
    >
      <Container>

        <div className="max-w-3xl mx-auto text-center mb-12">

          <h2 className="text-5xl font-bold mb-4">
            Get Started Today
          </h2>

          <p className="text-slate-400">
            Join thousands of creators using Nova AI.
          </p>

        </div>

        <div className="max-w-2xl mx-auto">

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
            ></textarea>

            <button
              className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
};

export default Contact;
