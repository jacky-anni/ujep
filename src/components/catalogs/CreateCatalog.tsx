import { Divider, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { openModal, setFacuty } from "../../redux/CatalogState";
import { CreateCatalogForm } from "./CreateCatalogForm";

export const CreateCatalog = ({ faculty }: any) => {
  const dispatch = useAppDispatch();
  const catalog = useAppSelector((state) => state.catalog);

  const showModal = () => {
    dispatch(setFacuty(faculty));
    dispatch(openModal(true));
  };

  const handleCancel = () => {
    //dispatch(setFacuty(null));
    dispatch(openModal(false));
  };

  return (
    <>
      <>
        <button
          onClick={showModal}
          type='button'
          className='btn btn-outline-primary waves-effect waves-light btn-sm'
        >
          <i className='fa fa-plus'></i> Ajouter
        </button>

        <Modal
          title={
            <>
              <h4>Ajouter des cours au catelogue</h4>
              <Divider />
            </>
          }
          width={700}
          open={catalog.createCatalogModalOpen}
          onCancel={handleCancel}
          maskClosable={false}
          footer={[]}
        >
          <CreateCatalogForm />
        </Modal>
      </>
    </>
  );
};
