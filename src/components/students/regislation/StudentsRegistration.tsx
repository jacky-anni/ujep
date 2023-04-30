import React, { useEffect, useState } from "react";
import { Divider, Modal } from "antd";
import { ButtonProfile } from "../Ui/ButtonProfile";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { activeFacultyRegistration } from "../../../redux/StudentsSlice";

export const StudentsRegistration = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    dispatch(
      activeFacultyRegistration({
        active: true,
        faculty: null,
      })
    );
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (children === true) {
      handleCancel();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <>
      <span onClick={showModal} style={{ cursor: "pointer" }}>
        <ButtonProfile
          title='Immatriculation'
          subtitle="Toutes les infos sur l'imm."
          img={"immatriculation"}
        />
      </span>

      <Modal
        title={
          <>
            <h4>Immatriculer cet etudiant</h4> <Divider />
          </>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
        width={700}
      >
        {children}
      </Modal>
    </>
  );
};
