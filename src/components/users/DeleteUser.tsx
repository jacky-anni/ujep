import { CloseCircleFilled } from "@ant-design/icons";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { deleteUser_ } from "../../redux/actions/UserAction";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteUser } from "../../redux/UserSlice";

export const DeleteUser = ({ user }: any) => {
  const dispatch = useAppDispatch();
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: "Voulez-vous vraiment supprimer",
      icon: <ExclamationCircleFilled />,
      content: user.person.prenom + "  " + user.person.nom,
      okText: "Wi",
      okType: "primary",
      cancelText: "Non",
      async onOk() {
        const data = await deleteUser_(user.person.uuid);

        if (data && data.status) {
          toast.error(data.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.success("Voulez-vous vraiment supprimer ", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
          dispatch(deleteUser(data));
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <>
      <span className='btn btn-danger btn-xs' onClick={showDeleteConfirm}>
        <b>
          {" "}
          <CloseCircleFilled />
        </b>
      </span>
    </>
  );
};
