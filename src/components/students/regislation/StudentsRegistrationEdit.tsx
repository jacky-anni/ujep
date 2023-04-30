import React, { useEffect, useState } from "react";
import { Divider, Modal } from "antd";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { activeFacultyRegistration } from "../../../redux/StudentsSlice";

export const StudentsRegistrationEdit = ({ children }: any) => {
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
        <i className='fa fa-edit'></i>
      </span>

      <Modal
        title={
          <>
            <h4>Modifier cet immatriculation</h4> <Divider />
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
