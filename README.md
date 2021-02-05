# back-end

The backend for the Water My Plants project for bwt-100 in LambdaSchool.

This projects uses JSONWebToken for user authentication.

The link to the API is hosted by Heroku [here](https://water-my-plants-webpt100.herokuapp.com/).

---

## API DOCS

### Users Route /api/users/

**Required Fields**
`Method POST`

- `/api/users/register`
  - _username_ - string
  - _phone_ - string
  - _password_ - string

Returns the created user
Example:

```json
{
  "message": "User created",
  "user": {
    "id": 1,
    "username": "TestUser",
    "phone": "1234567890",
    "password": "$2b$10$1N57GBrr.vxa0UAlqnXnmu4Y2btAv95a3wmnzfEX1k5/HIHFeKhce"
  }
}
```

**Required Fields**
`Method POST`

- `/api/users/login`

  - _username_ - string
  - _password_ - string

  Returns the created user
  Example:

```json
{
    "message": "You're logged in.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJUZXN0VXNlciIsInBob25lIjoiMTIzNDMyMSIsInBhc3N3b3JkIjoiJDJiJDEwJDFONTdHQnJyLnZ4YTBVQWxxblhubXU0WTJidEF2OTVhM3dtbnpmRVgxazUvSElIRmVLaGNlIiwiaWF0IjoxNjExODAyMjEzfQ.d3Unv68BPmHNQCEE_xshabEGPEHvLxw1jy1I4A8APjc"


```

**Required Fields**
`Method PUT`

- `/api/users/updateProfile`

  - _phone_ - string
  - _password_ - string

  Updates the profile of the currently authenticated use by updating either the phone or password.

  **NOTE: All fields in for this request must have a value set. If a field or fields values do not change, pass the same value as it currently is.**

---

### Plants Route /api/plants/

**Required Fields**
`Method POST`

- `/api/plants/`

  - _nickname_ - string
  - _species_ - string
  - _h20frequency_ - number

  ** Headers Required **

  - - Authentication = token

Creates a plant of the currently authenticated user.

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

**Required Fields**
`Method PUT`

- `/api/plants/:id`
  - _nickname_ - string
  - _species_ - string
  - _h20frequency_ - number
  ** Headers Required **
  - - Authentication = token

    Updates the information with the given ID parameter of the url path.

    **NOTE: All fields in for this request must have a value set. If a field or fields values do not change, pass the same value as it currently is.**
  **Required Fields**
  `Method DELETE`
- `/api/plants/:id`
  ** Headers Required **
  - - Authentication = token

    All that is required from the request is the authentication headers to pass the DELETE request.
