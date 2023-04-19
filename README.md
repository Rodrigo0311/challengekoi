# Challenge Koibanx
## API Endpoint for Upload Excel File

This project is an API endpoint for upload Excel files and returning an object per line. The project follows the principles of Clean Architecture, uses MongoDB as database and Typescript.

## Abstract
The project is following the principles of Clean Architecture because this kind of architecture provides the modularity and helps to create the separations of responsabilities in all the code. Also implement Typescript because makes the code more redeable.


# How it works
## Technologies

- node.js
- Typescript
- express
- axios
- nodemon
- multer
- dotenv
- mongoose

## Installation

 1. Clone this repository to your computer.
 2. Run `npm install` to install all the necessary dependencies.

## Usage

 1. Run `npm run dev` to start the server.
 2. Use an HTTP client (such as Postman)  who recives the parameters: File, Mapping and CallbacUrl.
The File sends a ".xlsx" file.
The Mapping recives the order of the columns like this: 
{
"A": {"name": "name", "type":"string"},
"B": {"name": "age", "type":"number"},
"C":{"name": "email", "type":"string"}
}
The CallbackUrl is the url where we send the notification when the file load is over.
 3. You will receive a JSON object per line corresponding to each row in the Excel file and also you will receive an object for each error.

Example of returned object:
`{
  "name": "John",
  "age": 35
}`

