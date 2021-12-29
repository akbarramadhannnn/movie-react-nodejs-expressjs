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

### - Host or Port
- ```http://localhost:2021``` (localhost)
- ```http://widyawicara.akbarramadhan.com``` (live)

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
            "id": "2176d0e0-d0b1-4e63-a46e-94718c683554",
            "title": "After We Fell (2021)",
            "genre": [
                "Drama",
                "Movie",
                "Romance",
                "France"
            ],
            "rating": "7.2",
            "duration": "99 min",
            "quality": "HD",
            "trailer": "https://www.youtube.com/watch?v=NYdNN6C9hfI",
            "watch": "https://103.136.42.202/after-we-fell-2021/"
        },
        {
            "id": "cf4a0fae-4a51-410a-95f0-618b118118c5",
            "title": "The Bewailing (The Nest) (2021)",
            "genre": [
                "Horror",
                "Movie",
                "Thriller"
            ],
            "rating": "6",
            "duration": "100 min",
            "quality": "HD",
            "trailer": "https://www.youtube.com/watch?v=92kRK9WLNtg",
            "watch": "https://103.136.42.202/the-bewailing-the-nest-2021/"
        }
        ...
    ]
}
```

#### 2. Search Movie List

URL
```
GET http://localhost:2021/api/movie?search=aft
```

Sample Response
```
{
    "success": true,
    "status": 200,
    "message": "Get Movie Success",
    "result": [
        {
            "id": "2176d0e0-d0b1-4e63-a46e-94718c683554",
            "title": "After We Fell (2021)",
            "genre": [
                "Drama",
                "Movie",
                "Romance",
                "France"
            ],
            "rating": "7.2",
            "duration": "99 min",
            "quality": "HD",
            "trailer": "https://www.youtube.com/watch?v=NYdNN6C9hfI",
            "watch": "https://103.136.42.202/after-we-fell-2021/"
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
    "title": "Asakusa Kid (2021)",
    "genre": [
        "Drama",
        "Movie"
    ],
    "rating": " 7",
    "duration": "123 min",
    "quality": "HD",
    "trailer": "https://www.youtube.com/watch?v=KhzBFfkvn44",
    "watch": "https://103.136.42.202/asakusa-kid-2021/"
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
DELETE http://localhost:2021/api/movie/2176d0e0-d0b1-4e63-a46e-94718c683554
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

### - Host or Port
- ```http://localhost:3000``` (localhost)
- ```http://widyawicara.akbarramadhan.com``` (live)
