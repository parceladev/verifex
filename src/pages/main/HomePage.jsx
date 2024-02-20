
import { Jumbotron, Statistic, Tagline } from '../../components/homes';

const HomePage = () => {
  return (
    <div className="bg-gray-400" >
      <h1>Home Page</h1>
      <Jumbotron />
      <Statistic />
      <Tagline />
    </div>
  );
};

export default HomePage;

