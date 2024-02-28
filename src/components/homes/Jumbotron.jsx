const Jumbotron = () => {
  return (
    <div
      className=" text-center my-8 h-[500px] w-[100%] flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('/src/assets/homepage/Jumbotron.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="block text-[40px] font-didot text-secondary py-2">
        IS YOUR FASHION STYLE LEGIT?
      </h1>
      <button className="mt-2 px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-primary">
        CHECK NOW
      </button>
    </div>
  );
};

export default Jumbotron;
