# Easy Deno REST API

## GET
```json
http://localhost:9000/todo

[
    {
        "name": "Todo 1",
        "id": "86c9dfb8-8f84-48fe-869c-761eb4787556"
    }
]
```

## POST
```json
http://localhost:9000/todo

Request
{
    "name": "Todo 1"
}

Response
{
    "name": "Todo 1",
    "id": "86c9dfb8-8f84-48fe-869c-761eb4787556"
}
```

## PUT
```json
http://localhost:9000/todo/ea427e86-9ef9-4a80-b237-61a8281d198e

Request
{
    "name": "Todo 10"
}

Response
{
    "name": "Todo 10",
    "id": "ea427e86-9ef9-4a80-b237-61a8281d198e"
}
```

## DELETE
```json
http://localhost:9000/todo/ea427e86-9ef9-4a80-b237-61a8281d198e

Response
{
    "name": "Todo 10",
    "id": "ea427e86-9ef9-4a80-b237-61a8281d198e"
}
```
