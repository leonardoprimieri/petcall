type PetType = "dog" | "cat" | "bird" | "guineaPig";

export type PetEntity = {
  userId?: string;
  name: string;
  weight: string;
  birthday: string;
  type: PetType;
  brand: string;
  imageUrl: string;
  id?: string;
};
