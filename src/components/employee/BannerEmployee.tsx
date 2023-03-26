import { Avatar } from "antd";
import { PictureOutlined } from "@ant-design/icons";

export const BannerEmployee = ({ employee }: any) => {
  return (
    <>
      {employee && (
        <div className='card text-cesnter'>
          <div className='card-body'>
            <div className='d-flex align-items-start'>
              <Avatar
                icon={<PictureOutlined />}
                src={""}
                size={55}
                shape='square'
              />
              <div className='w-100 ps-1'>
                <h3 className='mt-1 mb-0 bold'>
                  {" "}
                  {employee.person.prenom} {employee.person.nom}
                </h3>
                <p className='mb-1 mt-1 text-muted'>{employee.fonction}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
