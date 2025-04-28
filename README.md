# TMDB API Integration

This project utilizes the TMDB (The Movie Database) API v3 to fetch and display movie data.

As usual, don't clone this into an existing repo. Don't forget to run `npm i` from the repo directory (`cd` into it` after you clone and then...👇🏾.

## Getting Started with the TMDB API

To use the TMDB API, you'll need to register for an API key on the TMDB website. [Here's a video overview.](https://somup.com/cTft08sPDv)

## Environment Setup

Every operating system has its own way of managing environment variables. This project uses a `.env.local` file to store sensitive information like API keys. Note that this file should not be committed to version control. As long as you have named it correctly, it will be ignored by Git because of the `.gitignore` file.

Note that environment variables are not a JavaScript feature. They are a way to pass configuration information to your application at runtime. In this case, we are using Vite, which allows us to use environment variables in our JavaScript code.

Vite uses the `VITE_` prefix for environment variables. This is a security feature that ensures only the variables you explicitly expose are available in your client-side code.

In a real production application we would not use these keys, typically, in a browser environment where that data is exposed via the developer tools. Instead, we would use a server-side application to make the API calls and then send the data to the client. This way, the API key is kept secret and not exposed to the public.

### Getting the API Key

1.  Go to the [TMDB website](https://www.themoviedb.org/).
2.  Create an account or log in if you already have one.
3.  Navigate to the [API section](https://www.themoviedb.org/settings/api).
4.  Click on the "Create" button to generate a new API key.
5.  Fill out the required information and agree to the terms of use.
6.  Once your application is approved, you will receive an API key.
7.  Copy the API key and keep it secure. You will need it to make requests to the TMDB API.
8.  Make sure to keep your API key private and do not expose it in your client-side code ☝️.

### Setting up your `.env.local` file

1.  Create a `.env.local` file in the root of your project.
2.  Add the following environment variables, replacing `YOUR_API_KEY` with your actual TMDB API key:

    ```
    VITE_API_KEY='Bearer YOUR_API_KEY'
    VITE_API_URL=https://api.themoviedb.org/3
    VITE_API_URL_IMAGE=https://image.tmdb.org/t/p/w500
    ```

    **Important:** The `VITE_API_KEY` must include the `Bearer` prefix followed by your API key.

    **Security Note:** For this project, the API key is stored in the `.env.local` file. **Do not commit this file to version control** in a real-world application. Use a more secure method for storing and accessing your API key in production.
