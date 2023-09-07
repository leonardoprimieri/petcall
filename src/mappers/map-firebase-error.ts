export const mapFirebaseError = (code: string) => {
  switch (code) {
    case "auth/user-not-found":
      return "Usuário não encontrado";

    case "auth/wrong-password":
      return "Credenciais inválidas";

    case "auth/invalid-email":
      return "Credenciais inválidas";

    case "auth/too-many-requests":
      return "Muitas tentativas de login inválidas. Tente novamente mais tarde";

    case "auth/user-disabled":
      return "Usuário desativado";

    default:
      return "Erro desconhecido";
  }
};
