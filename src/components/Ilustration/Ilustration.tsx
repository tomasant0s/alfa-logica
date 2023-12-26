import { useTranslations } from "next-intl";

export function Ilustration() {
  const t = useTranslations("Hero");
  return (
    <div className="relative overflow-hidden bg-center bg-cover bg-no-repeat bg-image2 h-[700px]">
      <div className="absolute inset-0 bg-primary bg-opacity-10 backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center text-white">
        <div className="max-w-4xl mx-auto text-center p-8">
          <div className="p-8 backdrop-filter backdrop-blur-xl backdrop-opacity-50 rounded-xl shadow-lg ">
            <h1 className="text-6xl">
              Alfa Lógica
            </h1>
            <h2 className="text-3xl ">
              {t("text")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
