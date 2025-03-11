# auth-api-using-node
## Description
A Node.js based authentication API using MongoDB, Express, and JWT. This project demonstrates how to create a secure authentication system with user registration, login, and token-based authentication.

## Features
- User registration with hashed passwords
- User login with JWT authentication
- Protected routes with JWT verification
- Password reset functionality
- MongoDB for data storage

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/auth-api-using-node.git
    ```
2. Navigate to the project directory:
    ```bash
    cd auth-api-using-node
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Create a `.env` file in the root directory and add the following environment variables:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
2. Start the server:
    ```bash
    npm start
    ```
3. The API will be running at `http://localhost:5000`.

## API Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/protected` - Access protected route (requires JWT)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License.# auth-api-using-node
