// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#072C71] shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* LOGO */}
        <a href="#top">
          <img
            src={logo}
            alt="Consultoria ANTT e AET"
            className="h-12 w-auto"
          />
        </a>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6">

          {/* ICONES */}
          <div className="flex items-center gap-4 text-[#F7C600] text-xl">
            <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank"><FaTiktok /></a>
          </div>

          {/* BOTÃO */}
          <a
            href="https://wa.me/5567992622917"
            target="_blank"
            className="bg-green-500 text-white font-medium px-4 py-2 rounded-full hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-3xl"
        >
          <HiOutlineMenu />
        </button>
      </nav>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">

          <div className="w-64 bg-white h-full p-6 shadow-xl animate-slide-left">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-blue-700 mb-6"
            >
              <HiX />
            </button>

            <ul className="space-y-6 text-gray-700 text-lg font-medium">
              <li><a href="#top" onClick={() => setMenuOpen(false)}>Início</a></li>
              <li><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a></li>
              <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
            </ul>

            {/* Redes sociais mobile */}
            <div className="flex gap-4 text-2xl text-[#072C71] mt-10">
              <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
              <a href="https://tiktok.com" target="_blank"><FaTiktok /></a>
            </div>

            <a
              href="https://wa.me/5567992622917"
              target="_blank"
              className="block mt-10 bg-green-500 text-white text-center py-3 rounded-full font-semibold text-lg"
            >
              WhatsApp
            </a>
          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;
