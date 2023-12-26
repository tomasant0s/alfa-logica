import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logo from "@/assets/logo.png"

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="bg-primary text-white py-4">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center text-md-left">
          <div className="mb-4 md:mb-0">
            <Image src={logo} alt={'Logo'} width={120} height={120} className="ml-16" />
            <p className="text-xs">&copy; 2023 Seu Site. Todos os direitos reservados.</p>
          </div>
          <div className="text-sm">
            <div className="space-x-4 items-center mb-2">
              <div>
                <h2 className="font-semibold text-white mb-1">{t("text")}</h2>
                <p className="mb-1">(22) 99878-0228</p>
              </div>
            </div>
            <div className="text-xs space-x-4 items-center p-1">
              <span className="flex flex-col items-center ">
                <FaMapMarkerAlt size={15} />
                <span className="py-2">Av.Atlântica, nº 2650, Sala 609, Cavaleiros - Macaé/RJ</span>
              </span>
            </div>
          </div>
          <div className="flex items-center p-2">
            <div className="flex space-x-2 items-center">
              <a href="#">
                <FaWhatsapp size={24} />
              </a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
