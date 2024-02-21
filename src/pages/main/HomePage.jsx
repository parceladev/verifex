import { Jumbotron, Statistic, Tagline } from "../../components/homes";
import styles from "../../styles";

const HomePage = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Jumbotron />
        <Statistic />
        <Tagline />
      </div>
    </div>
  );
};

export default HomePage;
