import { addNewBook, getAllbooks, updateBook } from "../controllers/book.js";
import express from "express";
const router = express.Router();


// get all books
router.get("/books",getAllbooks);

// add new book
router.post("/books",addNewBook);

// update book detailes
router.put("/books/:id",updateBook);

export default router;























// ******************************************remove it****************************
// let data = [
//     {
//         id:1,
//         title:"book_name1",
//         order:1,
//         completed:true,
//         createdOn: new Date()
//     },
//     {
//         id:2,
//         title:"book_name2",
//         order:1,
//         completed:true,
//         createdOn: new Date()
//     },
//     {
//         id:3,
//         title:"book_name3",
//         order:1,
//         completed:true,
//         createdOn: new Date()
//     },
//     {
//         id:4,
//         title:"book_name4",
//         order:1,
//         completed:false,
//         createdOn: new Date()
//     },
//     {
//         id:5,
//         title:"book_name5",
//         order:5,
//         completed:false,
//         createdOn: new Date()
//     },
// ];


// router.get('/items', (req,res) => {
//     res.status(200).json(data);
// });


// // creating a new  book
// router.post('/createbook', (req,res) => {
//     let itemsId = data.map( item => item.id);
//     let orderNums = data.map(item => item.order);

//     // new id
//     let newid = itemsId.length > 0 ? Math.max.apply(Math,itemsId) + 1:1;
//     // create new order number
//     let neworder = orderNums.length > 0 ? Math.max.apply(Math,orderNums) +1 : 1;

//     let newitem = {
//         id:newid,
//         title:req.body.title,
//         order:neworder,
//         completed:false,
//         createdOn:new Date()
//     };

//     data.push(newitem);
//     res.status(201).json(newitem);
// });


// // updating a new book
// router.put('/items/:id',(req,res) => {
//         let found = data.find((item) => {
//             return item.id == parseInt(req.params.id);
//         });

//         console.log(found);
//         if(found){
//             let updated = {
//                 id:found.id,
//                 title:req.body.title,
//                 order:req.body.order,
//                 completed:req.body.completed
//             };
//             console.log(updated);
//             let targetidx = data.indexOf(found);

//             //  replace the curr obj data with updated one
//             data.splice(targetidx,1,updated);

//             res.status(201).json({
//                 success:true
//                 ,updated});
//         }else{
//             res.status(404);
//         }
// });




// module.exports  = router;



