import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { EmployeeKey, StudentKey } from "../../ultils/keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Box, LinearProgress } from "@mui/material";
import { GetStudents } from "../../actions/StudentAction";

const StudentPagination = (props: any) => {
  // initialize loading
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 20, color: "#7d56c2" }} spin />
  );
  // initialize query client
  const queryClient = useQueryClient();

  const { isLoading, mutate, isError, error } = useMutation(
    async (values: number) => {
      return await GetStudents(values);
    },
    {
      onSuccess: (result, variables, context) => {
        queryClient.setQueryData([StudentKey], () => result);
      },
    }
  );

  const onChange: PaginationProps["onChange"] = async (pageNumber) => {
    mutate(pageNumber);
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return (
        <>
          {isLoading && (
            <>
              <Spin indicator={antIcon} /> &nbsp;
            </>
          )}
          <span style={{ cursor: "pointer" }}>Précédent</span>
        </>
      );
    }
    if (type === "next") {
      return <span style={{ cursor: "pointer" }}>Suivante</span>;
    }
    return originalElement;
  };
  return (
    <>
      <p className='justify-content-end mb-0 mt-2'>
        Page {props.meta.CurrentPage} sur {props.meta.lastPaginate} dans{" "}
        {props.total} entrées{" "}
      </p>
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color='secondary' />
        </Box>
      )}

      <p className='justify-content-end mb-0 mt-2' style={{ float: "right" }}>
        <Pagination
          defaultCurrent={1}
          total={props.meta.total}
          onChange={onChange}
          pageSize={15}
          showSizeChanger={false}
          itemRender={itemRender}
          disabled={isLoading}
        />
      </p>

      {isError && (
        <p className='alert alert-danger p-2 bold'>
          Une erreur lors de l'actualisation des données
        </p>
      )}
    </>
  );
};

export default StudentPagination;
//
