import axios from "axios";

export const AddCourseForCatalog = (
  teacher: number,
  faculty: number,
  course: number,
  data: any
) => {
  delete data.teacher;

  console.log(teacher);
  console.log(faculty);
  console.log(course);
  console.log(data);

  return axios
    .post(
      `/catalogue?teacherId=${teacher}&faculteId=${faculty}&coursesId=${course}`,
      data
    )
    .then((res) => res.data);
};

// get catalogd
export const getCourseCatalog = (
  faculteId: number,
  semestre: string,
  annee_academique: number
) => {
  return axios
    .get(
      `/catalogue/filter?faculteId=${faculteId}&semestre=${semestre}&annee_academique=${annee_academique}`
    )
    .then((res) => res.data);
};
