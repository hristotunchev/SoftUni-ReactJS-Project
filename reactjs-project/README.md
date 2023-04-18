# Classic Cars Club
Classic Cars Club is an application built using create-react-app and react-bootstrap. The application allows users to share classic cars with other enthusiasts by uploading photos and providing descriptions. Guest users can access the catalog page and view details for vehicles, as well as read comments. Logged-in users can write comments for every vehicle in the catalog. Users who are owners of a vehicle can edit and delete their vehicle.

### This application is using the [SoftUni Practice Server](https://github.com/softuni-practice-server/softuni-practice-server)

## Usage
To use the application, follow these steps:

* Navigate to the client folder.
* ### Run npm start to start the client application.
* Navigate to the server folder.
* ### Run node server.js to start the server application.

## Features
The following features are available in the Classic Cars Club application:

* Catalog page displaying classic cars with cover photos and makes/models
* Details page displaying vehicle information and comments
* Comments section for each vehicle where logged-in users can post comments
* User authentication and registration
* Ability for vehicle owners to edit and delete their own vehicles

## Architecture
The application is divided into components with separate CSS files. The whole application is wrapped in context wrapper components (CarContext, AuthContext) which provide data to the components. The application is using services for authentication and CRUD operations and a requester to build requests. It is also using some custom hooks - useForm for controlling the forms, useLocalStorage for persisting user sessions, and useService which provides a common interface for different services.

### Components
The application is divided into components that are responsible for rendering different parts of the UI. Each component has a separate CSS file for styling.

### Context
The application uses two context wrapper components, CarContext and AuthContext, to provide data to the components. CarContext provides data related to cars in the catalog, while AuthContext provides data related to authentication and user sessions.

### Services
The application uses services for authentication and CRUD operations. These services provide a common interface for working with different data sources (e.g. local storage, REST API, etc.). They also handle errors and return data in a consistent format.

### Requester
The application uses a requester to build requests.

### Custom Hooks
The application uses several custom hooks:

* useForm: This hook is used to control forms in the application. It provides functionality for validating form inputs, handling form submissions, and resetting form data.
* useLocalStorage: This hook is used to persist user sessions in local storage. It provides functionality for storing and retrieving data from local storage.
* useService: This hook provides a common interface for different services. It is used to abstract away the details of working with specific services and provides a unified interface for the rest of the application.

### Route Guards
The application uses route guards to prevent guest users from accessing private user pages and to prevent non-owners from accessing owner pages.

## License
This project is licensed under the MIT License.