# Product Store MERN Stack

This project contains a simple Express server. You can run a MongoDB database for development using Docker Compose.

## Running MongoDB with Docker Compose

1. Ensure Docker and Docker Compose are installed.
2. Start the MongoDB service:

```bash
docker compose up -d
```

The database will be available at `mongodb://root:example@localhost:27017`.

Stop the service with:

```bash
docker compose down
```

