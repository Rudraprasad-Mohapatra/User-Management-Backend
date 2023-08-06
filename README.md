# User-Management-Backend API Documentation

This API documentation outlines the endpoints, request/response formats, and error handling for a basic user registration and login system for a user management backend system using Express.js and MongoDB.

#### Base URL: [http//localhost:5445/](http//localhost:5445/)

## Register Endpoint
This endpoint allows users to register an account.

**Endpoint: `/register`**

**HTTP Method**: POST

**Request Body:**
```
{
    "name":"RudraRajaMohapatra",
    "email":"rudra12345@gmail.com",
    "password":"Rudra12345"
}
```
**Response (Success - 200 Created):**
```
{
    "msg": "User registered successfully"
}
```
**Response (Error - 400 Bad Request):**
```
{
    "success": false,
    "message": "All input fields are required"
}
```

## Login Endpoint
This endpoint allows users to log in to their account.

**Endpoint: /login**

**HTTP Method:** POST

**Request Body:**
```
{
    "email":"rudra12345@gmail.com",
    "password":"Rudra12345"
}
```
**Response (Success - 200 OK):**
```
{
    "msg": "User login successfully"
}
```
**Response (Error - 401 Unauthorized):**
```
{
    "msg": "Password is wrong"
}
```

## Error Handling

**Response (Error - 409 Conflict):**
```
{
    "success": false,
    "message": "Account already exists with provided email id"
}
```
**Response (Error - 404 Not Found):**
```
{
    "msg": "No account associate with this email"
}
```
## Conclusion and Final Thoughts

Thank you for checking out my project! I hope you find it useful and interesting. This project was a great learning experience for me, and I'm excited to see how it might be helpful to others in the future.

## Acknowledgments

I would like to express my gratitude to [Hitesh Sir](https://github.com/hiteshchoudhary), Arsh Sir and [Viswa Sir](https://github.com/Vishwa07dev)for their valuable insights inspiration.

## Contact Information

Feel free to reach out to me via email at rudraprasadmohapatra51@email.com or find me on [rajarudraaa](https://twitter.com/rajarudraaa).

## License

This project is a personal development learning project created by [Rudraprasad Mohapatra](https://github.com/Rudraprasad-Mohapatra). It is not formally licensed under any specific license, and no rights are granted for its use by others. The code and content within this project are meant for educational purposes and to showcase my personal growth in software development.

Please respect that this project is not open for external use, distribution, or modification without explicit permission. If you have any questions or would like to discuss collaboration, feel free to contact me.

This README and the accompanying code are intended to serve as a record of my learning journey and to share my progress with others. Any similarities to existing projects are purely coincidental.

### Thank You

I would like to express my gratitude to Histesh Sir, Arsh Sir and Viswa Mohan Sir for their support, guidance, and inspiration during the creation of this project.