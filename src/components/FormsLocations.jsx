import { useContext } from "react";
import Select from "react-select";
import TitleContext from "./Context";

const FormsLocations = () => {
  const {
    currentLocation,
    setCurrentLocation,
    locationOptions,
    setCurrentPage,
  } = useContext(TitleContext);
  const getValue = () => {
    return currentLocation
      ? locationOptions.find((location) => location.value === currentLocation)
      : "";
  };
  const onChange = (newValue) => {
    setCurrentPage(1);
    setCurrentLocation(newValue);
  };

  return (
    <Select
      options={locationOptions}
      placeholder="Location"
      classNamePrefix="custom-select"
      isClearable
      maxMenuHeight={200}
      onChange={onChange}
      value={getValue()}
    />
  );
};
export default FormsLocations;
