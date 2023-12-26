"use client"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { useTranslations } from "next-intl";

import Bla from '@/assets/bla.jpg';

export function Clients() {
  const t = useTranslations("Clients");

  return (
    <div id='clients' className='max-w-7xl mx-auto'>
      <div className="relative w-full p-8">
        <h1 className="text-3xl md:text-4xl text-black font-bold text-center ">{t("clients")}</h1>
        <div className="mt-6">
          <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
          >
            <div className="w-full">
              <Image
                src={Bla}
                alt="bla"
              />
            </div>
            <div className="w-full ">
            <Image
                src={Bla}
                alt="bla"
              />
            </div>
            <div className="w-full">
            <Image
                src={Bla}
                alt="bla"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
