import styles from "./side-menu.module.css";

export default function Sidemenu() {
  return (
    <aside className={styles.sidemenu__main}>
      <div className={styles.sidemenu__searchfilter}>
        <h1>Search</h1>
        <div>
          <input type="text" placeholder="Keywords" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
      <div className={styles.sidemenu__genreflter}>
        <h1>Genres</h1>
        <select name="" id="">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
        </select>
      </div>
    </aside>
  );
}
