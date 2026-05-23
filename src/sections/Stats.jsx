import Container from "../components/Container";

const Stats = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <Container>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold text-violet-500 mb-2">
              50K+
            </h3>
            <p className="text-slate-400">
              Active Users
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-500 mb-2">
              1M+
            </h3>
            <p className="text-slate-400">
              AI Generations
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-green-500 mb-2">
              99.9%
            </h3>
            <p className="text-slate-400">
              Uptime
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-pink-500 mb-2">
              4.9/5
            </h3>
            <p className="text-slate-400">
              Customer Rating
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default Stats;
