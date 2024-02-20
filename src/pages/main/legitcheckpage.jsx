import {Banner, ButtonFormLegit, CardProduct, SearchProduct} from "../../components/legitchecks"

const legitcheckpage = () => {
  return (
    <div className="bg-slate-400">
      <h1>Legit Check Page</h1>
      <Banner/>
      <ButtonFormLegit/>
      <CardProduct/>
      <SearchProduct/>
    </div>
  );
};

export default legitcheckpage;
