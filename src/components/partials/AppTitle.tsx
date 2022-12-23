interface AddProps {
  title: string;
}

const AppTitle = ({ title }: AddProps) => {
  return (
    <>
      <h4 className='page-title'>{title}</h4>
    </>
  );
};

export default AppTitle;
