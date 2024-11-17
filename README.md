Exam Resources Web App
A web application for viewing and downloading the last three years of exam question papers and notes for first and second-semester students. The app is designed to be user-friendly, providing seamless access to educational resources without requiring authentication for users.

Features
📚 View and Download Resources:
Images (question papers) can be viewed directly in the browser.
PDF files (notes) are available for direct download.
🎓 Semester Organization:
Resources are categorized by semester for easy navigation.
🔒 Secure Admin Access:
Admin authentication is required for uploading resources.
Admins can upload images and notes twice yearly.
Technologies Used
Frontend
React: Component-based UI for dynamic and responsive design.
Tailwind CSS: Elegant and customizable styling.
Backend
Node.js: Handles server-side logic.
Express.js: Simplifies API creation.
Database
PostgreSQL: Stores resource metadata (e.g., titles, URLs, semesters).
File Storage

PDF Hosting: PDFs are stored securely with links managed in the database.
Setup Instructions
Prerequisites
Node.js (v14 or higher)
PostgreSQL (v13 or higher)

Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/exam-resources-web-app.git
cd exam-resources-web-app
Backend Setup:

Navigate to the backend directory:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Create a .env file with the following variables:
env
Copy code
PORT=5000
DATABASE_URL=your_postgresql_connection_string
CLOUDINARY_URL=your_cloudinary_url
ADMIN_PASSWORD=your_admin_password
Start the server:
bash
Copy code
npm start
Frontend Setup:

Navigate to the frontend directory:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Create a .env file with the API endpoint:
env
Copy code
REACT_APP_API_URL=http://localhost:5000
Start the development server:
bash
Copy code
npm start
Usage
For Users:
Access the app via the deployed frontend link.
Navigate to the semester of your choice.
View images of question papers or download PDFs of notes.
For Admins:
Access the admin page via the secure URL (e.g., /admin).
Log in using the admin credentials.
Upload new resources (images or PDFs).
Deployment
Frontend Deployment:

Build the production-ready frontend:
bash
Copy code
npm run build
Deploy the build directory to a static hosting platform (e.g., Netlify, Vercel).
Backend Deployment:

Deploy the backend to a cloud platform (e.g., Heroku, AWS) Free Hosting (e.g., Render, Railways).

Folder Structure
bash
Copy code
exam-resources-web-app/
├── frontend/          # React frontend code
├── backend/           # Express backend code
├── database/          # SQL scripts or migrations
└── README.md          # Project documentation
Future Improvements
Add advanced search and filtering for resources.
Optimize resource previews for faster loading.
Contributors
Nanda Kumar M – Full Stack Developer
Open to Contributions: Feel free to fork and create pull requests.
