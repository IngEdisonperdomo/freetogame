# Freetogame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Description

Freetogame is an Angular application that displays a list of free-to-play games. Users can browse through the games, view details, and navigate through pages of game listings.

## Features

- Display a list of free-to-play games.
- Pagination to navigate through the list of games.
- Responsive design for various screen sizes.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/main/README.md).

## API Integration

This project integrates with the [Freetogame API](https://www.freetogame.com/api-doc) to fetch the list of free-to-play games.

## Components

### HomeComponent

- Displays the list of games.
- Implements pagination to navigate through the games.

### CardComponent

- Displays individual game details such as title, description, image, and link.

## Services

### FreetogameService

- Fetches the list of games from the Freetogame API.

## Constants

### CATEGORY

- Contains the different categories of games.

### PLATFORM

- Contains the different platforms for the games.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `ng serve` to start the development server.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
