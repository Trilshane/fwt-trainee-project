import { useContext } from "react";
import styles from "./Forms.module.scss";
import TitleContext from "./Context";

const FormName = () => {
  const { setQuery, setCurrentPage } = useContext(TitleContext);

  return (
    <input
      placeholder="Name"
      type="text"
      className={styles.formName}
      onChange={(e) => {
        setCurrentPage(1);
        setQuery(e.target.value);
      }}
    />
  );
};
export default FormName;
