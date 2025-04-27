// main.js
import { fetchMovies } from './actions'
import Header from './components/header'
import Main from './components/main'
import store from './store'
import './styles.css'

const APP_CLASS_NAME =
  'bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center'

function App() {
  const render = (state) => {
    state.appElement.className = APP_CLASS_NAME

    let content = ''

    if (state.error) content = `<p class="text-red-500 text-center p-4">${state.error}</p>`
    else if (state.isLoading) content = `<p class="text-center p-4">Loading movies...</p>`
    else if (!state.movies.length) content = `<p class="text-center p-4">No movies found</p>`
    else content = Main(state)

    state.appElement.innerHTML = `
      ${Header()}
      <main class="container mx-auto p-4 max-w-6xl">
        ${content}
      </main>
    `
  }

  render(store.getState())

  // Subscribe to state changes
  store.subscribe(render)

  // Fetch initial data
  fetchMovies()
}

App()
