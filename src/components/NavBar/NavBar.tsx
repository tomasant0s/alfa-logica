"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import navicon from "@/assets/navicon.png";
import logo from "@/assets/logo.png";
import Dropdown from "./languageDropdown";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = useTranslations("Navbar");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const options = ["PT","EN"];

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <h1>*Logo*</h1>
            </div>
          </div>
          <div className="hidden md:block text-white">
            <div className="ml-10 flex items-baseline space-x-4">
              <ul className="flex mx-8">
                <li className="hover:bg-white hover:text-black rounded-lg p-2 ">
                  <a href="#home">{t("home")}</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#aboutUs">{t("about")}</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#service">{t("services")}</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#legi">{t("legislation")}</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#clients">{t("clients")}</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#contact">{t("contact")}</a>
                </li>
                <li className="rounded-lg z-20">
                  <div className="">
                    <Dropdown options={options} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <Image src={navicon} alt="menu" width={20} height={10} />
            </button>
            <div className="z-20">
              <Dropdown options={options} />
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden z-20 absolute w-full">
          <ul className="bg-primary text-white p-6 space-y-4 text-center font-bold ">
            <li onClick={closeMobileMenu}>
              <a href="#home">{t("home")}</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#aboutUs">{t("about")}</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#service">{t("services")}</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#legi">{t("legislation")}</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#clients">{t("clients")}</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#contact">{t("contact")}</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
