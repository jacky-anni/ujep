import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export const NotFoundTemplate = ({ message }: any) => {
  const navigate = useNavigate();
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={() => navigate(-1)}>
          Retourner à la page précedente
        </Button>
      }
    />
  );
};
