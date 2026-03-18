
const Book = require("../models/book")

// creating the book

exports.createBook = async (req, res) => {

    try {
        const book = await Book.create({
            ...req.body,
            createdBy:req.user.id
    })

    res.status(201).json(book)


        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
 
    
}



// get all the books

exports.getBooks = async (req,res) => {

    try {
        const books = await Book.find().populate('createdBy', 'username')
        res.json(books)
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

// get single Book
exports.getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.json(book)
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}

// update Book : done only by the owner

exports.updateBook = async (req, res) => {

    try {
        const book = await Book.findById(req.params.id)
        if(!book) {
            
            return res.status(404).json({ message: "Not found" })

        } else if(book.createdBy.toString !== req.user.id){
             return res.status(403).json({ message: "Not authorized" })

        } else{

              const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

              res.json(updated);
        }
         

            
        
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}


// deleting a book:done by the owner
exports.deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) return res.status(404).json({ message: "Not found" });

  if (book.createdBy.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not authorized" });
  }

  await book.deleteOne();

  res.json({ message: "Book deleted" });
};