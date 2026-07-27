const User = require("../models/user");

const Book = async (req, res) => {
  try {
    const body = req.body;

    if (
      !body.BookName ||
      !body.Author ||
      !body.Title ||
      !body.SellingPrice
    ) {
      return res.status(400).json({
        msg: "All fields are required",
        success: false,
      });
    }

    const addBook = await User.create(body);

    return res.status(201).json({
      msg: "Data submitted",
      success: true,
      Id: addBook._id,
    });
    

  } catch (error) {
    return res.status(500).json({
      msg: "Server Error",
      error: error.message,
    });
  }
};

const BookList=async(req,res)=>{

    try{
            const books=await User.find({});
    res.status(200).json({
        msg:"all book fetched succesfully",
        success:true,
        TotalCount:books.length,
        books:books

    })
}
    catch(error){
        res.status(500).json({msg:"internal server error"})
    }
    }
  
   
const DeleteBook=async(req,res)=>{
    try{
         const body=req.params;
       const deletebook= await User.deleteOne({_id:body.id})
       if(deletebook.acknowledged){
        res.status(200).json({
        msg:"deleted  succesfully",
        success:true,
       
       })
    }
}
    catch(error){
       res.status(500).json({msg:"internal server error"})
    }
}

const UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updateBook = await User.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updateBook) {
      return res.status(404).json({
        msg: "Book not found",
        success: false,
      });
    }

    return res.status(200).json({
      msg: "Book updated successfully",
      success: true,
      book: updateBook,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};


module.exports = {Book ,BookList,DeleteBook,UpdateBook};