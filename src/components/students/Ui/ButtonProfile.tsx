import { MenuAvatar } from "../../Ui/MenuAvatar";

export const ButtonProfile = ({
  bg = "primary",
  title,
  subtitle,
  img,
  link = "",
}: any) => {
  return (
    <>
      <div className={`card mb-1 shadow-none border bg-${bg}`}>
        <div className='p-2'>
          <div className='row align-items-center'>
            <div className='col-auto'>
              <div className='avatar-sm'>
                <MenuAvatar img={img} size={40} />
              </div>
            </div>
            <div className='col ps-0'>
              <h4 className='mb-0 ' style={style}>
                {title}
              </h4>
              <p className='mb-0 font-10' style={{ color: "yellow" }}>
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const style = {
  fontWeight: "bold",
  color: "white",
};
