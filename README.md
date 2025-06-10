# Product Store MERN Stack

This project contains a simple Express server. You can run a MongoDB database for development using Docker Compose.

## Running MongoDB with Docker Compose

1. Ensure Docker and Docker Compose are installed.
2. Start the MongoDB service:

```bash
docker compose up -d
```

The database will be available at `mongodb://root:example@localhost:27017`.
Docker Compose is configured to initialize a database named `productStore`.
The application expects a `MONGO_URI` environment variable. You can create a
`.env` file with:

```env
MONGO_URI=mongodb://root:example@localhost:27017/productStore?authSource=admin
```

This connects to the `productStore` database in the Docker container.

Stop the service with:

```bash
docker compose down
```

