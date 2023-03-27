const StudentSearchBar = () => {
  return (
    <>
      <div className='col-auto'>
        <form>
          <div className='mb-2'>
            <label htmlFor='inputPassword2' className='visually-hidden'>
              Search
            </label>
            <input
              type='search'
              className='form-control'
              id='inputPassword2'
              placeholder='Search...'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentSearchBar;
