# Library Management Server

## Introducing the backend server for a Library Management System API! This system enables library staff and members to seamlessly manage books, memberships, and borrowing activities with a secure and user-friendly experience. Built with Node.js, Express, Prisma ORM, and PostgreSQL, this API is designed for efficient CRUD operations on books, members, and borrowing records, each uniquely identified by UUID for better tracking and integrity.The Library Management API also offers robust borrowing and returning functions, allowing members to enjoy streamlined borrowing experiences and staff to track book availability and member records with ease. Staff can manage book inventories, monitor overdue returns, and enhance library services through smooth workflows, intuitive endpoint designs, and comprehensive error handling.

## Live URL

[Library Management server](https://library-management-server-drab.vercel.app/)

## Features

- **Book Management**: Library staff can easily add, update, delete, and view book records in the system, including details like genre, publication year, and available copies, to maintain accurate and up-to-date information.
- **Member Management**: Library staff can easily add, update, delete, and view book records in the system, including details like genre, publication year, and available copies, to maintain accurate and up-to-date information.
- **Borrowing and Returning Books**: Members can borrow and return books through designated endpoints. Borrow records track the dates, while the system manages book availability automatically based on borrow and return actions
- **Overdue Tracking**: The system provides functionality to track overdue books, showing which members have overdue borrow records to assist the library in enforcing return policies.
- **Error Handling**: The API includes consistent error handling to ensure clear feedback for any unsuccessful actions, helping users and staff understand and resolve issues quickly.

Technology Stack:

- Programming Language: TypeScript
- Web Framework: Express.js
- Database: PostgreSQL(Prisma for ORM)
- Validation Library: Zod
- Deployment : Vercel

The api has the following endpoints:
API Endpoints:

- /api/books
- /api/members
- /api/borrow

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

## Clone the repository

**Follow this simple step to clone the project:**

```bash
git clone GGTuran/library-management-server
cd library-management-server
```

**Now install the dependencies of the project:**

```bash
npm install
```

## Set up the server

**Set up the environment variables in .env file**

```
NODE_ENV="development"
DATABASE_URL="your_postgresql-url"
```

**You can compile typescript**

```
npm run build
```

## Start the server

**You can run the server in development mode**

```
npm run dev
```

**Or you can start the server by running the js files which is recommended**

```
npm run prod
```

## file structure in modules

```bash
modules
├── book
│   └── book.types.ts
│   └── book.validation.ts
│   └── book.service.ts
│   ├── book.controller.ts
│   ├── book.route.ts
├── borrow
│   ├── borrow.type.ts
│   └── borrow.validation.ts
│   └── borrow.service.ts
│   ├── borrow.controller.ts
│   ├── borrow.route.ts
├── payment
│   ├── payment.controller.ts
│   ├── payment.model.ts
│   ├── payment.route.ts
│   └── payment.service.ts
├── member
│   ├── member.type.ts
│   └── member.validation.ts
│   └── member.service.ts
│   ├── member.controller.ts
│   ├── member.route.ts

```

## Base URL

The base URL for all API endpoints is: `https://library-management-server-drab.vercel.app/`

## Book Routes

### Create Book

- **Method**: `POST`
- **Route**: `/api/books`
- **Description**: Add a new book to the database.

### Get All Books

- **Method**: `GET`
- **Route**: `/api/books`
- **Description**: Retrieve a list of all available books.

### Get Book By ID

- **Method**: `GET`
- **Route**: `/api/books/:bookId`
- **Description**: Retrieve single book.

### Update Book

- **Method**: `PUT`
- **Route**: `/api/books/:bookId`
- **Description**: Update the details of a specific book.

### Delete Book

- **Method**: `DELETE`
- **Route**: `/api/books/:bookId`
- **Description**: Remove a specific book from the server.

## Member Routes

### Create Member

- **Method**: `POST`
- **Route**: `/api/members`
- **Description**: Add a new member to the database.

### Get All Members

- **Method**: `GET`
- **Route**: `/api/members`
- **Description**: Retrieve a list of all members.

### Get Member By ID

- **Method**: `GET`
- **Route**: `/api/members/:memberId`
- **Description**: Retrieve single member.

### Update Book

- **Method**: `PUT`
- **Route**: `/api/members/:memberId`
- **Description**: Update the details of a specific member.

### Delete Book

- **Method**: `DELETE`
- **Route**: `/api/members/:memberId`
- **Description**: Remove a specific member from the server.

## Borrow Routes

### Borrow

- **Method**: `POST`
- **Route**: `/api/borrow`
- **Description**: Borrow a book from the library.

### Return Book

- **Method**: `POST`
- **Route**: `/api/return`
- **Description**: Return a borrowed book to library.

### Get Overdue Borrow List

- **Method**: `GET`
- **Route**: `/api/borrow/overdue`
- **Description**: Retrieve a list of borrowed books which are not returned within 14 days.

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. Common status codes include:

- `200 OK`: The request was successful.
- `201 Created`: The resource was successfully created.
- `400 Bad Request`: The request could not be understood or was missing required parameters.
- `401 Unauthorized`: Authentication failed or user does not have permissions for the requested operation.
- `403 Forbidden`: Authentication succeeded but authenticated user does not have access to the requested resource.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An error occurred on the server.
