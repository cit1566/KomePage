import { CompassIcon, RightArrow } from "@/components/Atom/SVG";
import styles from "./NotFoundPage.module.css";
import LinkButton from "@/components/Atom/LinkButton";
export default function NotFoundPage() {
  return (
    <main className={styles.notfoundpage}>
      <div className={styles.notfoundpage_inner}>
        <div className={styles.notfound_frame}>
          <span
            className={`${styles.notfound_corner} ${styles.notfound_corner_top}`}
          ></span>
          <span
            className={`${styles.notfound_corner} ${styles.notfound_corner_bottom}`}
          ></span>
        </div>
        <div className={styles.notfoundpage_content}>
          <p className={styles.notfound_eyebrow}>LOST IN THE PAGES</p>
          <div className={styles.notfound_number}>
            <span>4</span>
            <CompassIcon className={styles.notfound_illustration} />
            <span>4</span>
          </div>
          <div className={styles.notfound_devider}>
            <span></span>
          </div>
          <h1 className={styles.notfound_title}>
            이 페이지는 아직 기록되지 않았어요.
          </h1>
          <p className={styles.notfound_description}>
            주소가 잘못되었거나 페이지가 다른 곳으로 옮겨졌을 수 있어요.
            <br />
            익숙한 페이지에서 다시 시작해 보세요.
          </p>
          <div className={styles.notfound_actions}>
            <LinkButton title="홈으로 돌아가기" herf="/">
              <RightArrow />
            </LinkButton>
            <LinkButton
              title="일기 보러가기"
              herf="/diary"
              type="white"
            ></LinkButton>
          </div>
        </div>
        <p className={styles.notfound_note}>
          Sometimes, getting lost leads to a new story.
        </p>
      </div>
    </main>
  );
}
