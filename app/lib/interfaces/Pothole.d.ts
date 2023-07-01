export default interface Pothole {
  _id: string;
  userId: string;
  description: string;
  images: (string | null)[];
  position: {
    lat: string;
    lng: string;
  };
}
