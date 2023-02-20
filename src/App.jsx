import { React, useState, useEffect } from "react";

import "./App.scss";
import TitleContext from "./components/Context";
import Head from "./components/Head";
import GalleryOfPaintings from "./components/GalleryOfPaintings";
import Forms from "./components/Forms";
import useTheme from "./hooks/useTheme";
function App() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [currnetAuthor, setCurrentAuthor] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  //location options
  const API_URL_LOCATIONS = "https://test-front.framework.team/locations";
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch(API_URL_LOCATIONS)
      .then((response) => response.json())
      .then((list) => setLocations(list));
  }, []);
  let locationOptions = locations.map((location) => {
    return { value: location.id, label: location.location };
  });
  //authors options
  const API_URL_AUTHORS = "https://test-front.framework.team/authors";
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch(API_URL_AUTHORS)
      .then((response) => response.json())
      .then((list) => setAuthors(list))
      .catch((error) => error.message);
  }, []);

  const authorsOptions = authors.map((autor) => {
    return { value: autor.id, label: autor.name };
  });
  //input Name query
  const [query, setQuery] = useState("");

  //input Range query
  const [queryFrom, setQueryFrom] = useState("");
  const [queryBefore, setQueryBefore] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  return (
    <TitleContext.Provider
      value={{
        currnetAuthor,
        setCurrentAuthor,
        currentLocation,
        setCurrentLocation,
        locationOptions,
        authorsOptions,
        query,
        setQuery,
        queryFrom,
        setQueryFrom,
        queryBefore,
        setQueryBefore,
        currentPage,
        setCurrentPage,
      }}
    >
      <div className="App">
        <div className="wrapper">
          <Head onClick={changeTheme} />
          <Forms />
          <GalleryOfPaintings />
        </div>
      </div>
    </TitleContext.Provider>
  );
}
export default App;
