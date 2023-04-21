export const errorBoundary = ({ error, resetErrorBoundary }: any) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role='alert'>
      <p>Quelque chose s'est mal passé:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};
