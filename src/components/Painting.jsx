import styles from "./Painting.module.scss";
const Painting = ({ src, name, author, created, location }) => {
  return (
    <div className={styles.picturePost}>
      <img src={src} alt="painting" />
      <div className={styles.picturePostInformation}>
        <p className={styles.picturePostInformationHead}>{name}</p>
        <div className={styles.picturePostInformationDate}>
          <p>
            Author:<span>{author}</span>
          </p>
          <p>
            Created:<span>{created}</span>
          </p>
          <p>
            Location:<span>{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Painting;
