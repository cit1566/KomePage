import type { Diary } from "@/types/Diary.type";
import DATA from "@/data/diary.dumy.json";

export default function getSearchId(id: Diary["id"], type?: "befor"): boolean {
  const NextId = id + 1;
  const BeforId = id - 1;
  if (type === "befor")
    return DATA.some((DIARYData) => DIARYData.id === BeforId);
  else return DATA.some((DIARYData) => DIARYData.id === NextId);
}
