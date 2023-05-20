export type Destination = {
  _id: string;
  name: string;
  pricePerTicket: string;
  timePerTicket: string;
  openingTime: string;
  closingTime: string;
  address: string;
  latitude: number;
  longitude: number;
  description: string;
  images: string[];
  featured: boolean;
  averageRating: number;
};

export type DestinationsType = {
  destinations?: Destination[];
  featuredDestinations?: Destination[];
  destination?: Destination;
  isLoading?: boolean;
  error?: any;
};

export type Action = {
  type: string;
  payload?: any;
};
