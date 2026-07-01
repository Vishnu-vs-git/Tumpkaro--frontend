import type { HistoryItem } from "./history.types";

export const mockHistory: HistoryItem[] = [
  {
    id: 1,
    title: "Gaming Thumbnail",
    thumbnail: "https://picsum.photos/120/80?random=1",
    createdAt: "2 mins ago",
  },
  {
    id: 2,
    title: "Finance Thumbnail",
    thumbnail: "https://picsum.photos/120/80?random=2",
    createdAt: "15 mins ago",
  },
  {
    id: 3,
    title: "Travel Thumbnail",
    thumbnail: "https://picsum.photos/120/80?random=3",
    createdAt: "Yesterday",
  },
];