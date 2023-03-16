interface BannerProps {
  machineryTab: () => void;
  consumablesTab: () => void;
  minesTab: () => void;
  explorationTab: () => void;
}

const MiningBanner = ({
  machineryTab,
  consumablesTab,
  minesTab,
  explorationTab
}: BannerProps) => {
  return (
    <div
      className="w-screen  bg-realeastatebg flex flex-row items-center justify-center pt-4 md:p-24 bg-cover"
      style={{ height: 500 }}
    >
      <div className="bg-white w-1/3 flex flex-row items-center justify-evenly p-4">
        <div className="p-4 bg-blue-100">
          <button onClick={minesTab}>Mines</button>
        </div>
        <div className="p-4 bg-blue-100">
          <button onClick={machineryTab}>Machinery</button>
        </div>
        <div className="p-4 bg-gray-100">
          <button onClick={consumablesTab}>Consumables</button>
        </div>
        <div className="p-4 bg-gray-100">
          <button onClick={explorationTab}>Exploration</button>
        </div>
      </div>
    </div>
  );
};
export default MiningBanner;
