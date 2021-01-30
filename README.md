# back-end

The backend for the Water My Plants project for bwt-100 in LambdaSchool.

This projects uses JSONWebToken for user authentication.

The link to the API is hosted by Heroku [here](https://water-my-plants-webpt100.herokuapp.com/api/users/login).

___________________

## API DOCS

### Users Route /api/users/

 **Required Fields**
* `/api/users/register`
  * *username* - string
  * *phone* - string
  * *password* - string
  
Returns the created user
Example:
```json
{
  message: "User created",
  user: {
    "id": 1,
    "username": "TestUser",
    "phone": "1234567890",
    "password": "$2b$10$1N57GBrr.vxa0UAlqnXnmu4Y2btAv95a3wmnzfEX1k5/HIHFeKhce"
  }
}
```
  
   **Required Fields**
* `/api/users/login`
  * *username* - string
  * *password* - string
  
  Returns the created user
  Example:
```json
{
    "message": "You're logged in.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJUZXN0VXNlciIsInBob25lIjoiMTIzNDMyMSIsInBhc3N3b3JkIjoiJDJiJDEwJDFONTdHQnJyLnZ4YTBVQWxxblhubXU0WTJidEF2OTVhM3dtbnpmRVgxazUvSElIRmVLaGNlIiwiaWF0IjoxNjExODAyMjEzfQ.d3Unv68BPmHNQCEE_xshabEGPEHvLxw1jy1I4A8APjc"
}
```
___________________

### Users Route /api/plants/

 **Required Fields**
* `/api/plants/`
  * *nickname* - string
  * *species* - string
  * *h20frequency* - number
  
  ** Headers Required **
  *
   * Authentication = token  

Token is provided when loggin in on a registered user.  
Returns the created plant

Example:
```json
{
    "createdPlant": {
        "id": 3,
        "nickname": "Testing Plant",
        "species": "Testing Species",
        "h2ofrequency": 10,
        "user_id": 2
    },
    "message": "Plant created by TestUser"
}
```
