import { useTranslations } from "next-intl";

export function AboutUs() {
  const t = useTranslations("About");
  return (
    <div id="aboutUs" className="p-4 bg-primary shadow-md ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          {t("about us")}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-4 md:mx-auto text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">{t("history")}</h2>
            <p className="text-white mt-2">{t("text1")}</p>
          </div>
          <div className="w-full md:w-1/2 pl-4 md:mx-auto mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">{t("mission")}</h2>
            <p className="text-white mt-2">{t("text2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
