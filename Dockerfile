FROM rust:latest

# Install dependencies
RUN apt-get update && apt-get install -y     build-essential     cmake     llvm     clang

# Install cargo-stylus
RUN cargo install cargo-stylus

WORKDIR /app
COPY . .

# Build command as entrypoint
ENTRYPOINT ["cargo", "stylus"]
