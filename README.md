# 🎮 Games API

This is an API for managing a list of games. It allows you to **create**, **retrieve**, **update**, and **delete** games.

## 🛠️ Installation

Follow the steps below to install and set up the project:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:DotskinMaksim/games-api.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd games-api
   ```

3. **Install the dependencies:**

   ```bash
   npm install express mongoose cors swagger-ui-express yamljs dotenv
   ```

4. **Set up environment variables:**

   Copy the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

5. **Configure the `.env` file** with your own parameters:

    - `PORT` – The port on which the app will run.
    - `MONGODB_URI` – The MongoDB connection string.

## 🚀 Running the Application

To run the application locally:

1. **Start in development mode:**

   ```bash
   npm run dev
   ```

   Or, to run it in production mode:

   ```bash
   npm start
   ```

2. The API will be accessible at:

   ```bash
   http://localhost:PORT
   ```

   where `PORT` is the value specified in your `.env` file.

## 📚 API Endpoints

Here are the main API endpoints:

- `GET /games` – Fetch a list of all games.
- `GET /games/:id` – Retrieve details of a specific game by ID.
- `POST /games` – Create a new game.
- `PUT /games/:id` – Update an existing game by ID.
- `DELETE /games/:id` – Delete a game by ID.

## 📖 Documentation

API documentation is available at:

```
http://localhost:PORT/docs
```

where `PORT` is the value from your `.env` file.

## ⚙️ Environment Variables

These environment variables should be set in the `.env` file:

- `PORT` – The port on which the application will run.
- `MONGODB_URI` – The connection string for your MongoDB database.

### Example `.env` file:

```env
PORT=8080
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/dbname?retryWrites=true&w=majority
```
