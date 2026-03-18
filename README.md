# 📚 Books API – Node.js, Express & MongoDB

A RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to manage books with authentication and role-based ownership control.

Only the creator of a book can update or delete it.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Role-based structure (user/admin ready)
- Create Book (Authenticated users only)
- Update Book (Only creator)
- Delete Book (Only creator)
- Get all books (Public)
- Get single book (Public)
- Secure password hashing (bcrypt)
- Clean MVC architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- nodemon (development)

---

## 📁 Project Structure
project/
│── models/
│ ├── User.js
│ └── Book.js
│
│── routes/
│ ├── authRoutes.js
│ └── bookRoutes.js
│
│── controllers/
│ ├── authController.js
│ └── bookController.js
│
│── middleware/
│ └── authMiddleware.js
│
│── server.js
│── .env
│── README.md



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd project
