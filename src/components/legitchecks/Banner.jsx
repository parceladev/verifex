const Banner = () => {
  return (
    <div className="p-14 w-full h-full flex flex-col gap-28 justify-center text-white bg-black">
      <div className="flex flex-col">
        <h1 className="text-6xl uppercase">Is Your Fashion Style</h1>
        <h1 className="text-7xl uppercase self-end">Legit ?</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-7xl">12756</p>
          <span className="h-1 w-full bg-white"></span>
          <p className="text-3xl uppercase">Total Check</p>
        </div>
        <div className="self-end">
          <p className="italic uppercase text-3xl">Check Below</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
