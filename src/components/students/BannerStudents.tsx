import { Avatar, Divider } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import { OptionsNavStudent } from "./OptionsNavStudent";

const BannerStudents = ({ student }: any) => {
  return (
    <>
      {student && (
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
                  {student.person.prenom} {student.person.nom}
                </h3>
                <p className='mb-1 mt-1 text-muted'>{student.code}</p>
              </div>
            </div>
            <Divider />
            <OptionsNavStudent />
          </div>
        </div>
      )}
    </>
  );
};

export default BannerStudents;
