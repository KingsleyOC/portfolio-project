EasyShop App API Documentation
Introduction
The EasyShop App API facilitates the management of products, categories, and stores.

Getting Started
This API is hosted on a remote server.

Base URL: https://findmystore.onrender.com

Error Handling
Errors are returned in JSON format as shown below:

json
Copy
Edit
{
  "status": "error",
  "code": 404,
  "message": "The requested resource was not found"
}
Response Fields:

status - Indicates the request outcome.
code - Represents the HTTP status code.
message - Descriptive error message.
Available Endpoints
Categories
Retrieve All Parent Categories
Endpoint:

bash
Copy
Edit
GET /api/v1/categories/base
Description:
Fetches all top-level product categories.

Query Parameters:

This request does not require query parameters.
Request Body:

No request body is needed.
Example Request (cURL):

sh
Copy
Edit
curl https://findmystore.onrender.com/api/v1/categories/base
Example Response:

json
Copy
Edit
{
    "status": "Success",
    "code": 201,
    "data": [
        {
            "_id": "64101ba48b2ea35f749936b8",
            "name": "Grocery",
            "parentId": null,
            "createdAt": "2023-03-14T07:00:52.801Z",
            "__v": 0
        },
        {
            "_id": "64101c51800e5bfc6f641d23",
            "name": "Computing",
            "parentId": null,
            "createdAt": "2023-03-14T07:03:45.734Z",
            "__v": 0
        },
        {
            "_id": "641054beec060519d7705701",
            "name": "Health & Beauty",
            "parentId": null,
            "createdAt": "2023-03-14T11:04:30.922Z",
            "__v": 0
        },
        {
            "_id": "64105619ec060519d7705708",
            "name": "Home & Office",
            "parentId": null,
            "createdAt": "2023-03-14T11:10:17.003Z",
            "__v": 0
        },
        {
            "_id": "6410562dec060519d770570a",
            "name": "Phones & Tablets",
            "parentId": null,
            "createdAt": "2023-03-14T11:10:37.599Z",
            "__v": 0
        },
        {
            "_id": "64105670ec060519d770570c",
            "name": "Electronics",
            "parentId": null,
            "createdAt": "2023-03-14T11:11:44.826Z",
            "__v": 0
        },
        {
            "_id": "64105684ec060519d770570e",
            "name": "Fashion",
            "parentId": null,
            "createdAt": "2023-03-14T11:12:04.955Z",
            "__v": 0
        },
        {
            "_id": "64105698ec060519d7705710",
            "name": "Baby Products",
            "parentId": null,
            "createdAt": "2023-03-14T11:12:24.431Z",
            "__v": 0
        },
        {
            "_id": "641056aeec060519d7705712",
            "name": "Gaming",
            "parentId": null,
            "createdAt": "2023-03-14T11:12:46.191Z",
            "__v": 0
        },
        {
            "_id": "641056c3ec060519d7705714",
            "name": "Sporting Goods",
            "parentId": null,
            "createdAt": "2023-03-14T11:13:07.665Z",
            "__v": 0
        },
        {
            "_id": "641056ddec060519d7705716",
            "name": "Automobile",
            "parentId": null,
            "createdAt": "2023-03-14T11:13:33.659Z",
            "__v": 0
        },
        {
            "_id": "641056edec060519d7705718",
            "name": "Other categories",
            "parentId": null,
            "createdAt": "2023-03-14T11:13:49.797Z",
            "__v": 0
        },
        {
            "_id": "6411d16863ee804bfda3ebab",
            "name": "Testing",
            "parentId": null,
            "createdAt": "2023-03-15T14:08:40.099Z",
            "__v": 0
        }
    ]
}
Categories Available:

Grocery
Computing
Health & Beauty
Home & Office
Phones & Tablets
Electronics
Fashion
Baby Products
Gaming
Sporting Goods
Automobile
Other categories
Testing
This endpoint provides structured data on parent categories for the EasyShop App.