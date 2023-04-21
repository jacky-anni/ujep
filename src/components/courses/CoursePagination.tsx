import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Divider, Skeleton } from "antd";
import { CourseKey } from "../../ultils/keys";
import { ListCourse } from "../../actions/CourseAction";
import Alert from "@mui/material/Alert";

export const CoursePagination = ({ count }: any) => {
  // initialize query client
  const queryClient = useQueryClient();

  const data: any = queryClient.getQueryData([CourseKey]);

  const { isLoading, mutate, isError }: any = useMutation(
    async (values: any) => {
      return ListCourse(values);
    },

    {
      onSuccess: (result) => {
        const data_ = {
          data: data.data.concat(result.data),
          meta: result.meta,
        };

        if (result.data.length >= 1) {
          queryClient.setQueryData([CourseKey], () => data_);
        }
      },
    }
  );

  const onLoadMore = () => {
    mutate(count);
  };

  return (
    <>
      <Divider />
      <Skeleton title={false} loading={isLoading} paragraph active></Skeleton>
      <Skeleton title={false} loading={isLoading} paragraph active></Skeleton>
      <Skeleton title={false} loading={isLoading} paragraph active></Skeleton>

      {isError && (
        <Alert variant='filled' severity='error' className='mb-3'>
          {"Une erreur s'est produite"}
        </Alert>
      )}

      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore} loading={isLoading}>
          Voir plus de cours
        </Button>
      </div>
    </>
  );
};
