// src/components/Services.jsx
import React from "react";
import { BadgeCheck, FileCheck, RefreshCcw } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BadgeCheck size={40} strokeWidth={1.5} className="text-blue-600" />,
      title: "Cadastro ANTT",
      desc: "Realizamos o cadastro completo de empresas e transportadores com rapidez e sem burocracia.",
    },
    {
      icon: <FileCheck size={40} strokeWidth={1.5} className="text-blue-600" />,
      title: "Emissão de AET",
      desc: "Emitimos sua Autorização Especial de Trânsito com agilidade, evitando atrasos nas viagens.",
    },
    {
      icon: <RefreshCcw size={40} strokeWidth={1.5} className="text-blue-600" />,
      title: "Renovação e Atualização",
      desc: "Renovamos e atualizamos documentos para manter tudo em conformidade com a legislação.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="servicos">
      {/* TÍTULO */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center mb-14">
        Nossos Serviços
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
              {service.title}
            </h3>

            <p className="text-gray-600 text-base text-center leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;
