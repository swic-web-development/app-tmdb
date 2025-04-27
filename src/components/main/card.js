export default function Card({ movie }) {
  const { title, poster_path, vote_average, overview } = movie
  const imageUrl = `${import.meta.env.VITE_API_URL_IMAGE}${poster_path}`

  return `
        <section class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${imageUrl}" alt="${title}" class="w-full h-64 object-cover object-center" />
            <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-800">${title}</h2>
                <p class="mt-2 text-gray-600">${overview}</p>
                <div class="mt-3 flex items-center justify-between">
                    <span class="text-gray-700">Rating: ${vote_average}</span>
                </div>
            </div>
        </section>
    `
}
