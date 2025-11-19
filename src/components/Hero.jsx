// src/components/Hero.jsx
import React from "react";
import caminhao from "../assets/caminhao.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[90vh] md:h-[95vh] flex items-center"
      style={{
        backgroundImage: `url(${caminhao})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* OVERLAY GRADIENTE */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#072C71]/90 via-[#072C71]/70 to-transparent"></div>

      {/* CONTEÚDO */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Emissão rápida e segura
            <br />
            <span className="text-yellow-300">de ANTT & AET</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mt-6 mb-10 leading-relaxed">
            Regularização profissional de documentos de transporte.
            Processo ágil, seguro e atendimento direto pelo WhatsApp.
          </p>

          <a
            href="https://wa.me/5567992622917"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 transition-all text-white font-semibold py-3 px-10 rounded-full shadow-xl text-lg"
          >
            Falar no WhatsApp
          </a>

        </div>
      </div>

    </section>
  );
};

export default Hero;
