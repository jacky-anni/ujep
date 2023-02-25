interface AddProps {
  title: string;
}

const AppTitle = ({ title }: AddProps) => {
  return (
    <>
      <h4 className=' bg-white'>{title}</h4>
    </>
  );
};

export default AppTitle;
