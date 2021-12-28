# movie-react-nodejs-expressjs

## Requirement
- [Node](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [React Js (Create React App)](https://reactjs.org)

## BACKEND
### - Installation
- clone repositories ```git clone https://github.com/akbarramadhannnn/movie-react-nodejs-expressjs.git```
- write on your cmd ```cd backend```
- run ```npm install```
- run ```npm run start:dev```
- server running on ```http://localhost:2021```

### - Host and Port
- ```http://localhost:2021``` (localhost)

### - Endpoint
| Description         | Method                         | Endpoint          |
| ------------------- | ------------------------------ | ----------------- |
| Get Movie           | GET                            | /api/movie        |
| Search Movie        | GET                            | /api/movie?search=movie_name|
| Add Movie           | POST                           | /api/movie        |
| Delete Movie        | DELETE                         | /api/movie/movie_id |

### - Usage Example Api

#### 1. Get Movie

URL
```
GET http://localhost:2021/api/movie
```

Sample Response:

```
{
    "success": true,
    "status": 200,
    "message": "Get Movie Success",
    "result": [
        {
            "id": "941dd2e8-63bc-418c-9b3a-407c40274c06",
            "name": "Tenet",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "years": 2020,
            "duration": 150,
            "urlImage": "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX67_CR0,0,67,98_AL_.jpg"
        },
        {
            "id": "212c26d3-7fdf-4ddf-ad47-3e177425eaeb",
            "name": "Holidate",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "years": 2020,
            "duration": 111,
            "urlImage": "https://m.media-amazon.com/images/M/MV5BYWVmYTFjODItOTY2Ni00NDhhLTk1ZDYtMzBmOGFhZTMyY2Q0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg"
        }
        ...
    ]
}
```

#### 2. Search Movie List

URL
```
GET http://localhost:2021/api/movie?search=holidate
```

Sample Response
```
{
    "success": true,
    "status": 200,
    "message": "Get Movie Success",
    "result": [
        {
            "id": "212c26d3-7fdf-4ddf-ad47-3e177425eaeb",
            "name": "Holidate",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "years": 2020,
            "duration": 111,
            "urlImage": "https://m.media-amazon.com/images/M/MV5BYWVmYTFjODItOTY2Ni00NDhhLTk1ZDYtMzBmOGFhZTMyY2Q0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg"
        }
        ...
    ]
}
```

#### 3. Add Movie

URL
```
POST http://localhost:2021/api/movie
```

Request Body ```application/json```
```
{
    "name": "Fatman",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    "years": 2020,
    "duration": 110,
    "urlImage": "https://m.media-amazon.com/images/M/MV5BZjk1NDc4OTEtY2M3OS00M2E3LTk4YTgtYjczMzI1OWQ1ODVlXkEyXkFqcGdeQXVyNzA0OTM3NQ@@._V1_UY98_CR0,0,67,98_AL_.jpg"
}
```


Sample Response

```
{
    "success": true,
    "status": 201,
    "message": "Added Movie Success",
    "result": {}
}
```

#### 4. Delete Movie

URL
```
DELETE http://localhost:2021/api/movie/212c26d3-7fdf-4ddf-ad47-3e177425eaeb
```

Sample Response

```
{
    "success": true,
    "status": 200,
    "message": "Delete Movie Success",
    "result": {}
}
```

## FRONTEND
### - Installation
- clone repositories ```git clone https://github.com/akbarramadhannnn/movie-react-nodejs-expressjs.git```
- write on your cmd ```cd frontend```
- run ```npm install```
- run ```npm start```
- open ```http://localhost:3000``` to view it in your browser.
