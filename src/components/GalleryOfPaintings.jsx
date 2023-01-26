import { useState, useEffect, useContext } from "react";
import Painting from "./Painting";
import Pagination from "./Pagination";
import styles from "./GallereOfPaintings.module.scss";
import {
  API_URL,
  API_URL_PAINTINGS,
  API_URL_AUTHORS,
  API_URL_LOCATIONS,
} from "../API/Gallery_API";
import TitleContext from "./Context";

const GalleryOfPaintings = () => {
  const [paintings, setPaintings] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState("");
  const [locationLoaded, setLocationLoaded] = useState();
  const [authorsLoaded, setAuthorsLoaded] = useState();
  const [paintingLoaded, setPaintigLoaded] = useState(false);

  useEffect(() => {
    fetch(API_URL_AUTHORS)
      .then((response) => response.json())
      .then((list) => {
        setAuthors(list);
        setAuthorsLoaded(true);
      })
      .catch((error) => setError(error.message));
    fetch(API_URL_LOCATIONS)
      .then((response) => response.json())
      .then((list) => {
        setLocations(list);
        setLocationLoaded(true);
      })
      .catch((error) => setError(error.message));
  }, []);
  useEffect(() => {
    if (!locationLoaded || !authorsLoaded) {
      return;
    }
    fetch(API_URL_PAINTINGS)
      .then((response) => response.json())
      .then((paintings) => {
        setPaintings(paintings);
        setPaintigLoaded(true);
      })
      .catch((error) => setError(error.message));
  }, [locationLoaded, authorsLoaded]);

  const [currentPage, setCurrentPage] = useState(1);
  const [paintingPerPage] = useState(12);

  const { currnetAuthor, currentLocation, query, queryFrom, queryBefore } =
    useContext(TitleContext);
  const lastPaintingIndex = currentPage * paintingPerPage;
  const firstPaintingIndex = lastPaintingIndex - paintingPerPage;
  const pantigsFiltered = paintings.filter((painting) => {
    if (
      !currnetAuthor &&
      !currentLocation &&
      !query &&
      !queryFrom &&
      !queryBefore
    ) {
      return painting;
    }
    if (currnetAuthor) {
      if (currentLocation) {
        return (
          painting.authorId === currnetAuthor.value &&
          painting.locationId === currentLocation.value
        );
      }
      return painting.authorId === currnetAuthor.value;
    } else if (currentLocation) {
      if (currnetAuthor) {
        return (
          painting.authorId === currnetAuthor.value &&
          painting.locationId === currentLocation.value
        );
      }
      return painting.locationId === currentLocation.value;
    } else if (query) {
      return painting.name.includes(query);
    } else if (queryFrom) {
      if (queryBefore) {
        return (
          +painting.created >= queryFrom && +painting.created <= queryBefore
        );
      }
      return +painting.created >= queryFrom;
    } else if (queryBefore) {
      if (queryFrom) {
        return (
          +painting.created >= queryFrom && +painting.created <= queryBefore
        );
      }
      return +painting.created <= queryBefore;
    } else {
      return painting;
    }
  });
  const currentPainting = pantigsFiltered.slice(
    firstPaintingIndex,
    lastPaintingIndex
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => setCurrentPage((prew) => prew + 1);
  const prewPage = () => setCurrentPage((prew) => prew - 1);
  const firstPage = () => setCurrentPage((prew) => (prew = 1));
  const lastPage = () =>
    setCurrentPage(
      (prew) => (prew = Math.ceil(pantigsFiltered.length / paintingPerPage))
    );

  if (error) {
    return <h1>Error{error}</h1>;
  }

  return (
    <div className={styles.GalleryWrapper}>
      <div className={styles.GalleryOfPaintingsCounter}>
        {currentPainting.map((painting) => (
          <Painting
            src={`${API_URL + painting.imageUrl}`}
            name={painting.name}
            author={
              authors.find((author) => author.id === painting.authorId).name
            }
            created={painting.created}
            location={
              locations.find((location) => location.id === painting.locationId)
                .location
            }
            key={painting.id}
          />
        ))}
      </div>
      {paintingLoaded === true && (
        <Pagination
          paintingPerPage={paintingPerPage}
          totalPainings={pantigsFiltered.length}
          currentPage={currentPage}
          paginate={paginate}
          nextPage={nextPage}
          prewPage={prewPage}
          firstPage={firstPage}
          lastPage={lastPage}
        />
      )}
    </div>
  );
};
export default GalleryOfPaintings;
