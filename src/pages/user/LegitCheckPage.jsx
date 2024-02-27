import {
  ButtonFormLegit,
  CardProduct,
  SearchProduct,
  Banner,
} from '../../components/legitchecks';

const LegitCheckPage = () => {
  return (
    <div>
      <section className="h-screen w-full,">
        <Banner />
      </section>
      <section className="m-12 flex flex-col gap-10">
        <h2 className="text-3xl uppercase">Track Your Legit Check</h2>
        <div className="flex">
          <SearchProduct />
          <ButtonFormLegit />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>
    </div>
  );
};

export default LegitCheckPage;
