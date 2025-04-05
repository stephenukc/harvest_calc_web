interface Meta {
  total_count: number;
}

interface ItemMeta {
  type: string;
  detail_url: string;
  html_url: string | null;
  slug: string;
  first_published_at: string;
}

interface BlogItem {
  id: number;
  meta: ItemMeta;
  title: string;
  date: string;
  intro: string;
  body: string;
  tags: string[];
}

interface BlogPagesResponse {
  meta: Meta;
  items: BlogItem[];
}
