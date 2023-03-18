import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NetWorkConnection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status='500'
      title='500'
      subTitle='Probleme de connexion, verfier votre connexion internet et reesayer'
      extra={
        <Button
          type='primary'
          onClick={() => {
            navigate(1);
          }}
        >
          Rafraichir la page
        </Button>
      }
    />
  );
};

export default NetWorkConnection;
