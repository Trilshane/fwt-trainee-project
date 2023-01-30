import styles from "./Logo.module.scss";
import Image1 from "../images/Vector(1).png";
import Image2 from "../images/Vector(2).png";
import Image3 from "../images/Vector(3).png";
import Image4 from "../images/Vector(4).png";
import Image5 from "../images/Vector(5).png";
import Image6 from "../images/Vector(6).png";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Image1} alt="vector" className={styles.logoF1} />
      <img src={Image2} alt="vector" className={styles.logoF2} />
      <img src={Image3} alt="vector" className={styles.logoW1} />
      <img src={Image4} alt="vector" className={styles.logoW2} />
      <img src={Image5} alt="vector" className={styles.logoT1} />
      <img src={Image6} alt="vector" className={styles.logoT2} />
    </div>
  );
};
export default Logo;
