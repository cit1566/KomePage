import type { Diary } from "@/types/Diary.type";
import styles from "./DiaryCard.module.css";
interface DiaryCardProps {
  diaryData: Diary;
}

export default function DiaryCard({ diaryData }: DiaryCardProps) {
  return (
    <article className={styles.diarycard}>
      <a href="aa">
        <div className={styles.diarycard_img_box}>
          <img src={diaryData.img} alt={diaryData.alt} />
        </div>
        <div className={styles.diarycard_info}>
          <span className={styles.diarycard_info_data}>{diaryData.date}</span>
          <span className={styles.diarycard_info_tag}>{diaryData.tag}</span>
        </div>
        <h2 className={styles.diarycard_title}>{diaryData.title}</h2>
        <p className={styles.diarycard_excerpt}>{diaryData.excerpt}</p>
      </a>
    </article>
  );
}
