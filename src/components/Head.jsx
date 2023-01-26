import Logo from "./Logo";
import styles from "./Head.module.scss";
const Head = ({onClick}) => {
  return (
    <div className={styles.headWrapper}>
      <Logo />
      <span className={styles.themeButton} onClick={onClick}> &#9728;</span>
    </div>
  );
};
export default Head;
