import DATA from "@/data/diary.dumy.json";
import type { Diary } from "@/types/Diary.type";

export default function getDataForId(id: Diary["id"]): Diary {
  const response = DATA.filter(({ id: DataId }) => DataId === id);

  return response[0];
}
