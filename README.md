
# 💼 Interview Preparation Website

An all-in-one full-stack web application designed to help students and job seekers prepare for interviews. The platform includes aptitude questions, coding problems, HR questions, and resume tips, with admin-controlled content management.

## 🚀 Features

- ✅ User authentication (Register/Login)
- 📋 Aptitude, Coding, HR Questions, and Resume Tips sections
- 📂 Admin Dashboard for content management (Add/Edit/Delete)
- 📱 Responsive UI with a clean and simple design
- 🛠️ Built using Node.js, Express, MongoDB, HTML, CSS, JavaScript
- ☁️ Deployed using GitHub Pages / Render / MongoDB Atlas

## 🔧 Tech Stack

**Frontend:**
- HTML, CSS, JavaScript  
- Bootstrap (for responsive design)

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)

**Deployment:**
- Frontend: GitHub Pages / Netlify / Vercel  
- Backend: Render / Railway  
- Database: MongoDB Atlas

## 📂 Project Structure

```

/client             -> Frontend files (HTML, CSS, JS)
/server             -> Backend (Node.js, Express, Routes)
/models             -> Mongoose Schemas
/routes             -> API endpoints
/public             -> Static assets

````

## 🔒 Admin Panel

- Login protected dashboard for managing content.
- Admin can Add, Edit, or Delete:
  - Aptitude Questions
  - Coding Problems
  - HR Questions
  - Resume Tips

## 🛠️ Setup Instructions

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/Interview-prep-website.git
````

2. Navigate to the server folder

   ```bash
   cd server
   npm install
   ```

3. Create a `.env` file and add:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server

   ```bash
   node app.js
   ```

5. Open the frontend by opening `client/index.html` in your browser or deploy it using GitHub Pages/Netlify.

## 🌐 Live Demo

[🔗 View Live Project](https://your-live-link-here.com)

---

## 📧 Contact

**Tushar WAnkhede**
📧 Email: wankhedetushar9@gmail.com

---

> ⭐ Star this repo if you find it helpful!




