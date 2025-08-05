# User Profile API

This is a simple user profile API built with Node.js and Express. It provides a basic structure for managing user profiles, with a focus on cookie-based authentication.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js and npm installed on your machine. You can download them from the official [Node.js website](https://nodejs.org/).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Uttamdevsharma/user-profile-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Running the application

To run the application in development mode, use the following command:

```sh
npm run dev
```

This will start the server with nodemon, which will automatically restart the server when you make changes to the code. The server will be running on `http://localhost:3000`.

## API Endpoints

The following are the available API endpoints:

*   `GET /`: A welcome message to the server.
*   `GET /api/profile`: Returns a hardcoded user profile.
*   `GET /set-custom-cookie`: Sets a cookie with the name `customCookie1` and a value of `123xyzUttamsharma`.
*   `GET /get-custom-cookie`: Retrieves the value of the `customCookie1` cookie.
*   `GET /delete-custom-cookie`: Deletes the `customCookie1` cookie.
*   `GET /profile`: Serves a static HTML page, but only if the `customCookie1` cookie is set.

## Dependencies

The following are the main dependencies used in this project:

*   [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
*   [cookie-parser](https://www.npmjs.com/package/cookie-parser): A middleware for Express that parses cookies attached to the client request object.
*   [nodemon](https://nodemon.io/): A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Acknowledgments

*   [Choose an Open Source License](https://choosealicense.com)
*   [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
*   [Img Shields](https://shields.io)
*   [GitHub Pages](https://pages.github.com)
*   [Font Awesome](https://fontawesome.com)
