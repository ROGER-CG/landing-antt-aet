// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white">

      {/* SEÇÃO PRINCIPAL */}
      <div className="bg-[#0A3A8A] pt-14 pb-10 px-6">

        <div
          className="
            max-w-6xl mx-auto 
            grid grid-cols-1 md:grid-cols-3 
            gap-12
            md:px-10
          "
        >

          {/* CONSULTORIA */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Consultoria em Licenças</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Especializados em Cadastros ANTT, emissões de AET e regularizações
              para transportadores. Atendimento rápido e profissional.
            </p>
          </div>

          {/* NAVEGAÇÃO — ajustado para a direita */}
          <div className="md:pl-20"> 
            <h4 className="font-semibold text-lg mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-left">
              <li><a href="#top" className="text-gray-300 hover:text-white transition">Início</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition">Serviços</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Contato</h4>

            <p className="text-gray-300 text-sm mb-2">
              WhatsApp:
              <a
                href="https://wa.me/5567992622917"
                target="_blank"
                className="text-white hover:text-yellow-300 ml-1 transition"
              >
                (67) 99262-2917
              </a>
            </p>

            <p className="text-gray-300 text-sm mb-4">
              WhatsApp:
              <a
                href="https://wa.me/5567999274775"
                target="_blank"
                className="text-white hover:text-yellow-300 ml-1 transition"
              >
                (67) 99927-4775
              </a>
            </p>

            <p className="text-gray-300 text-sm mb-6">
              Email: suporteantt360@gmail.com
            </p>

            <div className="flex gap-4 text-xl">
              <a href="https://www.facebook.com/profile.php?id=61569336297752" target="_blank" className="hover:text-yellow-300 transition"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" className="hover:text-yellow-300 transition"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@consultoria_antt_e_aet" target="_blank" className="hover:text-yellow-300 transition"><FaTiktok /></a>
              <a href="https://wa.me/5567992622917" target="_blank" className="hover:text-yellow-300 transition"><FaWhatsapp /></a>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#072C71] text-center py-5">
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Consultoria ANTT & AET. Todos os direitos reservados • Desenvolvido por Alan Roger
        </p>
      </div>

    </footer>
  );
};

export default Footer;
