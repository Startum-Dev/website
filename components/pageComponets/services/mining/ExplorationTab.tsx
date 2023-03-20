import ExploreCarousel from "../../../courosel/ExploreCourosel";

const ExplorationTab = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-6xl font-semibold text-text-color">
        Exproration
      </h1>
      <p className="text-xs md:text-sm text-text-color">
        Chaînes Lloyd Incorporated is building a global connectivity between
        miners, smelters and refined metal fabricators. We aim to be one of the
        leading players in the traditional business of mineral and other raw
        material trade. We supply companies all over the world with minerals,
        gems, ores, metals, assets related and offer appealing alliances.
        CL&apos; s success is dependent on trust and support from all
        stakeholders, including shareholders, employees, suppliers, contractors,
        Government and local communities, which is why we are committed to the
        highest standards of integrity and sustainability. We have zero
        tolerance for corruption and aim to have the maximum level of
        transparency in our dealing with Government authorities, defending our
        interests in courts when necessary. We genuinely believe that good
        corporate governance adds shareholder value and, therefore, our Board is
        composed of non-executive, independent directors. Going forward, we
        intend to further strengthen our corporate gover nance in order to
        deliver maximum shareholder value.
      </p>
      <div className="w-full flex flex-col  gap-4">
        <ExploreCarousel />
      </div>
    </div>
  );
};
export default ExplorationTab;
