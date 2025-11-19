// src/components/Contact.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contato"
      className="py-24 px-6 text-center"
      style={{
        background: "linear-gradient(135deg, #0A3A8A 0%, #072C71 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-white">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Fale agora com nossa equipe
        </h2>

        {/* SUBTÍTULO */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          Tire suas dúvidas, solicite o cadastro ANTT ou peça sua emissão de AET
          com atendimento rápido e direto pelo WhatsApp.
        </p>

        {/* BOTÃO */}
        <a
          href="https://wa.me/5567992622917"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 transition-all 
                     text-white font-semibold text-lg py-4 px-10 rounded-full shadow-xl 
                     hover:scale-[1.03]"
        >
          <MessageCircle size={26} strokeWidth={1.7} />
          Falar no WhatsApp
        </a>

        {/* SELINHO */}
        <div className="mt-6 text-gray-300 text-sm">
          Atendimento rápido • Resposta imediata
        </div>

      </div>
    </section>
  );
};

export default Contact;
