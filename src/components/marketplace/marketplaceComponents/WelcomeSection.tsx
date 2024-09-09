import { useTranslation } from "../../../context/TraslationContext";

const WelcomeSection = () => {
  const { language, content } = useTranslation();
  return (
    <section className="py-24 bg-white text-gray-800" data-aos="fade-up">
      <div className="container mx-auto text-center xs:p-5">
        <h1 className="text-4xl font-bold mb-4 text-d_green xs:text-3xl">
          {content?.marketplace[language].welcomeSection.title}
        </h1>
        <p className="max-w-7xl mx-auto text-lg mb-8 text-justify leading-relaxed lg:text-base">
          {content?.marketplace[language].welcomeSection.description}
        </p>
        <div className="flex justify-center items-center h-[500px] w-full max-w-7xl overflow-hidden rounded-xl relative">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url('https://somosawaqblob.blob.core.windows.net/congress/marketplace/carpas-marketplace.jpg')",
              backgroundPosition: "center bottom 30%", // Ajusta esta propiedad según sea necesario
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
