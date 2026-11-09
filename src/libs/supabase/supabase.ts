import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// ----------------------
// Types
// ----------------------
export type { Database };
export type Diary = Database["public"]["Tables"]["diaries"]["Row"];
export type DiaryInsert = Database["public"]["Tables"]["diaries"]["Insert"];
export type DiaryUpdate = Database["public"]["Tables"]["diaries"]["Update"];
export type DiaryList = Database["public"]["Tables"]["diaries"]["Row"][];
export type DiaryListInsert =
  Database["public"]["Tables"]["diaries"]["Insert"][];
export type DiaryListUpdate =
  Database["public"]["Tables"]["diaries"]["Update"][];
export type DiaryListList = Database["public"]["Tables"]["diaries"]["Row"][];
export type DiaryListListInsert =
  Database["public"]["Tables"]["diaries"]["Insert"][];
export type DiaryListListUpdate =
  Database["public"]["Tables"]["diaries"]["Update"][];
// ----------------------
