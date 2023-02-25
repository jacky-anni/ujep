import { toast } from "react-toastify";

interface Config {
  position: any;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  theme: "colored";
}

const config: Config = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: "colored",
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
        progress: config.progress,
        theme: config.theme,
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
        progress: config.progress,
        theme: config.theme,
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
        progress: config.progress,
      });
      break;
  }
};
