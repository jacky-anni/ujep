import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { deleteField } from "../../actions/DeleteAction";
import { EmployeeDelete } from "../../redux/EmployeeSlice";
import LunchDeleteModal from "../Ui/LunchDeleteModal";
import { useAppDispatch } from "../../redux/hooks/hooks";

interface IdOptions {
  id: string;
}

const DeleteEmployee = ({ id }: IdOptions) => {
  const [loading, setLoading] = useState(false);
  const [dismisModal, setDismisModal] = useState(true);
  // use dispatch to update
  const dispatch = useAppDispatch();
  // delete fonction
  const deleteEmployee = async () => {
    setLoading(true);
    const data = await deleteField("employees", id);
    if (data.status === 404) {
      setLoading(false);
      toast.error(data.message);
    } else {
      setLoading(false);
      setDismisModal(false);
      dispatch(EmployeeDelete(data));
      toast.success("Employé supprimé avec succès");
    }
  };
  // dele components
  const boutton = (
    <>
      <button
        className='btn btn-light'
        disabled={loading}
        onClick={deleteEmployee}
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
      <span style={{ fontSize: "13px", color: "red", fontWeight: "bold" }}>
        <i className='fa fa-trash' style={{ cursor: "pointer" }}></i> Supprimer
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
        modalName={`employee${id}`}
        title={BottomText}
        text={"Voulez vous vraiment supprimer cet employé ?"}
        deleteButton={boutton}
      />
    </>
  );
};

export default DeleteEmployee;
