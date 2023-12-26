import { useTranslations } from "next-intl";


export function Services() {
  const t = useTranslations("Services");

  return (
    <div id="service" className="p-8 mx-auto ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center">{t("services")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Box 1 */}
          <div className="bg-white p-4 mt-2 rounded-md shadow-2xl">
            <h2 className="text-xl font-semibold">{t("title1")}</h2>
            <p>
            {t("text1")}
            </p>
            <ul className="list-disc list-inside">
              <li>{t("li1")}</li>
              <li>{t("li2")}</li>
              <li>{t("li3")}</li>
              <li>{t("li4")}</li>
            </ul>
            <p>{t("subtext1")}</p>
          </div>
          {/* Box 2 */}
          <div className="bg-white p-4 mt-2 rounded-md shadow-2xl">
            <h2 className="text-xl font-semibold">{t("title2")}</h2>
            <p>
            {t("text2")}
            </p>
          </div>
          {/* Box 3 */}
          <div className="bg-white p-4 mt-2 rounded-md shadow-2xl">
            <h2 className="text-xl font-semibold">{t("title3")}</h2>
            <ul className="list-disc list-inside">
              <li>{t("li5")}</li>
              <li>{t("li6")}</li>
              <li>{t("li7")}</li>
              <li>{t("li8")}</li>
            </ul>
          </div>
          {/* Box 4 */}
          <div className="bg-white p-4 mt-2 rounded-md shadow-2xl">
            <h2 className="text-xl font-semibold">{t("title4")}</h2>
            <ul className="list-disc list-inside">
              <li>{t("li9")}</li>
              <li>{t("li10")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
