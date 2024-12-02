import { MoviesLayout } from "@/Layout";
import { DefaultHeadMovie } from "./components/DefaultHeadMovie";
import styles from "./page.module.css";
import { Sidemenu } from "./components";
import MoviesContent from "./components/MoviesContent/MoviesContent";



export default function Home() {
  return (
    <main className={styles.main__container}>
      <DefaultHeadMovie />
      <MoviesLayout>
        <Sidemenu />
        <MoviesContent />
      </MoviesLayout>
    </main>
  );
}
