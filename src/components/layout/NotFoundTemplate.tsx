import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export const NotFoundTemplate = ({
  title = "La page que vous recherchez n'est pas disponible",
}: any) => {
  const navigate = useNavigate();
  return (
    <div className='col-md-12 bg-white'>
      <Result
        status='404'
        title='404'
        subTitle={title}
        extra={
          <Button type='primary' onClick={() => navigate(-1)}>
            Retourner à la page précedente
          </Button>
        }
      />
    </div>
  );
};
