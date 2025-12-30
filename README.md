# E-Commerce Platform
A full‑stack e‑commerce web application built with **React**, **Node.js**, **Express**, **PostgreSQL**, **Stripe**, and **AWS**. The platform supports user management, product browsing, shopping cart, and an admin dashboard.

## Tech Stack
### **Frontend**
* React (Vite or CRA)
* React Router
* Axios
* TailwindCSS / Material UI (optional)

### **Backend**
* Node.js
* Express.js
* PostgreSQL
* Stripe API

## Project Structure
root/
 ├── client/               # React Frontend
 │   ├── src/
 │   ├── public/
 │   └── package.json
 │
 ├── server/               # Node.js Backend
 │   ├── src/
 │   ├── prisma/ (optional)
 │   └── package.json
 │
 ├── database/             # SQL files / migrations
 ├── .env.example
 ├── README.md
 └── docker-compose.yml 

## Installation & Setup
**1. Clone the repository**
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform

**Setup environment variables**
Create a `.env` file in the **server** folder:

### Install dependencies
**Backend**

cd server
npm install

**Frontend**

cd ../client
npm install


**Run the project**

**Backend**
npm run dev

**Frontend**
npm run dev

The app should be live at:
* **Frontend:** [http://localhost:5173](http://localhost:5173)
* **Backend:** [http://localhost:5000](http://localhost:5000)

## Database
**PostgreSQL Schema Includes:**
* Users
* Products
* Categories
* Orders
* OrderItems

## Deployment
* **EC2** for Node backend
* **S3 + CloudFront** for React frontend
* **RDS** for PostgreSQL

**Products**
GET    /api/products
GET    /api/products/:id
POST   /api/products   (admin)
PUT    /api/products/:id (admin)
DELETE /api/products/:id (admin)

### **Payments**
POST /api/payments/create-checkout-session

## Contributing
1. Fork the repo
2. Create a new branch
3. Commit your work
4. Open a pull request

## License
MIT License
