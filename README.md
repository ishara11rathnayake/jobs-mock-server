# JSON Server Project

This project sets up a simple JSON server using the `json-server` library. It serves mock data from a JSON file, allowing for easy testing and development of front-end applications.

## Project Structure

```
json-server-project
├── src
│   ├── server.js        # Entry point for the JSON server
│   └── data
│       └── db.json     # Mock data for the server
├── package.json         # NPM configuration file
├── .gitignore           # Files and directories to ignore by Git
└── README.md            # Project documentation
```

## Getting Started

To run the JSON server, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd json-server-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the server**:
   ```
   npm start
   ```

   The server will be running at `http://localhost:3000` and will serve the data from `src/data/db.json`.

## API Endpoints

The JSON server will automatically create RESTful API endpoints based on the data in `db.json`. You can perform standard CRUD operations (GET, POST, PUT, DELETE) on these endpoints.

## License

This project is licensed under the MIT License.