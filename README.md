*********************************************************** Library System**********
----------->DESCRIPTION<--------
This Repository contains the Implentation of Library system backend built with MERN Stack


-------->ClONE AND STARTING COMMANDS<-----------------------------------------------
steps->

1) Clone the Repository or Download Zip file

2)Install Npm Dependencies (Note -> Make sure you are in correct Project folder)
     command -> npm install
   
3)Start the server
    Command -> npm start
    
-----> MAJOR DEPENDENCIES <---------------------------------------------------------
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^8.0.3"

------->TECH STACK<----------------------------------------------------------------
Express - Backend/API
MongoDb - Datase
Nodejs  - Runtime
Mongoose - ORM for database

--->other Additional Apllications include<----
POSTMAN - for API testing

-------> FUNCTIONALITIES<-----------------------------------------------------------

1) EndUser can See All Books avaialble

*****WE CAN IMPLEMENT admin based functionalties***************
2) Authorized User can add new Book to book database
3) Authorized User can Update particular book detailes.

----->WORKING STRUCTURE<------------------------------------------------------------
1) MAIN FILE -> server.js

2) ROUTES FOLDER -> contains the routes for 3 endpoints
    
// get all books
router.get("/books",getAllbooks);

// add new book
router.post("/books",addNewBook);

// update book detailes
router.put("/books/:id",updateBook);


3) MODEL Folder -> defines the schema for library system database
 Schema contains 3 information for new book
   i)  Book title  (string )
  ii)  iscompleted (boolean value)
 iii)  Date

4) Controllers
    It contains the api implementation for 3 routes
     -> i) get all books
     -> ii) adding new book
     -> Updatiing the book detailes

----------------------------------------------END----------------------------------------------------------------
