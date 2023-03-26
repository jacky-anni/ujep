import { Divider, List, Typography } from "antd";
import React from "react";
import { MenuAvatar } from "../Ui/MenuAvatar";
import { ButtonProfile } from "./Ui/ButtonProfile";

export const OptionsNavStudent = () => {
  return (
    <>
      <ButtonProfile
        title='Immatriculation'
        subtitle="Toutes les infos sur l'imm."
        img={"immatriculation"}
      />
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
