import Image from "next/image";

const ServicesTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 my-12">
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-8">
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/med.jpg"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className="mt-8 p-4 w-full h-96 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
            Our Services
          </h1>
          <p className="text-xs md:text-sm text-text-color">
            CL is committed to ensuring that you have simple access to the
            finest high-end healthcare, from structure to services. The concept
            of healthcare architecture has undergone numerous and rapid changes
            in recent decades. Humanizing hospital environments and medical
            procedures has become an unavoidable objective.
          </p>
          <p className="text-xs md:text-sm text-text-color">
            As a result, safe functional rooms must be designed, with certified
            high-quality innovation while also being friendly, intimate, and
            committed to every comfort.
          </p>
          <p className="text-xs md:text-sm text-text-color">
            Our doctors and medical team put patient care first, and they&apos;
            re backed up by a friendly and helpful clinic staff. Our doctors and
            nurses sincerely care about you and your health. Compared to other
            clinics, our normal appointment times are 50 percent longer
          </p>
          <p className="text-xs md:text-sm text-text-color">
            The company&apos;s founders were passionate about differentiating
            health-care services by implementing creative solutions that would
            improve the patient experience. A young, dynamic company capable of
            combining quality services and craftsmanship by paying attention to
            detail in our clients&apos; and external environments, knowledge of
            materials and patient needs, architectural quality and quality
            finishes through process and production innovation, and the highest
            quality design and construction of furniture and prefabricated
            healthcare systems.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-8">
        <div className=" p-4 w-full h-96 flex flex-col gap-4">
          <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
            Our Objective
          </h1>
          <p className="text-xs md:text-sm text-text-color">
            Our mission is to improve the quality of patient care and health
            services in the community on a constant basis.
          </p>
          <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
            Primary Value
          </h1>
          <p className="text-xs md:text-sm text-text-color">
            CL and the culture it and its workers aspire to are built on values
            and behavior. Our goal is to be proud of every decision we make and
            every action we do
          </p>
          <p className="text-xs md:text-sm text-text-color">
            We must be safe in all we do.
          </p>
          <p className="text-xs md:text-sm text-text-color">
            Our primary focus is on our patients
          </p>
          <p className="text-xs md:text-sm text-text-color">
            We are concerned about the community
          </p>
          <p className="text-xs md:text-sm text-text-color">
            We are environmentally conscious
          </p>
          <p className="text-xs md:text-sm text-text-color">
            Our personnel are our greatest asset
          </p>
          <p className="text-xs md:text-sm text-text-color">
            We conduct ourselves in a professional and ethical manner
          </p>
        </div>
        <div className=" p-4 w-full h-96 overflow-hidden relative hover:grayscale">
          <Image
            fill
            src="/images/doc.png"
            alt="img"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};
export default ServicesTab;
