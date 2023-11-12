import { PetEntity } from "./pet-entity";
import { TutorEntity } from "./tutor-entity";
import { VeterinarianEntity } from "./veterinarian-entity";

export type AppointmentEntity = {
  veterinarianDetails: VeterinarianEntity;
  tutorDetails: TutorEntity;
  requestStatus: "pending" | "accepted" | "rejected" | "finished";
  finishedAt?: Date;
  wasRejected: boolean;
  petDetails: PetEntity;
  note?: string;
};
