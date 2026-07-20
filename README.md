# MediLink – Full-Stack Healthcare Appointment Platform

> A scalable, full-stack healthcare management platform that streamlines appointment booking, doctor scheduling, and administrative operations through secure role-based access.

---

# MediLink

MediLink is a **MERN Stack** healthcare appointment platform that connects **Patients**, **Doctors**, and **Administrators** through a secure and intuitive web application. The platform enables patients to book appointments, doctors to manage schedules, and administrators to oversee users, doctors, and appointments from a centralized dashboard.

## Features

### Patient Portal

* Secure registration and login
* Browse available doctors
* View doctor profiles and specialties
* Book appointments
* Cancel appointments
* View appointment history
* Manage personal profile

### Doctor Dashboard

* Secure doctor authentication
* View upcoming appointments
* Accept or reject appointments
* Mark appointments as completed
* Update availability
* Manage profile information
* Track earnings and appointment statistics

### Admin Dashboard

* Admin authentication
* Add, edit, and remove doctors
* View all appointments
* Manage users
* Monitor platform activity
* Dashboard analytics
* Control doctor availability

---

# Tech Stack

## Frontend

* React.js
* React Router
* Axios
* Context API
* CSS
* Responsive Design

## Backend

* Node.js
* Express.js
* JWT Authentication
* REST API

## Database

* MongoDB
* Mongoose ODM

## Other Tools

* Cloudinary (Image Uploads)
* Multer
* bcrypt.js
* dotenv
* CORS

---

# System Architecture

```
                React Frontend
                      │
                REST API Calls
                      │
             Express.js + Node.js
                      │
      ┌───────────────┼────────────────┐
      │               │                │
 JWT Authentication  Controllers   Middleware
      │               │                │
      └───────────────┼────────────────┘
                      │
                MongoDB Database
```

---


# Authentication

MediLink uses **JSON Web Tokens (JWT)** for secure authentication.

Supported roles:

* Patient
* Doctor
* Administrator

Features include:

* Password hashing using bcrypt
* Protected routes
* Role-based authorization
* Token verification middleware

---

# Appointment Workflow

```
Patient
    │
Book Appointment
    │
Backend Validation
    │
Appointment Created
    │
Doctor Dashboard
    │
Accept / Reject
    │
Completed Appointment
```

---

# REST API Overview

## Authentication

```
POST   /api/user/register
POST   /api/user/login
POST   /api/doctor/login
POST   /api/admin/login
```

## Patient

```
GET    /api/doctor/list
POST   /api/user/book-appointment
GET    /api/user/appointments
POST   /api/user/cancel-appointment
```

## Doctor

```
GET    /api/doctor/appointments
POST   /api/doctor/complete
POST   /api/doctor/cancel
POST   /api/doctor/change-availability
```

## Admin

```
POST   /api/admin/add-doctor
GET    /api/admin/all-doctors
GET    /api/admin/all-appointments
```

*(Endpoints may vary depending on your implementation.)*

---

# Installation

## Clone the repository

```bash
git clone https://github.com/your-username/MediLink.git

cd MediLink
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_SECRET_KEY=your_secret
```

Run backend

```bash
npm run server
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Environment Variables

Backend requires:

```env
MONGODB_URI=

JWT_SECRET=

CLOUDINARY_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_SECRET_KEY=

PORT=
```

---

# Security Features

* JWT Authentication
* Password Hashing (bcrypt)
* Protected API Routes
* Role-Based Access Control (RBAC)
* Input Validation
* Secure File Uploads
* Environment Variable Configuration

---

# Future Improvements

* Video consultation integration
* Email & SMS appointment reminders
* Online payments
* Prescription management
* Electronic Health Records (EHR)
* Medical report uploads
* Real-time chat between patients and doctors
* Notifications using WebSockets
* AI-powered symptom checker
* Appointment recommendation system

