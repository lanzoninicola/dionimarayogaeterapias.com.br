export interface Service {
  id: number;
  name: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string[];
  duration: number | number[];
}

export interface ServiceUI extends Service {
  infoMessage: string;
  bookingMessage: string;
}

export interface Deal {
  id: number;
  thumbnailImageURL: string;
  featuredImageURL: string;
  title: string;
  description: string;
  discount: number;
  dateStart: string;
  dateEnd: string;
  disabled: boolean;
}

export interface DealUI extends Deal {
  infoMessage: string;
  bookingMessage: string;
}

export type SitemapEntry = {
  route: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
};
export type Handle = {
  /** this just allows us to identify routes more directly rather than relying on pathnames */
  id?: string;
  getSitemapEntries?: (
    request: Request
  ) =>
    | Promise<Array<SitemapEntry | null> | null>
    | Array<SitemapEntry | null>
    | null;
};
