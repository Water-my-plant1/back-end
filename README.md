# back-end

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
```javascript
{
  message: "User created",
  user: {
    id: 1,
    username: "TestUser",
    phone: "1234567890",
    password: "$2b$10$1N57GBrr.vxa0UAlqnXnmu4Y2btAv95a3wmnzfEX1k5/HIHFeKhce"
  }
}
```
  
   **Required Fields**
* `/api/users/login`
  * *username* - string
  * *password* - string
  
  Returns the created user
  Example:
```javascript
{
    "message": "You're logged in.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJUZXN0VXNlciIsInBob25lIjoiMTIzNDMyMSIsInBhc3N3b3JkIjoiJDJiJDEwJDFONTdHQnJyLnZ4YTBVQWxxblhubXU0WTJidEF2OTVhM3dtbnpmRVgxazUvSElIRmVLaGNlIiwiaWF0IjoxNjExODAyMjEzfQ.d3Unv68BPmHNQCEE_xshabEGPEHvLxw1jy1I4A8APjc"
}
```
___________________
