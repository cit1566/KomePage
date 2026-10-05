import { Link, useLocation } from "react-router-dom";
import styles from "./DiaryDetailPage.module.css";
import CenterLine from "@/components/Atom/CenterLine";
import { LeftArrow } from "@/components/Atom/SVG";
import type { Diary } from "@/types/Diary.type";

interface LocationState {
  diaryData: Diary;
}

export default function DiaryDetailPage() {
  const location = useLocation();

  const state = location.state as LocationState;
  const diary = state?.diaryData;

  if (diary) {
    return (
      <main className={styles.diary_detail_page}>
        <div className={styles.to_diary_link}>
          <Link className={styles.link_box} to="/diary">
            <LeftArrow />
            모든 일기
          </Link>
        </div>
        <div className={styles.detail_image}>
          <img src={diary.img} alt={diary.alt} />
        </div>
        <article className={styles.diary_article}>
          <header className={styles.diary_header}>
            <span className={styles.diary_tag}>{diary.tag}</span>
            <time className={styles.diary_time} dateTime={diary.date}>
              {diary.date}
            </time>
          </header>
          <h1 className={styles.diary_title}>{diary.title}</h1>
          <p className={styles.diary_excerpt}>{diary.excerpt}</p>
          <CenterLine />
          <div className={styles.diary_text_box}>
            {diary.content.map((text) => (
              <p>{text}</p>
            ))}
          </div>
          <div className={styles.diary_text_deco}>✦</div>
        </article>
        <div className={styles.diary_link_box}>
          <Link
            className={styles.diary_befor_page}
            to={`/diary/${Number(diary.id) - 1}`}
          >
            이전 페이지
          </Link>
          <Link
            className={styles.diary_next_page}
            to={`/diary/${Number(diary.id) + 1}`}
          >
            다음 페이지
          </Link>
        </div>
      </main>
    );
  }

  // 빈 페이지 오류 디자인 추가 필요
  return <div>Noting Pages</div>;
}
