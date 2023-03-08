# ExpressJs-Boilerplate

<p align="center">
An ExpressJs boilerplate configured with ESLint, Prettier & Airbnb Setup. The boilerplate utilises RESTful architecture and uses Mongodb <br><br>
  <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1200px-Node.js_logo_2015.svg.png">
    <img alt="Node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1200px-Node.js_logo_2015.svg.png" height=50 width=186/>
  </a>
</p>
<br>

## System Architecture and Flow

A basic ExpressJs boilerplate that is configured with ESLint, Prettier following the Airbnb Setup. The system uses RESTful architecture for client server communication, Joi for body validations and MongoDb for data storage. Currently it consists of a single service thus it is of monolithic nature, but can be expanded to n number of services according to the requirements.

- Start the node application

To build the service:

- `npm build` creates the production build by executing the docker file and creating the docker image of this service:
  ```bash
  $ npm install
  ```

To get the Node server running locally:

- `npm install` to install all required dependencies from package.json:
  ```bash
  $ npm install
  ```
- `npm start` to start the local server:
  ```bash
  $ npm run start
  ```
- `npm run dev` to start the local server in development mode:
  `bash $ npm run dev`

## API

## signup

---

Returns json containing the status of the request.

- **URL**

  /api/auth/signup

- **Method:**

  `POST`

- **URL Params**

  None

- **Query Params**

  None

- **Data Params**

  **Required:**

  - `email: [string]`
  - `password: [string]`

- **Success Response:**

  - **Code:** 200 SUCCESS<br/>

## Authors

- **Hammas kermani** - [hammas576](https://github.com/hammas576)
