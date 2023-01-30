export const errors = (errors: any) => {
  switch (errors.response.status) {
    case 500:
      return "Erreur serveur";
    case 400:
      return errors.response.data.sqlMessage;
    case 404:
      return errors.response.data.message;
      break;

    default:
      break;
  }
};
