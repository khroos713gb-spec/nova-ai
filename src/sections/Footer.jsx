import Container from "../components/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/10 text-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">Nova AI</h3>
            <p className="text-slate-400">
              AI content creation made simple.
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="flex gap-5 text-2xl">
            <a href="https://github.com/khroos713gb-spec" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://github.com/khroos713gb-spec" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="text-center text-slate-500 mt-8">
          Nova AI 2026. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

