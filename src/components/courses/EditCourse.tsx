import { Divider, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { editModal } from "../../redux/CourseState";
import { EditCourseForm } from "./EditCourseForm";

export const EditCourse = (courses: any) => {
  const dispatch = useAppDispatch();
  const course = useAppSelector((state) => state.course);

  const showModal = () => {
    dispatch(editModal(true));
  };

  const handleCancel = () => {
    dispatch(editModal(false));
  };

  return (
    <>
      <button
        onClick={showModal}
        type='button'
        className='btn btn-outline-primary waves-effect waves-light'
      >
        <i className='fa fa-edit'></i> Modifier
      </button>

      <Modal
        title={
          <>
            <h4>Modifier ce cours</h4>
            <Divider />
          </>
        }
        width={700}
        open={course.editCourseModalOpen}
        onCancel={handleCancel}
        maskClosable={false}
        footer={[]}
      >
        <EditCourseForm course={courses.course} />
      </Modal>
    </>
  );
};
