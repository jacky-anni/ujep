import { toast } from "react-toastify";

interface Config {
  position: any;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: boolean;
  theme: string;
}

const config: Config = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: true,
  theme: "light",
};

export const Toast = (type: string, message: string) => {
  switch (type) {
    case "error":
      return toast.error(message, {
        position: config.position,
        autoClose: config.autoClose,
        hideProgressBar: config.hideProgressBar,
        closeOnClick: config.closeOnClick,
        pauseOnHover: config.pauseOnHover,
        draggable: config.draggable,
        //progress: ,
      });
      break;

    case "success":
      return toast.success(message, {
        position: config.position,
        autoClose: config.autoClose,
        hideProgressBar: config.hideProgressBar,
        closeOnClick: config.closeOnClick,
        pauseOnHover: config.pauseOnHover,
        draggable: config.draggable,
        //progress: config.progress,
      });
      break;

    default:
      return toast.success(message, {
        position: config.position,
        autoClose: config.autoClose,
        hideProgressBar: config.hideProgressBar,
        closeOnClick: config.closeOnClick,
        pauseOnHover: config.pauseOnHover,
        draggable: config.draggable,
        //progress: config.progress,
      });
      break;
  }
};
