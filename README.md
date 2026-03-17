# 🥦 FreshCo - Full Stack Grocery App

FreshCo is a modern full-stack e-commerce web application for buying fresh vegetables and fruits online. It includes user authentication, product management, cart, wishlist, and admin features.

---

## 🚀 Live Demo

👉 Frontend: https://main-project-nu-ten.vercel.app
👉 Backend API: https://freshco-backend.onrender.com        

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Redux Toolkit
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ✨ Features

### 👤 User Features

* User Signup & Login
* Browse Products
* Search & Filter Products
* Add to Cart 🛒
* Add to Wishlist ❤️
* Place Orders
* View Orders

### 🛠️ Admin Features

* Add Product
* Edit Product
* Delete Product
* Manage Products Dashboard

---

## 📂 Project Structure

```
main-project/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── shopsmart/ (frontend)
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
└── .gitignore
```

---

## ⚙️ Environment Variables

### 🔹 Frontend (.env)

```
VITE_API_URL=https://freshco-backend.onrender.com
```

### 🔹 Backend (.env)

```
PORT=5000
MONGO_URI=mongodb+srv://siyammm74_db_user:eq8PH8lpQuyRW1do@cluster0.4obczji.mongodb.net/freshco?retryWrites=true&w=majority
JWT_SECRET=freshco_secret_key
```

---

## ▶️ Run Locally

### 1️⃣ Clone the repo

```
git clone https://github.com/Risana-M/MainProject.git
cd main-project
```

### 2️⃣ Install dependencies

#### Backend

```
cd backend
npm install
npm run dev
```

#### Frontend

```
cd shopsmart
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Auth

* POST `/api/users/register`
* POST `/api/users/login`

### Products

* GET `/api/products`
* GET `/api/products/:id`
* POST `/api/products/admin`
* PUT `/api/products/admin/update/:id`
* DELETE `/api/products/admin/:id`

### Orders

* POST `/api/orders`
* GET `/api/orders`

---

## 🧠 Lessons Learned

* Handling async API errors properly
* Fixing `.map is not a function` bug
* Connecting frontend with deployed backend
* Managing environment variables in production
* Debugging deployment issues (Vercel + Render)

---


---

## 🙌 Author

**Risana**

---


