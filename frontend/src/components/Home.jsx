import React,  { useState,useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
function Home() {
     const [book,setBook]=useState({
         BookName: "",
         Author: "",
         Title: "",
         SellingPrice: "",
         Date: ""
        })
     const [books, setBooks] = useState([]);
     const [editId, setEditId] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editId) {
      // Update
      await axios.put(
        `http://localhost:2000/api/auth/update/${editId}`,
        book
      );
      console.log("Book updated successfully");
    } else {
      // Create
      await axios.post(
        "http://localhost:2000/api/auth/book",
        book
      );
      console.log("Book added successfully");
    }

    // Table refresh
    getAllbooks();

    // Form clear
    setBook({
      BookName: "",
      Author: "",
      Title: "",
      SellingPrice: "",
      Date: "",
    });

    // Exit edit mode
    setEditId(null);

  } catch (error) {
    console.log(error);
  }
};
         const getAllbooks=async()=>{     //read api call
            try{
                const res=await axios.get(
                    "http://localhost:2000/api/auth/booklist",
                );
                setBooks(res.data.books)
            }
            
         catch(error){
            console.log(error)
         }
    }
    useEffect(()=>{
      getAllbooks()
    },[])
      
        
        const handleChange=(e)=>{
            const{name,value}=e.target;
            setBook({
                ...book,
                [name]:value
            })
        }

        const handleDelete=async(id)=>{               //delete api call
           try{
              await axios.delete(`http://localhost:2000/api/auth/delete/${id}`)
              console.log("data delete successfully")
              getAllbooks()
           }
           catch(error){
             console.log(error)
           }
        }


  return (
    <div className="min-h-[calc(100vh-80px)] w-full px-5">
        <form onSubmit={handleSubmit}>
      <div className="w-full grid grid-cols-5 gap-3 my-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Name</label>
          <input
            type="text"
            placeholder="book name"
            className="w-full border-2 p-3 h-8 text-gray-800 border-gray-300 rounded-sm outline-none"
            name="BookName"
            value={book.BookName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Author Name</label>
          <input
            type="text"
            placeholder="author name"
            className="w-full border-2 p-3 h-8 text-gray-800 border-gray-300 rounded-sm outline-none"
             name="Author"
            value={book.Author}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Title</label>
          <input
            type="text"
            placeholder="book title"
            className="w-full border-2 p-3 h-8 text-gray-800 border-gray-300 rounded-sm outline-none"
             name="Title"
            value={book.Title}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Selling Price </label>
          <input
            type="text"
            placeholder="price"
            className="w-full border-2 p-3 h-8 text-gray-800 border-gray-300 rounded-sm outline-none"
             name="SellingPrice"
            value={book.SellingPrice}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Publish Date</label>
          <input
            type="date"
            placeholder="publish date"
            className="w-full border-2 text-gray-800 p-3 h-8  border-gray-300 rounded-sm outline-none"
             name="Date"
            value={book.Date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className=" w-full flex justify-end ">
        <button type="submit" className="text-white bg-blue-600 rounded-sm p-2 h-10 w-20"  >{editId ? "UPDATE" : "SUBMIT"}
          SUBMIT
        </button>
      </div>
      </form>

      <div className="w-full mt-10">
        <div className="w-full">
          <table className="w-full bg-white divide-y divide-gray-200">
            <thead className="bg-green-100">
              <tr>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-900">Book Name</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-900">Author </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-900">Title</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-900">Selling Price</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-900">Publish Date</th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-900">Action</th>
              </tr>
            </thead>

            <tbody className="w-full bg-white divide-y divide-gray-200">
                {
                    books.map((bok,index)=>{
                        return (
                <tr className="hover:bg-gray-200" key={index}>
                    <td className="px-6 py-3 whitespace-nowrap">{bok.BookName} </td>
                    <td className="px-6 py-3 whitespace-nowrap">{bok.Author}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{bok.Title}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{bok.SellingPrice}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{bok.Date} </td>
                    <td className="px-6 py-3 whitespace-nowrap"> 
                        <div className="w-20 justify-center flex gap-5">
                            <div className="w-5 h-5 justify-center items-center bg-red-50 text-red-800" onClick={()=>handleDelete(bok._id)} >
                                <span><MdDelete/></span>
                            </div>
                            <div className="w-5 h-5 justify-center items-center bg-green-100 text-green-800"
 onClick={() => {
  setBook({
    BookName: bok.BookName,
    Author: bok.Author,
    Title: bok.Title,
    SellingPrice: bok.SellingPrice,
    Date: bok.Date ? bok.Date.split("T")[0] : "",
  });

  setEditId(bok._id);
}}
>
  
                                <span><FaPen/></span>
                            </div>
                        </div>
                    </td>

                   
                </tr>
                        )
                    })
                }
                  
               
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
