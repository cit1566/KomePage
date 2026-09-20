import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import CenterLine from "@/components/Atom/CenterLine";

const diaries: {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  img: string;
  alt: string;
}[] = [
  {
    id: 1,
    date: "2026.05.20",
    title: "조용한 하루, 작은 생각들",
    excerpt: "오늘은 특별한 일이 없었지만, 그런 날도 나에게는 의미가 있다.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=90&fit=crop&auto=format",
    alt: "초록 식물과 창가",
  },
  {
    id: 2,
    date: "2026.05.18",
    title: "새로운 시작에 대하여",
    excerpt:
      "새로운 프로젝트를 시작했다. 설레기도 하고, 두렵기도 하지만 일단 오늘 할 수 있는 것부터 해보자.",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=120&h=90&fit=crop&auto=format",
    alt: "도시 일출 풍경",
  },
  {
    id: 3,
    date: "2026.05.15",
    title: "기록한다는 것의 의미",
    excerpt: "미래의 나를 위한 일이다.\n미래의 내가 지금의 나에게 전하는 편지.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=120&h=90&fit=crop&auto=format",
    alt: "노트와 펜",
  },
];

export default function Home() {
  return (
    <main className={styles.home_container}>
      {/* 소개글 - 상단 */}
      <section className={styles.home_intro}>
        <div className={styles.discription}>
          <div className={styles.title_box}>
            <h1 className={styles.title}>KomeDaGe</h1>
            <p className={styles.greeting}>Welcome to</p>
          </div>
          <p className={styles.idntt}>
            기록하고, 생각하고, 쌓아가는 공간.
            <br />
            시간이 지나도 다시 돌아보고 싶은 것들을
            <br />
            여기에 남겨 둡니다.
          </p>
          <Link className={styles.about_link} to="/about">
            About me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className={styles.discription_image}>
          <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop&auto=format"
            alt="책상 위 커피와 노트"
          />
        </div>
      </section>

      <CenterLine></CenterLine>

      {/* 다이어리 최신 글 - 중단 */}
      <section className={styles.recent_diaries}>
        <div className={styles.recent_diaries_title_box}>
          <div className={styles.recent_diaries_title}>
            <h2>Recent Diaries</h2>
            <p>최근에 기록한 일기들</p>
          </div>
          <div className={styles.recent_diaries_toDiary}>
            <Link className={styles.recent_diaries_toDiary_link} to="/diary">
              View all diaries
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.article_box}>
          {diaries.map(({ id, date, title, excerpt, img, alt }, index) => {
            const lastIndex: boolean = index === diaries.length - 1;
            return (
              <article
                className={`${styles.recent_diaries_detail_box} ${lastIndex ? styles.border_none : ""}`}
                id={`diary_${id}`}
              >
                <div className={styles.recent_diaries_detail_box_img}>
                  <img src={img} alt={alt} />
                </div>
                <div className={styles.recent_diaries_inner_box}>
                  <div className={styles.recent_diaries_detail_box_script}>
                    <p className={styles.script_date}>{date}</p>
                    <h3 className={styles.script_title}>{title}</h3>
                    <p className={styles.script_excerpt}>{excerpt}</p>
                  </div>
                  <div className={styles.recent_diaries_detail_box_arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CenterLine></CenterLine>

      {/* 인용문 */}
      <section className={styles.quote}>
        <div>"</div>
        <blockquote>
          사소한 오늘들이 모여
          <br />
          나의 하루가 되고, 삶이 된다.
        </blockquote>
        <cite>— Dong Gyu Kim</cite>
      </section>
    </main>
  );
}
