export const ErrorManagement = (res: any) => {
  let link = "/dashbord/not-authaurized";

  let code = res.request.status;

  if (code === 401) {
    window.location.href = link;
    code = 401;
  } else {
    return {
      status: res.request.status,
      message: res.response.data.message,
    };
  }
};
