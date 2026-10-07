import { Link, useParams } from "react-router-dom";
import styles from "./DiaryDetailPage.module.css";
import CenterLine from "@/components/Atom/CenterLine";
import { LeftArrow, RightArrow } from "@/components/Atom/SVG";
import getDataForId from "@/utils/getDataForId";
import getSearchId from "@/utils/getSearchId";

export default function DiaryDetailPage() {
  const { id } = useParams();

  // URL의 페이지 id 서칭
  if (!id) return <div>ID가 존재하지 않습니다.</div>;

  const data = getDataForId(Number(id));

  // URL 페이지 id에 할당된 Data 서칭
  if (!data) return <div>Data가 존재하지 않습니다.</div>;

  // 빈 페이지 오류 디자인 추가 필요
  return (
    <main className={styles.diary_detail_page}>
      <div className={styles.to_diary_link}>
        <Link className={styles.link_box} to="/diary">
          <LeftArrow />
          모든 일기
        </Link>
      </div>
      <div className={styles.detail_image}>
        <img src={data.img} alt={data.alt} />
      </div>
      <article className={styles.diary_article}>
        <header className={styles.diary_header}>
          <span className={styles.diary_tag}>{data.tag}</span>
          <time className={styles.diary_time} dateTime={data.date}>
            {data.date}
          </time>
        </header>
        <h1 className={styles.diary_title}>{data.title}</h1>
        <p className={styles.diary_excerpt}>{data.excerpt}</p>
        <CenterLine />
        <div className={styles.diary_text_box}>
          {data.content.map((text) => (
            <p>{text}</p>
          ))}
        </div>
        <div className={styles.diary_text_deco}>✦</div>
      </article>
      <div className={styles.diary_link_box}>
        {/* 이전 페이지 이동 버튼 */}
        {getSearchId(Number(data.id), "befor") ? (
          <Link
            className={styles.diary_befor_page}
            to={`/diary/${Number(data.id) - 1}`}
          >
            <span>
              <LeftArrow />
              이전 일기
            </span>
            <span>{getDataForId(Number(data.id) - 1).title}</span>
          </Link>
        ) : (
          <div className={styles.emptyButton}></div>
        )}

        {/* 다음 페이지 이동 버튼 */}
        {getSearchId(Number(data.id)) ? (
          <Link
            className={styles.diary_next_page}
            to={`/diary/${Number(data.id) + 1}`}
          >
            <span>
              다음 페이지
              <RightArrow />
            </span>
            <span>{getDataForId(Number(data.id) + 1).title}</span>
          </Link>
        ) : (
          <div className={styles.emptyButton}></div>
        )}
      </div>
    </main>
  );
}
