import { Jumbotron, Statistic, Tagline } from '../../components/homes';

const homepage = () => {
  return (
    <div className="bg-gray-500" >
      <h1>Home Page</h1>
      <Jumbotron />
      <Statistic />
      <Tagline />
    </div>
  );
};

export default homepage;
