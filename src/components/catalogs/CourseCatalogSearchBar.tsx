import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { searchCourse, clearSearchCourse } from "../../redux/CatalogState";
import { useQueryClient } from "@tanstack/react-query";
import { CourseKey } from "../../ultils/keys";

export const CourseCatalogSearchBar = () => {
  const text: any = useRef(null);
  const dispatch = useAppDispatch();
  const catalog = useAppSelector((state) => state.catalog);

  const queryClient = useQueryClient();
  const data: any = queryClient.getQueryData([
    CourseKey,
    "courseWihoutPagination",
  ]);

  useEffect(() => {
    if (catalog.filtered === null || text.current.value === "") {
      dispatch(clearSearchCourse());
      text.current.value = "";
    }
  }, [catalog.filtered, dispatch]);

  const onChange = (e: any) => {
    if (text.current.value !== "") {
      const dataFitered = data.filter((course: any) => {
        const regex = new RegExp(`${text.current?.value}`, "gi");
        return course.nom_cours.match(regex);
      });
      dispatch(searchCourse(dataFitered));
    } else {
      dispatch(clearSearchCourse());
    }
  };
  return (
    <>
      <form>
        <div className='mb-2'>
          <label htmlFor='inputPassword2' className='visually-hidden'>
            Search
          </label>
          <input
            type='search'
            className='form-control'
            id='inputPassword2'
            placeholder='Rechercher un cours...'
            ref={text}
            onChange={onChange}
          />
        </div>
      </form>
    </>
  );
};
