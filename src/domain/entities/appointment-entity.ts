import { TutorEntity } from "./tutor-entity";

export type AppointmentEntity = {
  veterinarianId: string;
  tutorDetails: TutorEntity;
  requestStatus: "pending" | "accepted" | "rejected" | "finished";
};
