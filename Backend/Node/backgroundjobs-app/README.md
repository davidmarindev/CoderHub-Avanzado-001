# Background Jobs Application

This project is a Node.js application that demonstrates the use of background jobs, cron jobs, and webhooks using Express, Sequelize, PostgreSQL, Redis, and BullMQ. It is designed to run in a Docker environment, ensuring compatibility across both Windows and Mac systems.

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js and npm (for local development).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd backgroundjobs-app
   ```

2. Copy the example environment file:
   ```
   cp .env.example .env
   ```

3. Update the `.env` file with your database and Redis configuration.

4. Install the dependencies:
   ```
   npm install
   ```

   dependencies used:
   ```
   npm i express dotenv cors morgan node-fetch exceljs bullmq ioredis
   npm i sequelize pg pg-hstore
   npm i -D @sequelize/cli nodemon
   ```

   ### Running only Redis with Docker

   If you want to run only the Redis service in a container (keeping the server and database running locally), use the provided `docker-compose.redis.yml` file:

   ```
   docker-compose -f ../backgroundjobs-api/docker-compose.redis.yml up -d
   ```

   This will start a Redis container on port 6379. Make sure your `.env` or configuration points to `localhost:6379` for Redis.

### Running the Application

To run the application using Docker, execute the following command:
```
docker-compose up --build
```

This command will build the Docker images and start the application along with PostgreSQL and Redis services.

### Usage

- The application exposes various routes that can be accessed via HTTP requests.
- Background jobs can be processed using BullMQ, and webhooks can be set up to handle incoming requests.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the ISC License.