import { Library } from "../models/book.js";


// get all books
export const getAllbooks = async (req,res) => {
      try {
         const data = await Library.find();
         res.status(201).json({
            success:true,
            message:data
         });

      } catch (err) {
        res.status(500).json({
            success:false,
            message:"Not able to access all books ,internal error"
        })
      }
};

// adding the new book
export const addNewBook = async (req,res) => {
    try{
        const newBook = new Library(req.body);
        const savedBook = await newBook.save();
        res.status(201).json({
            success:true,
            date:savedBook,
            message:"new book created"
        });
    } catch (err){
        console.log(err);
       res.status(500).json({
        success:false,
        message:"Not able to create new book ,internal server error"     
      });
    }
};

// updating the book detailes
export const updateBook = async (req,res) => {
   try{ 
        const getbook  = req.params.id;
        if(!getbook){
            res.status(404);
            throw new Error("user not found");
        }
        const bookinfo = await Library.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

         res.status(200).json({
            sucess:true,
            message:bookinfo,
         });

   } catch(err){
    console.log(err);
    res.status(500).json({
        success:false,
        message:err.message     
      });
   }
};