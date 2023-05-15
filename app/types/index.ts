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
