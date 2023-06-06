# Login

Login with Rotation Token using Vue.js, TypeScript, Pinia, and Tailwind CSS

## Project Overview

This project is a login application that utilizes rotating tokens for enhanced security. The main features include user registration, login functionality, and token rotation to ensure secure authentication.

## Technologies Used

- Vue.js
- TypeScript
- Pinia (State Management)
- Axios (HTTP requests)
- Tailwind CSS (Styling)

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up the project on your local machine:

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd project-directory
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm run serve
   ```

5. Open your browser and visit `http://localhost:8080` to see the application running.

## Project Structure

The project structure follows a standard Vue.js application layout, with the following notable directories and files:

- `/src` - Contains the application source code
- `/src/components` - Vue components used in the application
- `/src/views` - Vue components representing different pages/views of the application
- `/src/store` - Pinia store files for state management
- `/src/services` - Services responsible for making API requests using Axios
- `/src/utils` - Utility functions and helper files
- `/src/App.vue` - The root Vue component
- `/src/main.ts` - The main entry point of the application

## Configuration

To configure the application, follow these steps:

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

   ```plaintext
   VUE_APP_API_BASE_URL=<your-api-base-url>
   ```

   Replace `<your-api-base-url>` with the base URL of your API server.

3. Update the API endpoints in the code to use the `process.env.VUE_APP_API_BASE_URL` variable.

## Usage

To use the application, follow these steps:

1. Register a new account by visiting the signup page.
2. Log in using your registered credentials on the login page.
3. After successful login, you will be redirected to the main application page.
4. The application automatically handles token rotation behind the scenes for improved security.
