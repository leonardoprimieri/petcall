import { TutorEntity } from "./tutor-entity";
import { VeterinarianEntity } from "./veterinarian-entity";

export type AppointmentEntity = {
  veterinarianDetails: VeterinarianEntity;
  tutorDetails: TutorEntity;
  requestStatus: "pending" | "accepted" | "rejected" | "finished";
  finishedAt?: Date;
};
