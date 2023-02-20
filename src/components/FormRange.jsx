import styles from "./FormRange.module.scss";
import { BiChevronDown } from "react-icons/bi";
import { FaSkullCrossbones } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import TitleContext from "./Context";
const FormRange = () => {
  const { setQueryFrom, setQueryBefore, setCurrentPage } =
    useContext(TitleContext);
  const [isActive, setActive] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className={styles.dropDown}>
      <OutsideClickHandler onOutsideClick={() => setActive(false)}>
        <div
          className={`${styles.dropDownBTN} ${
            isActive ? styles.dropDownBTNActive : ""
          }`}
          onClick={() => setActive(!isActive)}
        >
          Created
          <div className={styles.icons}>
            <FaSkullCrossbones
              className={styles.clearBTN}
              style={!isActive ? { display: "none" } : { display: "block" }}
              onClick={() => {
                setQueryFrom(false);
                setQueryBefore(false);
              }}
            />
            <BiChevronDown className={styles.dropDownBTNIcon} />
          </div>
        </div>
        {isActive && (
          <div
            className={`${styles.dropDownContent} ${
              isActive ? styles.dropDownContentActive : ""
            } `}
          >
            <input
              type="number"
              min="1000"
              max="2000"
              placeholder="from"
              onChange={(e) => {
                setCurrentPage(1);
                setQueryFrom(e.target.value);
              }}
            />
            <span>&mdash;</span>
            <input
              type="number"
              min="1000"
              max="2000"
              placeholder="before"
              onChange={(e) => {
                setCurrentPage(1);
                setQueryBefore(e.target.value);
              }}
            />
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};
export default FormRange;
