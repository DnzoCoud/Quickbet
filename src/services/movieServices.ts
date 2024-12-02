import { Movie } from "@/models/movies.model";
import tmdbClient from "@/utils/tmbdClient";

export const getPopularMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await tmdbClient.get("/movie/popular", {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error al obtener películas populares:", error);
    throw new Error("No se pudieron obtener las películas populares");
  }
};
