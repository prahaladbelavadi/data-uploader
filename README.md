# UI for data uploader (Project Stepone)

This repository contains the frontend UI to upload files.
The uploaded files will be received via multipart/form post request at localhost:3001; The port of the receiving server can be changed in the package.json (proxy field);

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The frontend UI is rendered at localhost:3000;

### `npm run backend`

Launches the test backend server.
The server runs at localhost:3001;
Making a get request at localhost:3001 returns "works" to confirm that the backend server is running.

The backend expects a post request at / with a file attached as a multipart/form.
The backend stores the file as a binary in the uploads folder. If one does not exist, it will be created.

## Dependencies

The project requires nodejs in the environment.
This project also has dependencies that can be installed by running `npm i` in the root directory.
The UI is built using Ant Design components.
The server is built using node and express. The file upload handling is handled by multer

