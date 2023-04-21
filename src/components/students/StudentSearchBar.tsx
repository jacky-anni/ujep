import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "antd";
import { seachStudent } from "../../actions/StudentAction";
import { StudentKey } from "../../ultils/keys";
const { Search } = Input;

export const StudentSearchBar = () => {
  // initialize query client
  const queryClient = useQueryClient();

  const { data, isLoading, mutate, error, isError, isSuccess } = useMutation(
    async (values: string) => {
      return await seachStudent(values);
    },
    {
      onMutate: (result) => {
        //Update the cache with the new user
        // queryClient.setQueryData([StudentKey], () => [
        //   result,
        //   ...students.data,
        // ]);
      },
      onSuccess: (result) => {
        queryClient.setQueryData([StudentKey, "search"], () => result);

        console.log(result);

        // if (result) {
        // }
        queryClient.invalidateQueries([StudentKey]);
      },
    }
  );
  const onSearch = async (value: string) => {
    mutate(value);

    // dispatch(clearLoading());
    // const data: any = await searchTransaction(value);

    // if (!value) {
    //   dispatch(planFilter(false));
    // } else {
    //   if (typeof data !== "undefined") {
    //     if (!data.status) {
    //       dispatch(planFilter(true));
    //       dispatch(searchTansactions(data));
    //     }
    //   }
    // }
  };
  return (
    <>
      <div className='col-auto'>
        <div className='mb-2'>
          <Search
            placeholder='Rechercher...'
            allowClear
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
    </>
  );
};
