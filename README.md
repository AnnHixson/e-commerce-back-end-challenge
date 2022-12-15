# e-commerce-back-end-challenge

## Description

This challenge was designed to use our knowledge of Object-Relational Mapping to modify the starter code provided, in order to build an application that can get, add, update, and delete information from a database in the same way as an e-commerce site.

## Installation

This project uses Node.js v.16.18.0

To run the program **for the first time**:
1. Open the command line trerminal
2. Install the packages `npm i`
3. Open MySQL `mysql -u root -p`
4. Run the schema.sql file `source db/schema.sql`
5. Quit out of MySQL `quit`
- To include a sample set of data when running the program, in the command line, enter `npm run seed`
6. Run the program `npm start`

To run the program **after the first time**:
1. Open the command line terminal
2. Run the program `npm start`

## Usage

To start the program, enter `npm start`. As this program is back-end only, the user will need to use something like Insomnia in order to see the apps functionality.

In Insomnia, the user can see all entries in the "categories", "products", and "tags" sections by doing a GET request on `localhost:3001/api/categories`, `localhost:3001/api/products`, or `localhost:3001/api/tags`.

The user can see a single entry from one of the sections by doing a GET request on the relevant path followed by `/:id` where ":id" is replaced by the id of the entry they want to see, e.g. `localhost:3001/api/categories/2`. If there is no entry with that id, the user will be notified of that.

The user can add an entry to one of the three sections by doing a POST request on the relevant path (e.g. `localhost:3001/api/categories`) with a JSON Body entry.
- For the "categories" section, the request body should look like this:
    `{
        "category_name": "Games"
    }`
- For the "products" section, the request body should look like this:
    `{
        "product_name": "Basketball",
        "price": 200.00,
        "stock": 3,
        "tagIds": [1, 2, 3, 4]
    }`
- For the "tags" section, the request body should look like this:
    `{
        "tag_name": "Pink"
    }`

The user can update an entry by doing a PUT request on the relevant path with a `/:id` where ":id" is replaced by the id of the entry they want to update (e.g. `localhost:3001/api/categories/2`). The request bodies for the PUT requests should be in the same format as those in the POST requests.

The user can delete an entry by doing a DELETE request on the relevant path with a `/:id` where ":id" is replaced by the id of the entry they want to delete (e.g. `localhost:3001/api/categories/2`).


Here is a video walkthrough of the program: [https://drive.google.com/file/d/1t0ivRkW2XDyRTB4f_Ri5tiGB-Dxz2eGz/view](https://drive.google.com/file/d/1t0ivRkW2XDyRTB4f_Ri5tiGB-Dxz2eGz/view)

## Credits

I followed the examples in the coursework of this class closely

## License

None

---
