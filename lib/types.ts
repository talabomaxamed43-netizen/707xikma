export type WisdomCategory =
  | 'Nolosha'
  | 'Guusha'
  | 'Samirka'
  | 'Waaya-aragnimada'
  | 'Aqoonta';

export interface WisdomQuote {
  id: number;
  text: string;
  author: string;
  category: WisdomCategory;
  likes: number;
  featured?: boolean;
}

export interface SubmissionPayload {
  category: WisdomCategory;
  text: string;
  author: string;
}
