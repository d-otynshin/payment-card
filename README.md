# ioka payment card form

A small project built using Create React App (CRA) with FSD (Folder-Structure-By-Feature) design.

## Description

It features a credit card form where users can input their credit card details to make a payment for a specific order. To ensure the correct payment, users need to enter the order ID into the URL, and the app will retrieve the order data before proceeding with the payment.

The project is divided into several layers, including the app layer, pages layer, widgets layer, and shared layer. Each layer contains UI components and helper modules to ensure a modular and organized codebase. Some of the helper modules have been covered with unit tests to ensure code reliability. For larger projects, a state management library like Redux or MobX can be integrated to manage application state more efficiently. The tech stack includes React, React-i18n for localization, Yup for form validation, Formik for form management, Axios for making API requests, and Classnames for conditionally joining CSS class names. The app is currently optimized for desktop view, but making it responsive for other devices can be easily implemented.

## Features

- Credit card form for making payments
- Retrieval of order data based on order ID
- Modular codebase following the FSD design pattern
- Unit tests for selected helper modules

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd project-directory`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open the web browser and visit: `http://localhost:3000`

## Folder Structure

The project follows the FSD (Folder-Structure-By-Feature) design pattern, which organizes the codebase based on features. Here's an overview of the main folders and their purposes:

- `src/`
  - `app/`: Contains the main application component and global styles.
  - `pages/`: Contains page-level components and logic.
  - `widgets/`: Contains reusable UI components used across multiple pages.
  - `shared/`: Contains shared components, utilities, and helpers.
    - `layers/`: Contains UI components specific to different layers (e.g., header, footer).
    - `helpers/`: Contains helper modules and utility functions.
  - `index.js`: The entry point of the application.

## Tech Stack

The project is built using the following technologies and libraries:

- React: JavaScript library for building user interfaces
- React-i18n: Internationalization library for localization
- Yup: Form validation library
- Formik: Form management library
- Axios: HTTP client for making API requests
- Classnames: Utility library for conditionally joining CSS class names

## Testing

The project includes unit tests for selected helper modules.
