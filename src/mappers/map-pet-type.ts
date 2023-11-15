import { PetEntity } from "~/domain/entities/pet-entity";

export const mapPetType = (name: PetEntity["type"]) => {
  switch (name) {
    case "bird":
      return "Pássaro";

    case "cat":
      return "Gato";

    case "dog":
      return "Cachorro";

    case "guineaPig":
      return "Porquinho da Índia";

    default:
      return "Sem raça definida";
  }
};
