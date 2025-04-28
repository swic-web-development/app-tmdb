/**
 * Actions are functions that retrieve and manipulate data,
 * then update the store state in a reactive manner.
 */
import store from './store'

const options = {
  method: 'GET',

  // `headers` notify the API that we want JSON data
  headers: {
    accept: 'application/json',

    /**
     * * THIS IS NOT SECURE! DO NOT USE IN PRODUCTION!
     * * This is just for demonstration purposes.
     * * In a real-world application, you should use a secure method
     * to store and access your API key.
     */
    Authorization: import.meta.env.VITE_API_KEY,
  },
}

export async function fetchMovies() {
  store.setState({ isLoading: true, error: null })

  try {
    const response = await fetch(
      /**
       * Following the TMDB API documentation,
       * we are using the `/trending/movie/week` endpoint.
       *
       * https://developer.themoviedb.org/reference/discover-movie
       */
      `${import.meta.env.VITE_API_URL}/trending/movie/week`,
      options,
    )

    const data = await response.json()

    // Check for API-specific error responses
    if (data.success === false || data.status_code)
      throw new Error(data.status_message || 'An error occurred with the API')

    store.setState({
      movies: data.results || [],
      isLoading: false,
    })
  } catch (error) {
    console.error('Error fetching movies:', error)

    store.setState({
      error: error.message,
      isLoading: false,
      movies: [],
    })
  }
}
