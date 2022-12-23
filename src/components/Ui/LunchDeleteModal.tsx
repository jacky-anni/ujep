interface ButtonOptions {
  modalName: string;
  title: any;
  text: string;
  deleteButton: any;
}

const LunchDeleteModal = ({
  modalName,
  title,
  text,
  deleteButton,
}: ButtonOptions) => {
  return (
    <>
      <span
        className='action-icon'
        data-bs-toggle='modal'
        data-bs-target={`#${modalName}`}
      >
        {title}
      </span>
      <div
        id={`${modalName}`}
        className='modal fade'
        tabIndex={-1}
        role='dialog'
        aria-hidden='true'
      >
        <div
          className='modal-dialog dialog-centered modal-md backdrop'
          style={{ marginTop: "140px" }}
        >
          <div className='modal-content modal-filled bg-danger'>
            <div className='modal-body p-4'>
              <div className='text-center'>
                {/* <i className='fa fa-user h1 text-white' /> */}
                <h4 className='mt-2 text-white'>Attention !</h4>
                <p
                  style={{ display: "block", fontWeight: "bold" }}
                  className='mt-3 text-white'
                >
                  {text}
                </p>
                {deleteButton}
                &nbsp;&nbsp;
                <button
                  type='button'
                  className='btn btn-light my-2'
                  data-bs-dismiss='modal'
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
};

export default LunchDeleteModal;
