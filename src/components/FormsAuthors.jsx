import { useContext } from "react";
import Select from "react-select";
import TitleContext from "./Context";
import "./Form.scss";

const FormsAuthors = () => {
  const { currnetAuthor, setCurrentAuthor, authorsOptions, setCurrentPage } =
    useContext(TitleContext);
  const getValueAuthor = () => {
    return currnetAuthor
      ? authorsOptions.find((author) => author.value === currnetAuthor)
      : "";
  };
  const onChangeAuthors = (newValue) => {
    setCurrentPage(1);
    setCurrentAuthor(newValue);
  };

  return (
    <Select
      options={authorsOptions}
      placeholder="Authors"
      classNamePrefix="custom-select"
      isClearable
      maxMenuHeight={200}
      onChange={onChangeAuthors}
      value={getValueAuthor()}
    />
  );
};

export default FormsAuthors;
