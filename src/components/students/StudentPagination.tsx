import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setPagination, clearLoading } from "../../redux/StudentsSlice";
import { GetStudents } from "../../actions/StudentAction";

const StudentPagination = (props: any) => {
  const dispatch = useAppDispatch();

  const onChange: PaginationProps["onChange"] = async (pageNumber) => {
    // st loading for fething employee information
    dispatch(clearLoading());
    // fetch data
    const data = await GetStudents(pageNumber);

    // dispatch the emplyees
    dispatch(setPagination(data));
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <span style={{ cursor: "pointer" }}>Précédent</span>;
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
      <p className='justify-content-end mb-0 mt-2' style={{ float: "right" }}>
        <Pagination
          defaultCurrent={1}
          total={props.meta.total}
          onChange={onChange}
          pageSize={15}
          showSizeChanger={false}
          itemRender={itemRender}
        />
      </p>
    </>
  );
};

export default StudentPagination;
