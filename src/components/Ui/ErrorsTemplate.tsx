interface Errors {
  message: string;
  type: string;
}

const ErrorsTemplate = ({ message, type }: Errors) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

export default ErrorsTemplate;
