
<h1 align="center">
  <br>
  <a href="https://nri-challenge.netlify.app"><img src="https://user-images.githubusercontent.com/70352144/207425372-29b575f3-2ddf-4929-bde5-40c1ca08a648.png" alt="NRI Challenge" width="200"></a>
  <br>
  NRI Challenge
  <br>
</h1>

<h4 align="center">This frontend application is written in <a href="https://reactjs.org/">React.js</a> and deployed automatically on merges to master via Netlify. The backend, made in Node.js (<a href="https://expressjs.com/">Express.js</a>), can be accessed at this <a href="https://github.com/tienviet10/webdev-challenge">link.</a></h4>

<p align="center">
  <a href="#key-features">Tech Stack & Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#building">Building</a> •
  <a href="#development">Development</a> •
  <a href="#usage">Usage</a> •
  <a href="#todo">TODO</a>
</p>

<div align="center">
  <a href=""><img src="https://user-images.githubusercontent.com/70352144/191378535-68036f59-8a9a-4d27-b4a0-165614571996.gif" alt="Application" ></a>
</div>

## Tech Stack & Features

* React.js
* [Ant Design](https://ant.design/) for design/styling
* [Axios](https://axios-http.com/) for handling API request
* [Papa Parse](https://www.papaparse.com/) for parsing CSV files
* [React ChartJS](https://react-chartjs-2.js.org/) for charts
* [React CSV](https://react-chartjs-2.js.org/) for exporting table into CSV file

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

1. Clone the repository

```sh
$ git clone https://github.com/tienviet10/webdev-challenge-frontend.git
```

2. Move to the correct directory

```sh
$ cd webdev-challenge-frontend
```

3. Install dependencies

```sh
$ npm install
```
4. Fill out all variables in .env file.

5. Run the application

```sh
$ npm start
```

## Building

Run 'npm run build' and use the newly created 'build' folder for deployment.

## Development

Install:
- Prettier
- ESLint
- Enable "format on save"

## Usage

**Upload**: The tab is used to upload CSV files with drag and drop support. Additionally, CSV preview and edit are available within this interface before uploading to the database 

**Table**: The tab is used to display uploaded data according to the posted date. Users can delete the table or export the table from this tab.

**Dashboard**: This tab displays three charts according to the NRI challenge.


## TODO

* Edit table live in the Table tab
* Add sorting and searching for the Table tab
