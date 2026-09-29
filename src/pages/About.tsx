import CenterLine from "@/components/Atom/CenterLine";
import styles from "./About.module.css";
import {
  BookIcon,
  PenLineIcon,
  BrainIcon,
  EarthIcon,
  TimeIcon,
  ChartIcon,
  StarIcon,
} from "@/components/Atom/SVG.tsx";

interface whoAmIArrType {
  id: string;
  icon: React.JSX.Element;
  title: string;
  description: string;
}

interface iBeliveArrType {
  id: string;
  icon: React.JSX.Element;
  description: string;
}

const whoAmIArr: whoAmIArrType[] = [
  {
    id: "record",
    icon: <BookIcon />,
    title: "기록을 좋아합니다",
    description: "일상 속 작은 순간도 놓치고 싶지 않아서 기록합니다.",
  },
  {
    id: "think",
    icon: <PenLineIcon />,
    title: "생각하는 것을 즐깁니다",
    description: "스스로에게 질문하고, 답을 찾아가는 과정을 좋아합니다.",
  },
  {
    id: "growth",
    icon: <BrainIcon />,
    title: "성장하고 싶습니다",
    description: "어제의 나보다 조금 더 나은 내가 되기 위해 노력합니다.",
  },
  {
    id: "beauty",
    icon: <EarthIcon />,
    title: "아름다움을 좋아합니다",
    description: "좋은 글, 음악, 풍경 등 아름다운 것들에서 영감을 받습니다.",
  },
];

const iBeliveArr: iBeliveArrType[] = [
  {
    id: "time",
    icon: <TimeIcon />,
    description: "시간은 흐르고, 기록은 남는다.",
  },
  {
    id: "consistency",
    icon: <ChartIcon />,
    description: "작은 꾸준함이 가장 큰 변화를 만든다.",
  },
  {
    id: "consistency",
    icon: <StarIcon />,
    description: "오늘의 내가, 내일의 나를 만든다.",
  },
];

export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.about_section}>
        <div className={styles.description}>
          <h1>About me</h1>

          <div className={styles.script}>
            <p>
              안녕하세요.
              <br />
              기록을 좋아하는 김동규입니다.
            </p>

            <p>
              이 공간은 저에 대한 이야기이기도 하고,
              <br />
              저의 생각과 일상을 담은 기록이기도 합니다.
            </p>
          </div>
        </div>

        <div className={styles.image_box}>
          <img
            src="/src/assets/Profile_image.jpeg"
            alt="안경을 쓴 남자의 프로필 사진"
          />
        </div>
      </section>

      <CenterLine />

      {/* -------------------------------------------- */}
      <section className={styles.whoami}>
        <h2 className={styles.whoami_title}>Who am I</h2>
        <div className={styles.whoami_inner}>
          {whoAmIArr.map(({ id, icon, title, description }) => (
            <div key={id} className={styles.whoami_inner_section}>
              <div className={styles.whoami_inner_icon}>{icon}</div>
              <p className={styles.whoami_inner_title}>{title}</p>
              <p className={styles.whoami_inner_des}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <CenterLine />

      {/* -------- About KomeDaGe ------- */}
      <section className={styles.komedage}>
        <h2 className={styles.komedage_title}>About KomeDaGe</h2>
        <div className={styles.komedage_inner}>
          <div className={styles.komedage_des}>
            <p>
              KomeDaGe는 저의 이니셜 K.D.G + Homepage의 합성어입니다.
              <br />
              나라는 사람을 중심으로, 나의 생각과 기록을 모아두는 공간입니다.
            </p>
            <p>
              특별한 누군가를 위한 공간이라기보다, 미래의 나를 위한 편지이자,
              <br />
              지금의 나를 위한 노트입니다.
            </p>
          </div>
          <div className={styles.komedage_quote}>
            <div className={styles.komedage_openQuote}>"</div>
            <blockquote>
              기록은 과거를 남기는 것이 아니라,
              <br />
              미래의 나에게 길을 남기는 일이다.
            </blockquote>
            <cite> — K.D.G </cite>
          </div>
        </div>
      </section>

      <CenterLine />

      {/* ------------- I belive -------------- */}
      <section className={styles.ibelive}>
        <h2 className={styles.ibelive_title}>I belive</h2>
        <div className={styles.ibelive_inner}>
          {iBeliveArr.map(({ id, icon, description }) => (
            <div key={id} className={styles.ibelive_inner_section}>
              <div className={styles.ibelive_inner_icon}>{icon}</div>
              <div className={styles.ibelive_inner_des}>{description}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
