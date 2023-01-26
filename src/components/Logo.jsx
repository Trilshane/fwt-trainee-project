import styles from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="../images/Vector(1).png"
        alt="vector"
        className={styles.logoF1}
      />
      <img
        src="../images/Vector(2).png"
        alt="vector"
        className={styles.logoF2}
      />
      <img
        src="../images/Vector(3).png"
        alt="vector"
        className={styles.logoW1}
      />
      <img
        src="../images/Vector(4).png"
        alt="vector"
        className={styles.logoW2}
      />
      <img
        src="../images/Vector(5).png"
        alt="vector"
        className={styles.logoT1}
      />
      <img
        src="../images/Vector(6).png"
        alt="vector"
        className={styles.logoT2}
      />
    </div>
  );
};
export default Logo;
