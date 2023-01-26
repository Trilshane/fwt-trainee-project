import styles from "./Pagination.module.scss";

const Pagination = ({
  paintingPerPage,
  totalPainings,
  paginate,
  nextPage,
  prewPage,
  currentPage,
  firstPage,
  lastPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPainings / paintingPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationBTN}
        onClick={firstPage}
        disabled={currentPage === 1}
        style={{
          borderTopLeftRadius: 8 + "px",
          borderBottomLeftRadius: 8 + "px",
        }}
      >
        &#171;
      </button>
      <button
        className={styles.paginationBTN}
        onClick={prewPage}
        disabled={currentPage === 1}
      >
        &#8249;
      </button>
      {pageNumbers.map((number) => (
        <button
          className={`${styles.paginationBTN} ${
            currentPage === number ? styles.activeBTN : ""
          }`}
          onClick={() => {
            paginate(number);
          }}
          key={number}
        >
          {number}
        </button>
      ))}
      <button
        className={styles.paginationBTN}
        onClick={nextPage}
        disabled={currentPage === pageNumbers.length}
      >
        &#8250;
      </button>
      <button
        className={`${styles.paginationBTN} ${styles.rightBorderBTN}`}
        onClick={lastPage}
        disabled={currentPage === pageNumbers.length}
        style={{
          borderTopRightRadius: 8 + "px",
          borderBottomRightRadius: 8 + "px",
        }}
      >
        &#187;
      </button>
    </div>
  );
};

export default Pagination;
