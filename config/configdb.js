import mongoose from "mongoose";
// ****************Database connection********

export const connectDb = () =>{ 

mongoose.connect("mongodb://localhost:27017",{
    dbName:"lib-system",
}).then((c)=>{
    console.log(`Library database Connected successsfully`);
}).catch((e)=>{
   console.log(e);
});

};
