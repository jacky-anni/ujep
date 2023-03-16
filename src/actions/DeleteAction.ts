import axios from "axios";

// deleteField
export const deleteField = async (name: string, id: string) => {
  try {
    const { data } = await axios.delete(`/${name}/${id}`);

    return data;
  } catch (error: any) {
    console.log(error);

    return {
      status: 404,
      message: error.response.data.message,
    };
  }
};
