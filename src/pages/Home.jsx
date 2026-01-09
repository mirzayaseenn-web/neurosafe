import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/BlueGradient.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#061928]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <h1 className="text-white text-2xl md:text-4xl font-bold leading-relaxed">
          NeuroSafe: A Federated Learning System for
          <br />
          <span className="text-[#cfe9ff]">
            Privacy-Preserving Brain Tumor Diagnosis
          </span>
        </h1>

        {/* Logo */}
        <div className="flex justify-center mt-10">
          <img
            src="/NeroSafe Logo-01.png"
            alt="NeuroSafe Logo"
            className="w-40 md:w-56 drop-shadow-lg"
          />
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/detection"
            className="px-8 py-3 rounded-full bg-white text-[#013c5d] font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Detection
          </Link>

          <Link
            to="/about"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#013c5d] transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
