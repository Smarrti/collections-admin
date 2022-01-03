export type VideoContentType = {
  source: string;
  id: string;
};

export type SongContentType = {
  bookId: number;
  songId: number;
  title: string;
  notesSources: {
    url: string;
    title: string;
  }[];
  notes: {
    url: string;
    title: string;
  }[];
  videosId: VideoContentType[];
};
