# Country Information API Service Development using REST Countries API
A backend API service that returns useful data about countries

## Setup

1. **Clone the repository:**
   git clone https://github.com/hardikjaipuriaTech/country-data-api.git

2. **Navigate to the project directory**
   cd country-information-api

3. **Install dependencies:**
   npm install

4. **Run the Server**
   node src/app.js
_The server will be running at http://localhost:3000._

## Service API Testing

1. Get Auth Token
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"admin\", \"password\": \"admin@1234\"}" http://localhost:3000/api/auth
After running this command , you will receive the generated token in json response as shown below
{"authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MDE1MzU2LCJleHAiOjE2OTYxMDE3NTZ9.44dqvobAengxkBKttYH5EmS58Mrj1KWq8EVBUnL57U8"}


2. Fetch Detailed Information about a Country
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MDE1MzU2LCJleHAiOjE2OTYxMDE3NTZ9.44dqvobAengxkBKttYH5EmS58Mrj1KWq8EVBUnL57U8" http://localhost:3000/api/countries/India

3. Retrieve list of Countries
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MDE1MzU2LCJleHAiOjE2OTYxMDE3NTZ9.44dqvobAengxkBKttYH5EmS58Mrj1KWq8EVBUnL57U8" "http://localhost:3000/api/countries/list?filters=population&sorting=asc&page=1"

Replace filters, sorting, and page with your desired parameters.



