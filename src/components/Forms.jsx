import FormName from "./FormName";
import FormsAuthors from "./FormsAuthors";
import FormsLocations from "./FormsLocations";
import FormRange from "./FormRange";
import styles from "./Forms.module.scss";
const Forms = () => {
  return (
    <form className={styles.wrapper}>
      <FormName />
      <FormsAuthors />
      <FormsLocations />
      <FormRange />
    </form>
  );
};
export default Forms;
