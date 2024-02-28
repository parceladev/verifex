const Statistic = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full">
      <div
        className="w-full md:w-[450px] h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets//homepage/Statistic.png')",
        }}
      ></div>

      <div className="w-full md:w-1/2 p-8 flex flex-col text-right ">
        <div>
          <p className="text-[18px] ">
            MAKING PEOPLE ENJOY WEARING THEIR OUTFITS
          </p>
          <div>
            <h1 className="text-[100px] text-primary font-didot uppercase mb-4">
              0000
            </h1>
            <p className=" font-roman text-[18px]">TOTAL CHECK</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
