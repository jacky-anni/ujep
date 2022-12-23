import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { deleteField } from "../../redux/actions/DeleteAction";
import LunchDeleteModal from "../Ui/LunchDeleteModal";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { studentDelete } from "../../redux/StudentsSlice";

interface IdOptions {
  id: string;
}

const DeleteStudent = ({ id }: IdOptions) => {
  const [loading, setLoading] = useState(false);
  const [dismisModal, setDismisModal] = useState(true);
  // use dispatch to update
  const dispatch = useAppDispatch();
  // delete fonction
  const deleteStudent = async () => {
    setLoading(true);
    const data = await deleteField("students", id);
    if (data.status === 404) {
      setLoading(false);
      toast.error(data.message);
    } else {
      setLoading(false);
      setDismisModal(false);
      dispatch(studentDelete(data));
      toast.success("Etudiant supprimé avec succès");
    }
  };
  // dele components
  const boutton = (
    <>
      <button
        className='btn btn-light'
        disabled={loading}
        onClick={deleteStudent}
        data-bs-dismiss={`${dismisModal && "modal"}`}
      >
        <span
          className={`${loading && "spinner-border"} spinner-border-sm me-1`}
          role='status'
          aria-hidden='true'
        />
        <b>
          {" "}
          <i className='fa fa-trash'></i>{" "}
          {!loading ? "Supprimer" : "Chargement..."}
        </b>
      </button>
    </>
  );

  const BottomText = (
    <>
      <span style={{ color: "white", fontSize: "13px" }}>
        <i className='fa fa-trash'></i>
      </span>
    </>
  );

  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <LunchDeleteModal
        modalName={`students${id}`}
        title={BottomText}
        text={"Voulez vous vraiment supprimer cet employé ?"}
        deleteButton={boutton}
      />
    </>
  );
};

export default DeleteStudent;
