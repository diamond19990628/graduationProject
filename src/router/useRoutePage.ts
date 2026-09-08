import { useNavigate, useParams, useSearchParams } from "react-router-dom";

// 分类由路径决定；缺失或未知分类显示默认页。
export function useCategoryPage(base: string, categories: readonly string[], first = 0) {
  const { category } = useParams();
  const navigate = useNavigate();
  const index = categories.indexOf(category ?? "");
  const page = index < 0 ? first : index + first;
  const setPage = (next: number) => {
    const slug = categories[next - first];
    if (slug !== undefined) navigate(`${base}${slug ? `/${slug}` : ""}`);
  };
  return [page, setPage] as const;
}

// 作品翻页进入浏览器历史，并限制 URL 中的页码范围。
export function useQueryPage(key: string, first: number, last: number) {
  const [params, setParams] = useSearchParams();
  const value = Number(params.get(key) ?? first);
  const page = Number.isInteger(value) && value >= first && value <= last ? value : first;
  const setPage = (next: number) => {
    if (!Number.isInteger(next) || next < first || next > last) return;
    setParams(previous => {
      const updated = new URLSearchParams(previous);
      if (next === first) updated.delete(key);
      else updated.set(key, String(next));
      return updated;
    });
  };
  return [page, setPage] as const;
}
