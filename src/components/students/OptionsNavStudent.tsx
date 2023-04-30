import { RegistrationForm } from "./regislation/RegistrationForm";
import { ButtonProfile } from "./Ui/ButtonProfile";

export const OptionsNavStudent = () => {
  return (
    <>
      <RegistrationForm />

      <ButtonProfile
        bg={"danger"}
        title='Réinscription'
        subtitle='Toutes les infos sur réinscription'
        img={"register"}
      />
      <ButtonProfile
        bg={"success"}
        img={"payment"}
        title='Paiement'
        subtitle='Toutes les infos sur le paiement.'
      />
    </>
  );
};
