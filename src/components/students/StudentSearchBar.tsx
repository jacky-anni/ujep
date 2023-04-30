import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { StudentKey } from "../../ultils/keys";
import { clearSearchStudents, searchStudents } from "../../redux/StudentsSlice";

export const StudentSearchBar = () => {
  const text: any = useRef(null);
  const dispatch = useAppDispatch();
  const student = useAppSelector((state) => state.student);

  const queryClient = useQueryClient();
  const data: any = queryClient.getQueryData([StudentKey]);

  useEffect(() => {
    if (student.filtered === null || text.current.value === "") {
      text.current.value = "";
      dispatch(clearSearchStudents());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [student.filtered]);

  const onChange = (e: any) => {
    if (text.current.value !== "") {
      const dataFitered = data.filter((students: any) => {
        const regex = new RegExp(`${text.current?.value}`, "gi");
        return (
          students.person.nom.match(regex) ||
          students.person.prenom.match(regex)
        );
      });

      dispatch(searchStudents(dataFitered));
    } else {
      dispatch(clearSearchStudents());
    }
  };
  return (
    <>
      <div className=' col-md-6 mb-2'>
        <form>
          <label htmlFor='inputPassword2' className='visually-hidden'>
            Search
          </label>
          <input
            type='search'
            className='form-control'
            placeholder='Rechercher  etudiant...'
            ref={text}
            onChange={onChange}
          />
        </form>
      </div>
    </>
  );
};
