const BannerStudents = ({ student }: any) => {
  return (
    <>
      {student && (
        <div className='card text-center'>
          <div className='card-body'>
            <img
              src='/assets/images/users/user-1.jpg'
              className='rounded-circle avatar-lg img-thumbnail'
              alt='profile-image'
            />
            <h4 className='mb-0'>
              {student.person.prenom} {student.person.nom}
            </h4>
            <p className='text-muted'>{student.code}</p>
            <button
              type='button'
              className='btn btn-success btn-xs waves-effect mb-2 waves-light'
            >
              Profile
            </button>
            {/* <button
            type='button'
            className='btn btn-danger btn-xs waves-effect mb-2 waves-light'
          >
            Message
          </button> */}
            <div className='text-start mt-3'>
              <h4 className='font-13 text-uppercase'>About Me :</h4>
              <p className='text-muted font-13 mb-3'>
                Hi I'm Johnathn Deo,has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type.
              </p>
              <p className='text-muted mb-2 font-13'>
                <strong>Telephone :</strong>{" "}
                <span className='ms-2'>{student.person.telephone}</span>
              </p>
              <p className='text-muted mb-2 font-13'>
                <strong>Email :</strong>
                <span className='ms-2'>{student.person.email}</span>
              </p>
              <p className='text-muted mb-2 font-13'>
                <strong>Date de naissance :</strong>{" "}
                <span className='ms-2'>{student.person.date_naissance}</span>
              </p>
              <p className='text-muted mb-1 font-13'>
                <strong>Lieu de naissance :</strong>{" "}
                <span className='ms-2'>{student.lieu_naissance}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerStudents;
