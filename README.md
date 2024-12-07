# Smart Agriculture Sensor Network

Blockchain-based IoT sensor data collection and reward system.

## Features

- Sensor data submission (humidity, soil moisture)
- Token rewards for valid submissions
- Real-time data visualization
- Automated validation

## Setup

```bash
# Install dependencies
make

# Run tests
make test

# Deploy contract
make deploy network=<network_name>

# Verify contract
make verify network=<network_name>

# Build frontend
make frontend
```

## Contract Details

- Validation ranges: 0-100% for both humidity and soil moisture
- Reward rate: 1 token per valid submission
- Bonus rewards for consistent submissions

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`

## Directory Structure

```
├── src/             # Contract implementation
├── include/         # Header files
├── tests/           # Contract tests
├── frontend/        # Web interface
├── scripts/         # Deployment scripts
└── public/          # Static assets
```

## License

MIT