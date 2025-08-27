


# 📌 Subscription Tracker API

A full-featured backend system to manage user authentication and subscription tracking with **automated email reminders** using **Upstash Workflows**.

The API allows:
- 🔑 User sign-up / sign-in with JWT authentication  
- 👥 User management (all users, user by ID)  
- 📅 Subscription tracking (create, fetch, filter by user)  
- 📧 Automated email reminders before subscription renewal  

---

## 🚀 Tech Stack

- **Node.js** (v22+) with **Express.js**
- **MongoDB + Mongoose** (database)
- **JWT** (authentication)
- **Nodemailer** (for email notifications)
- **Upstash Workflows** (for scheduling subscription reminders)
- **Day.js** (date utilities)
- **Arcjet** (security middleware)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/mrranger939/SUBDUBJSM.git
cd SUBDUBJSM
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.development.local` file in the project root and configure:

```env
# Server
PORT=5000
NODE_ENV=development
SERVER_URL=http://localhost:5000

# Database
DB_URI=mongodb://localhost:27017/Subdub

# JWT Auth
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=1d

# Arcjet
ARCJET_KEY=your_arcjet_key_here
ARCJET_ENV=development

# Upstash QStash (local setup)
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=your_qstash_token_here

# Nodemailer
EMAILPASSWORD=your_email_app_password_here

```

### 4️⃣ Run the Server

```bash
npm run dev
```

The server will start at:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 🔑 Authentication

#### Sign Up

```http
POST /api/v1/auth/sign-up
```

**Body**

```json
{
  "name": "iamavillan",
  "email": "mohammedshujathnawaz@gmail.com",
  "password": "1234"
}
```

#### Sign In

```http
POST /api/v1/auth/sign-in
```

**Body**

```json
{
  "email": "mohammedshujathnawaz@gmail.com",
  "password": "1234"
}
```

Response will return a JWT token:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

Use this token in **Authorization header** as:

```
Authorization: Bearer <your-token>
```

---

### 👥 Users

#### Get All Users

```http
GET /api/v1/users
```

#### Get User by ID

```http
GET /api/v1/users/:id
```

Example:

```
GET /api/v1/users/68aee6e40f27b57c1a4c2cce
```

---

### 📅 Subscriptions

#### Create Subscription

```http
POST /api/v1/subscriptions
```

**Body**

```json
{
  "name": "Netflix",
  "price": 169.99,
  "currency": "USD",
  "frequency": "daily",
  "category": "entertainment",
  "startDate": "2025-08-27T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```

#### Get Subscriptions for a User

```http
GET /api/v1/users/:id/subscriptions
```

---

## ⏰ Subscription Reminders (Upstash Workflow)

When you create a subscription, a **workflow is triggered** automatically.
It will:

* Wait until the configured reminder dates (`7, 5, 2, 1 days` before renewal).
* Send email notifications using Nodemailer.

Console example:

```
Sleeping until 7 days before reminder at Fri, 19 Sep 2025 00:00:00 GMT
Triggering 7 days before reminder
Email sent: 250 OK
```

No need for **ngrok** — workflows call your local server directly.

---

## 🛠 Development Notes

* Ensure MongoDB is running locally (`mongodb://localhost:27017`).
* Use **Postman** or **cURL** to test the APIs.
* Make sure email templates (`utils/email-template.js`) match reminder labels (e.g. `"7 days before reminder"`).
* If reminders don’t trigger instantly, set `startDate` close to **today** for testing.

---

## 📬 Example Flow

1. Sign up and sign in a user → get token.
2. Create a subscription with today’s date (or near future).
3. Wait for the workflow → email reminder sent.
4. Check logs for workflow execution and email status.

---

## 🤝 Contributing

Feel free to fork, submit issues, and create pull requests.

---

## 📜 License

MIT License © 2025 Mohammed Shujath Nawaz


