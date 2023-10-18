[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/GB9tUzun)

# Assignment Week 16

This week assignment is about Fullstack Integration of JSON Web Tokens (JWT) and Authentication.

1. App Should have:
    - Login Route and return
    - Access and Refresh Token
    - Expire Time
    - Logout and clear cookies
    - Reset Password Request
    - Limit login request
2. Implement a Role Base with limit permission:
    - superuser (Admin) 
    - user 
    - member
      
## Package Installation

```bash
  npm install express
  npm install jsonwebtoken
  npm install cookieparser
  npm install express-rate-limiter
  npm install mongoose
```
For more information, check out the package.json file.

## API Reference

#### Register

```http
  POST http://localhost:3000/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**|
| `email` | `string` | **Required**|
| `password` | `string` | **Required**|

#### Login

```http
  POST http://localhost:3000/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**|
| `password` | `string` | **Required**|

Admin role: 
```
    "username": "jessie",
    "password": "jessie123"
```

#### Login Session

```http
  POST http://localhost:3000/loginsession
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**|
| `password` | `string` | **Required**|

#### Permission Allows & Deny

```http
  POST http://localhost:3000/allow
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**|
| `permission` | `string` | **Required** Role|

```
Role: 
    1. superuser (Admin), 
    2. user, 
    3. member
```

```http
  POST http://localhost:3000/deny
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**|
| `permission` | `string` | **Required** Role|

#### Password Reset

```http
  POST http://localhost:3000/request
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**|

```http
  POST hhttp://localhost:3000/reset?key=${key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `password` | `string` | **Required** Enter Your New Password|

#### See All of User List

```http
  GET http://localhost:3000/user
```

#### Logout

```http
  POST http://localhost:3000/logout
```

#### Create a Recipe

```http
  POST http://localhost:3000/recipes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `recipesName` | `string` | **Required**|
| `recipesDesc` | `string` | **Required**|

#### Get Recipes
```http
  GET http://localhost:3000/recipes
```

#### Update a Recipe by id

```http
  PUT http://localhost:3000/recipes/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `recipesName` | `string` | **Required**|
| `recipesDesc` | `string` | **Required**|

#### Delete a Recipe by id
```http
  GET http://localhost:3000/:id
```


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon app.js
```

Server Port
```http
http://localhost:3000/
```
