import { Avatar } from "antd";
import { PictureOutlined } from "@ant-design/icons";

export const MenuAvatar = ({ img, size = "50" }: any) => {
  const path = "/assets/images/icon";
  const format = ".png";

  return (
    <>
      <Avatar
        icon={<PictureOutlined />}
        src={`${path}/${img}${format}`}
        size={size}
        shape='square'
      />
    </>
  );
};
