# Multi-Server Docker Compose Setup

This docker-compose.yml file orchestrates both the Node.js Express server and the Python FastAPI server.

## Services

### Node.js Express Server
- **Port**: 8001
- **Framework**: Express.js
- **Features**: Hot reloading with nodemon
- **Endpoints**: Currently no endpoints defined (minimal setup)

### Python FastAPI Server
- **Port**: 8000
- **Framework**: FastAPI
- **Features**: Auto-reload enabled
- **Endpoints**: 
  - `GET /` - Returns "Hello World"
  - `GET /tasks` - Returns list of tasks
  - `POST /tasks` - Add a new task

## Running the Services

### Start both servers
```bash
docker-compose up
```

### Start with rebuild
```bash
docker-compose up --build
```

### Start in detached mode
```bash
docker-compose up -d
```

### View logs
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs node-server
docker-compose logs python-server
```

### Stop services
```bash
docker-compose down
```

## Accessing the Services

- **Node.js Express Server**: http://localhost:8001
- **Python FastAPI Server**: http://localhost:8000
- **FastAPI Docs**: http://localhost:8000/docs

## Development

Both servers support hot reloading:
- Changes to Node.js files (`.js`) will automatically restart the Express server
- Changes to Python files (`.py`) will automatically restart the FastAPI server

## Network

Both services are connected via a bridge network called `app-network`, allowing them to communicate with each other if needed.
