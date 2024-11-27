import { MoviesLayout } from "@/Layout";
import { DefaultHeadMovie } from "./components/DefaultHeadMovie";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main__container}>
      <DefaultHeadMovie />
      <MoviesLayout>any</MoviesLayout>
    </main>
  );
}
