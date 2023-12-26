import { useTranslations } from "next-intl";

export function Legi() {
  const t = useTranslations("Legi");
  return (
    <div id="legi" className="relative overflow-hidden bg-center bg-cover bg-no-repeat bg-image1 h-screen">
      <div className="absolute inset-0 bg-primary bg-opacity-10 backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mt-4">{t("legi")}</h1>
          <div className="text-left mt-6 p-6 rounded-lg backdrop-blur-md">
            <h2 className="text-xl font-semibold">{t("title")}</h2>
            <ul className="list-disc list-inside">
              <li>{t("li1")}</li>
              <li>{t("li2")}</li>
              <li>{t("li3")}</li>
              <li>{t("li4")}</li>
              <li>{t("li5")}</li>
              <li>{t("li6")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
