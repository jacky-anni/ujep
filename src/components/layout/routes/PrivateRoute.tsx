import { Route } from "react-router-dom";

const PrivateRoute = async () => {
  return (
    <>
      <h1>ssdsdsd</h1>
      {/* <Route {...rest} render={(props: any) => <Component {...props} />} /> */}
    </>
  );
};

// const PrivateRoute: FC = ({ children }) => {
//   const { user } = useContext(ContextProvider); //Auth context
//   return user?.id ? ( //Check if logged in
//     <>
//       {children} //This is your children
//       <Outlet /> //This is your nested route
//     </>
//   ) : (
//     <Navigate to='/login' replace /> //Go back to login if not logged in
//   );
// };

export default PrivateRoute;
