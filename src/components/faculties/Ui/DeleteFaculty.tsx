import { ExclamationCircleFilled } from "@ant-design/icons";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Button, Modal } from "antd";
import { useState } from "react";
import { getFaculties } from "../../../redux/FacultySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { FacultyKey } from "../../../ultils/keys";
import { Toast } from "../../layout/Toast";
import {
  CreateFaculty,
  GetFaculties,
  DeleteFaculty as deleteFac,
} from "./../../../actions/FacultyActions";

export const DeleteFaculty = ({ faculty }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const facultyState: any = useAppSelector((state) => state.faculty);
  const dispatch = useAppDispatch();
  // initialize query client
  const queryClient = useQueryClient();

  // mutaion
  const { isLoading, mutate } = useMutation(
    async (values: any) => {
      await deleteFac(values);
      // return values;
    },
    {
      onMutate: async (result) => {
        //Update the cache with the new user
        return facultyState.faculties.filter(
          (fac: any) => fac.id !== result.id
        );
      },
      onSuccess: async (result, variables, context) => {
        await dispatch(getFaculties(context));
        await queryClient.invalidateQueries([FacultyKey]);
        setIsModalOpen(false);
        Toast("success", "Faculté enregistré avec succès");
      },
      onError: (error, variables, context) => {
        setIsModalOpen(false);
        Toast("error", "Probleme lors de la suppresion");
      },
    }
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    mutate(faculty);
    //setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <span
        className='dropdown-item'
        onClick={showModal}
        style={{ cursor: "pointer" }}
      >
        <i className='fa fa-trash'></i> Delete
      </span>

      <Modal
        width={450}
        title={
          <>
            <ExclamationCircleFilled />
            &nbsp; Voulez vous vraiment supprimer
          </>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Non
          </Button>,
          <Button
            key='Oui'
            type='primary'
            loading={isLoading}
            onClick={handleOk}
          >
            Oui
          </Button>,
        ]}
      >
        <p>{faculty.nom_faculte}</p>
      </Modal>
    </>
  );
};
