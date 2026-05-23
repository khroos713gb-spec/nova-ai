import Container from "../components/Container";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <Container>

        <div className="h-20 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-white">
            Nova AI
          </h1>

          <ul className="hidden md:flex items-center gap-8 text-slate-300">

            <li>
              <a href="#features" className="hover:text-white transition-all duration-300">
                Features
              </a>
            </li>

            <li>
              <a href="#pricing" className="hover:text-white transition-all duration-300">
                Pricing
              </a>
            </li>

            <li>
              <a href="#testimonials" className="hover:text-white transition-all duration-300">
                Reviews
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white transition-all duration-300">
                Contact
              </a>
            </li>

          </ul>

          <button className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300">
            Start Free Trial
          </button>

        </div>

      </Container>
    </nav>
  );
};

export default Navbar;
