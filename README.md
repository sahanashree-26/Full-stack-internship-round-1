# Full-stack-internship-round-1
A simple full-stack web application designed for fundraising interns to monitor their performance and rewards in real-time
# 🎯 Intern Portal Dashboard

A full-stack intern dashboard for fundraising interns to track their donations, referral code, and reward badges.

Features

- Stylish login page with dashboard transition  
- Intern name, referral code & total donations displayed dynamically  
- Rewards section: Bronze, Silver, and Gold badges  
- Simple and clean UI with logout functionality  
- Backend API with Express.js returns intern details  
- Mobile-friendly and responsive design  

Tech Stack

| Layer      | Tech Used             |
|------------|-----------------------|
| Frontend   | HTML, CSS, JavaScript |
| Backend    | Node.js, Express.js   |

 Folder Structure
intern-portal/
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── backend/
├── server.js
└── package.json

Frontend
1. Go to the `frontend/` folder
2. Open `index.html` in any browser
 Backend
1. Go to the `backend/` folder
2. Install dependencies:
bash
npm install
Run the backend server:
node server.js
It will run on: http://localhost:8080/api/intern

 API Sample Response:
 {
  "name": "Sahana Shree",
  "referralCode": "sahanashree2025",
  "donationsRaised": 5000
}



