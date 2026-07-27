const express=require('express');
const router=express.Router()
//controller onujai routes likhte hoi

const {Book,BookList,DeleteBook,UpdateBook}=require('../controllers/userController')

router.post('/book',Book);
router.get('/booklist',BookList)
router.delete('/delete/:id',DeleteBook)
router.put("/update/:id", UpdateBook);

module.exports=router;

