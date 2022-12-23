interface PropsButton {
  message: string;
  loading: boolean;
}

const SubmitButtom = ({ message, loading }: PropsButton) => {
  return (
    <>
      <button type='submit' className='btn btn-primary' disabled={loading}>
        <span
          className={`${loading && "spinner-border"} spinner-border-sm me-1`}
          role='status'
          aria-hidden='true'
        />
        <b>{!loading ? message : "Chargement..."}</b>
      </button>
    </>
  );
};

export default SubmitButtom;
