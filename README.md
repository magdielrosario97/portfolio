# Magdiel Rosario – Portfolio

This is my personal developer portfolio built using **React**, **Tailwind CSS**, and **Node.js**, designed to showcase my projects, skills, and areas of interest.

## 🧠 About

This project serves as both a technical portfolio and a learning playground. It features:

-  A clean, responsive layout
-  Smooth navigation and sections for About, Skills, Projects, and Contact
-  A fully working contact form with email delivery

## 🛠️ Tech Stack

### Frontend

-  [React](https://reactjs.org/)
-  [Vite](https://vitejs.dev/)
-  [Tailwind CSS](https://tailwindcss.com/)

### Backend

-  [Node.js](https://nodejs.org/)
-  [Express](https://expressjs.com/)
-  [Nodemailer](https://nodemailer.com/)
-  [Render](https://render.com/)

### Deployment

-  Frontend deployed via [Vercel](https://vercel.com/)
-  Backend deployed via [Render](https://render.com/)

## 📬 Contact Form

The contact form is connected to a live Express API and supports:

-  Frontend validation (required fields + email format)
-  Backend validation and rate limiting
-  Email delivery using Nodemailer and Gmail app password
-  Graceful error handling and feedback messages

## 🚀 Getting Started (Frontend)

To run this locally:

```bash
# Clone the repo
git clone https://github.com/magdielrosario97/portfolio.git
cd portfolio

# Install frontend dependencies
npm install

# Start the dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 🛠️ Getting Started (Backend)

If you'd like to run the backend locally:

```bash
# Navigate to the backend folder
cd server

# Install dependencies
npm install

# Create a .env file
touch .env
```

In `.env`, add the following:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Then run:

```bash
node index.js
```

The backend will run at `http://localhost:5000` and accept POST requests to `/contact`.

---

## 📸 Screenshots

(Coming soon)

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Contact

You can reach me through the Contact section on the portfolio or directly at:

-  **Email**: msrdev.tech [at] gmail.com
-  **GitHub**: [@magdielrosario97](https://github.com/magdielrosario97)
-  **LinkedIn**: [msrdev](https://linkedin.com/in/msrdev)
