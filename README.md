# Nodepop App By Fatima Abouzerrar

Command to Deploy:

```sh
npm install
```

Command to load initial data to database:

```
npm run init-db.js
```

Command to start the app in Production environment:

```sh
npm start
```

Command to start the app in Development environment:

```sh
npm run dev
```

## API Doc

Methods:

- GET /fatydev/nodepop/api/ads/
- POST /fatydev/nodepop/api/ads/

QueryParams:

- name: Name of the ad
- sellOrBuy: A product to sell or a product to buy
- lowerPrice: Lowest price of the product
- higherPrice: Higest price of the product
- tags: Tags to categorize the products

Responses:

200: 
 body: lists of ads

"result": [
        {
            "_id": "fw4523jdkflt43328jgrk42s",
            "name": "laptop",
            "sellOrBuy": true,
            "price": 999.99,
            "image": "laptop.jpg",
            "tags": ["tech"],
            "createAt": "2023-01-09T13:57:09.361Z",
            "__v": 0
        }]

Query Schema:

{
    name: String,
    sellOrBuy: Boolean,
    price: Number,
    image: String,
    tags: [String],
    createAt: {
        type: Date, 
        default: Date.now,
}
