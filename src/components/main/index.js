import Card from './card'

export default function MovieGrid(state) {
  return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${state.movies.map((movie) => Card({ movie })).join('')}
    </div>
  `
}
