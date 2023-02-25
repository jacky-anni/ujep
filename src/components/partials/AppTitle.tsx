import { Avatar } from "antd";
import { PictureOutlined } from "@ant-design/icons";
interface AddProps {
  title: string;
  img?: string;
}

export const AppTitle = ({ title, img }: AddProps) => {
  const path = "/assets/images/icon";
  const format = ".png";
  return (
    <>
      <h4 className=' bg-white p-2 mt-2 bold '>
        <Avatar
          icon={<PictureOutlined />}
          src={`${path}/${img}${format}`}
          size={30}
          shape='square'
        />{" "}
        {title}
      </h4>
    </>
  );
};
