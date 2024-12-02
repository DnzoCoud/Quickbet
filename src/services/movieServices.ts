import { Movie } from "@/models/movies.model";
import tmdbClient from "@/utils/tmbdClient";

export const getCategoriesWithMovies = async (): Promise<any> => {
  try {
    const response = await tmdbClient.get("/genre/movie/list");
    console.log(response)
    return response.data.genres;
  } catch (error) {
    console.error("Error al obtener películas populares:", error);
    throw new Error("No se pudieron obtener las películas populares");
  }
};
