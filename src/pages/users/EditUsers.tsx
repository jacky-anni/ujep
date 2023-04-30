import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { showUser } from "../../actions/UserAction";
import { NotFoundTemplate } from "../../components/layout/NotFoundTemplate";
import { AppTitle } from "../../components/partials/AppTitle";
import { EditUsersForm } from "../../components/users/EditUsersForm";
import { UserKey } from "../../ultils/keys";
import { DataLoading } from "../../components/layout/DataLoading";

export const EditUsers = () => {
  const { user }: any = useParams();
  const { data, isLoading, isError, error } = useQuery(
    [UserKey, user],
    () => showUser(user),
    {
      cacheTime: 0,
    }
  );

  const err: any = error;

  return (
    <>
      <AppTitle title={"Modifier un utilisateur"} img={"users"} />
      <div className='bg-white'>
        <div className='col-md-12 p-2'>
          {isLoading ? (
            <DataLoading />
          ) : isError ? (
            <NotFoundTemplate message={err.response.data.message} />
          ) : (
            <EditUsersForm user={data} />
          )}
        </div>
      </div>
    </>
  );
};
