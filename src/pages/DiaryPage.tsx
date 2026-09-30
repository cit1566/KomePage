import CenterLine from "@/components/Atom/CenterLine";
import DiaryCard from "@/components/DiaryCard";
import DiaryData from "@/data/diary.dumy.json";
import styles from "./DiaryPage.module.css";

export default function DiaryPage() {
  return (
    <main className={styles.diary}>
      <section className={styles.diary_title_box}>
        <h1>Diary</h1>
        <p>기록하고, 생각하고, 쌓아가는 일기들</p>
      </section>
      <CenterLine />
      <section className={styles.diary_card_box}>
        {DiaryData.map((diary) => (
          <DiaryCard key={diary.id} diaryData={diary} />
        ))}
      </section>
    </main>
  );
}
