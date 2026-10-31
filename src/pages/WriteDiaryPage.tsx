import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./WriteDiaryPage.module.css";
import { CheckIcon, ImgIcon, LeftArrow, UploadIcon } from "@/components/Atom/SVG";

const TAGS = ["일상", "생각", "기록", "추억", "감정", "여행"];

const MOODS = [
  { icon: "😊", label: "행복해요" },
  { icon: "😌", label: "평온해요" },
  { icon: "🤔", label: "생각이 많아요" },
  { icon: "😢", label: "슬퍼요" },
  { icon: "😤", label: "화가 나요" },
  { icon: "🥰", label: "사랑스러워요" },
];

const WEATHERS = [
  { icon: "☀️", label: "맑음" },
  { icon: "⛅", label: "구름 조금" },
  { icon: "🌧️", label: "비" },
  { icon: "❄️", label: "눈" },
  { icon: "🌫️", label: "안개" },
  { icon: "🌈", label: "무지개" },
];

export default function WriteDiaryPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [date] = useState(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}.${mm}.${dd}`;
  });
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedWeather, setSelectedWeather] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContentChange = (val: string) => {
    setContent(val);
    setCharCount(val.replace(/\s/g, "").length);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) return;
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2200);
  };

  const readTime = Math.max(1, Math.round(charCount / 200));
  const isPublishDisabled = !title.trim() || !content.trim();

  return (
    <main className={styles.write_page}>
      {/* 툴바 */}
      <div className={styles.write_toolbar}>
        <Link to="/diary" className={styles.write_toolbar__back}>
          <LeftArrow />
          일기 목록
        </Link>

        <div className={styles.write_toolbar__meta}>
          <span className={styles.write_toolbar__stat}>{charCount}자</span>
          <span className={styles.write_toolbar__sep}>·</span>
          <span className={styles.write_toolbar__stat}>약 {readTime}분 읽기</span>
        </div>

        <div className={styles.write_toolbar__actions}>
          <button
            type="button"
            className={`${styles.write_btn} ${styles.write_btn__ghost}`}
          >
            임시저장
          </button>
          <button
            type="button"
            className={`${styles.write_btn} ${styles.write_btn__primary} ${
              isPublishDisabled ? styles.write_btn__disabled : ""
            }`}
            onClick={handlePublish}
            disabled={isPublishDisabled}
          >
            {isSaved ? (
              <>
                <CheckIcon />
                저장됨
              </>
            ) : (
              "발행하기"
            )}
          </button>
        </div>
      </div>

      {/* 2단 레이아웃 */}
      <div className={styles.write_layout}>
        {/* 본문 에디터 */}
        <section className={styles.write_editor}>
          <button
            type="button"
            className={`${styles.write_cover} ${
              coverImage ? styles.write_cover__filled : ""
            }`}
            onClick={() => fileInputRef.current?.click()}
            aria-label={coverImage ? "커버 이미지 변경" : "커버 이미지 추가"}
          >
            {coverImage ? (
              <>
                <img
                  src={coverImage}
                  alt="커버 이미지"
                  className={styles.write_cover__img}
                />
                <div className={styles.write_cover__change}>
                  <UploadIcon />
                  이미지 변경
                </div>
              </>
            ) : (
              <div className={styles.write_cover__placeholder}>
                <ImgIcon />
                <span>커버 이미지 추가</span>
              </div>
            )}
          </button>

          <input
            ref={fileInputRef}
            className={styles.write_file_input}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <p className={styles.write_date}>{date}</p>

          <textarea
            name="write_title_input"
            id="write_title_input"
            className={styles.write_title_input}
            placeholder="제목을 입력하세요"
            rows={1}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />

          <div className={styles.write_divider} />

          <textarea
            name="write_body_input"
            id="write_body_input"
            className={styles.write_body_input}
            placeholder="오늘의 이야기를 적어보세요..."
            rows={16}
            value={content}
            onChange={(e) => {
              handleContentChange(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
        </section>

        {/* 사이드바 */}
        <aside className={styles.write_sidebar}>
          {/* 태그 */}
          <div
            className={`${styles.write_sidebar__section} ${styles.write_sidebar__section__tags}`}
          >
            <p className={styles.write_sidebar__label}>태그</p>
            <div className={styles.write_tag_grid}>
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`${styles.write_tag} ${
                    selectedTag === tag ? styles.write_tag__active : ""
                  }`}
                  onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                  aria-pressed={selectedTag === tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.write_sidebar__divider} />

          {/* 오늘의 기분 */}
          <div
            className={`${styles.write_sidebar__section} ${styles.write_sidebar__section__mood}`}
          >
            <p className={styles.write_sidebar__label}>오늘의 기분</p>
            <div className={styles.write_mood_grid}>
              {MOODS.map(({ icon, label }) => (
                <button
                  key={label}
                  type="button"
                  className={`${styles.write_mood} ${
                    selectedMood === label ? styles.write_mood__active : ""
                  }`}
                  onClick={() =>
                    setSelectedMood(selectedMood === label ? "" : label)
                  }
                  aria-label={label}
                  aria-pressed={selectedMood === label}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.write_sidebar__divider} />

          {/* 날씨 */}
          <div
            className={`${styles.write_sidebar__section} ${styles.write_sidebar__section__weather}`}
          >
            <p className={styles.write_sidebar__label}>날씨</p>
            <div className={styles.write_mood_grid}>
              {WEATHERS.map(({ icon, label }) => (
                <button
                  key={label}
                  type="button"
                  className={`${styles.write_mood} ${
                    selectedWeather === label ? styles.write_mood__active : ""
                  }`}
                  onClick={() =>
                    setSelectedWeather(selectedWeather === label ? "" : label)
                  }
                  aria-label={label}
                  aria-pressed={selectedWeather === label}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.write_sidebar__divider} />

          {/* 글 작성 통계 */}
          <div
            className={`${styles.write_sidebar__section} ${styles.write_stats}`}
          >
            <div className={styles.write_stats__row}>
              <span className={styles.write_stats__key}>글자 수</span>
              <span className={styles.write_stats__val}>
                {charCount.toLocaleString()}
              </span>
            </div>
            <div className={styles.write_stats__row}>
              <span className={styles.write_stats__key}>읽기 시간</span>
              <span className={styles.write_stats__val}>약 {readTime}분</span>
            </div>
            <div className={styles.write_stats__row}>
              <span className={styles.write_stats__key}>작성일</span>
              <span className={styles.write_stats__val}>{date}</span>
            </div>
          </div>

          {/* 발행 알림 토스트 */}
          {isSaved && (
            <div className={styles.write_save_notice}>
              <CheckIcon />
              발행되었습니다
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
