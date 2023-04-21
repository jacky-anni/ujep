import { Button, Divider, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { openModal } from "../../redux/CourseState";
import { CreateCourseForm } from "./CreateCourseForm";

export const CreateCourse = () => {
  const dispatch = useAppDispatch();
  const course = useAppSelector((state) => state.course);

  const showModal = () => {
    dispatch(openModal(true));
  };

  const handleCancel = () => {
    dispatch(openModal(false));
  };

  return (
    <>
      <>
        <button
          onClick={showModal}
          type='button'
          className='btn btn-primary bold'
          data-bs-target='#custom-modal'
        >
          <i className='fa fa-book'></i> &nbsp; Ajouter cours
        </button>

        <Modal
          title={
            <>
              <h4>Ajouter un cours</h4>
              <Divider />
            </>
          }
          width={700}
          open={course.createCourseModalOpen}
          onCancel={handleCancel}
          maskClosable={false}
          footer={[]}
        >
          <CreateCourseForm />
        </Modal>
      </>
    </>
  );
};
