# My Learn.Ai(Assignment) Website

A Learn.Ai website created using Next.js, MongoDB, and Tailwind CSS.

## Features

1. **Login and Logout:**
   - `/login` page allows users to log in.
   - `/register` page allows new users to register.
   - Authentication is implemented using JWT tokens.
   - User data is stored in MongoDB.

2. **Contact Us Page:**
   - `/contact` page with a form for users to submit inquiries.
   - Form submissions are stored in the database.

3. **Responsive Design:**
   - All pages are designed to be responsive on both desktop and mobile devices.
   - Tailwind CSS is used for styling.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB database set up

### Installation
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the server: `npm run dev`.

### Configuration
- Configure MongoDB connection in `/config/db.js`.
- Tailwind CSS styles can be customized in `/styles/tailwind.css`.

## Project Structure

- `/pages`: Next.js pages for each route.
- `/components`: React components organized by functionality.
- `/styles`: Tailwind CSS styles.
- `/public`: Static assets.

## Database Models

- `/models/user.js`: User schema for MongoDB.
- `/models/contact.js`: Contact form submission schema.

## Routes

- `/routes/authRoutes.js`: Authentication routes.
- `/routes/contactRoutes.js`: Contact form submission routes.

## Hosting

The project is hosted on GitHub and can be accessed at [GitHub Repository](https://github.com/TUSHARG146/xenon-assignment).

## Live Demo

The live demo is hosted on Heroku and can be accessed at [Live Demo](https://xenon-assignment-dnkq.vercel.app/).

## Screenshots 
### login
![image](https://github.com/TUSHARG146/xenon-assignment/assets/76150446/5f9cc849-67b9-45d6-92ce-55954116f933)

### Register
![image](https://github.com/TUSHARG146/xenon-assignment/assets/76150446/cddefd82-8d87-4943-9327-c2ee7e340108)

### ContactUs
![image](https://github.com/TUSHARG146/xenon-assignment/assets/76150446/fd29100c-7f38-4d7d-adb2-4c519cc283fe)
![image](https://github.com/TUSHARG146/xenon-assignment/assets/76150446/972659a7-037b-49c0-baa6-e98f73abc21d)

### Mongodb_userdata
![image](https://github.com/TUSHARG146/xenon-assignment/assets/76150446/e6755df5-d8bc-4c6f-8e5b-4e7c01e95e0e)






