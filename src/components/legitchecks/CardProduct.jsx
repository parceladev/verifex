const CardProduct = () => {
  return (
    <div className="flex flex-col gap-5 border border-black dark:border-gray-600">
      <img
        className="h-72"
        src="/src/assets/user/legit-check-page/product-legit-portofolio.png"
        alt="product-legit-portofolio"
      />
      <p className="text-center">Vans Oldskool</p>
      <p className="text-center bg-black dark:bg-gray-300 font-bold py-3 text-white dark:text-black">
        Orginal
      </p>
    </div>
  );
};

export default CardProduct;
