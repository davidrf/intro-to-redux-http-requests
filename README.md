# Intro To Redux - HTTP Requests
## Set Up Locally

```
$ git clone https://github.com/davidrf/intro-to-redux-http-requests.git
$ cd intro-to-redux-http-requests
$ yarn install
$ yarn start
```

## Server API

### `GET https://intro-to-redux-groceries-api.herokuapp.com/groceries`
Returns the following JSON response body

```json
{
  "groceries": [
    {
      "id": 1,
      "name": "bread"
    },
    {
      "id": 2,
      "name": "peanut butter"
    }
  ]
}
```

### `POST https://intro-to-redux-groceries-api.herokuapp.com/groceries`
with the following JSON request body

```json
{
  "grocery": {
    "name": "strawberry jelly"
  }
}
```
will create the grocery item and return the following JSON response body

```json
{
  "grocery": {
    "id": 3,
    "name": "strawberry jelly",
    "created_at": "2017-11-26T21:59:42.051Z",
    "updated_at": "2017-11-26T21:59:42.051Z"
  }
}
```


## Recommended Steps
Refactor the current app so it utilizes the above API, so the grocery list is read from the server and new grocery items are added to the server.

1. Add the necessary action creators to your `groceries` reducer and refactor `AppContainer` so it fetches the list of groceries from the server. You may do this without using a thunk.
2. If you did not complete the previous step using a thunk, refactor the code to use a thunk instead. You will need to update `configureStore`, so it utilizes the thunk middleware.
3. Add the necessary action creators **and thunk** to your `groceries` reducer and refactor `AppContainer` so it can create groceries on the server.
