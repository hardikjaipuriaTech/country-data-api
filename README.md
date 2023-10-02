# Country Information API Service Development using REST Countries API
A backend API service that returns useful data about countries

## Setup

1. **Clone the repository:**
   git clone https://github.com/hardikjaipuriaTech/country-data-api.git

2. **Navigate to the project directory**
   cd country-information-api

3. **Run the Server**
   npm start
_The server will be running at http://localhost:3000._

## Service API Testing

1. Get Auth Token
_Command:_
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"admin\", \"password\": \"admin@1234\"}" http://localhost:3000/api/auth
_Sample Output 1:_
After running this command , you will receive the generated token in json response as shown below
   {"authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4"}


2. Fetch Detailed Information about a Country
Copy the token from the Output 1 and use it in the command below
_Command:_
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countryInfo/India

3. Retrieve list of Countries Name based on specified filters of population, area and language.
Also provide sorting as 'asc' or 'desc' for sorting on names as ascending and descending respetively
Provide page and pagesize paramters for pagination

Copy the token from Output 1 and use it in the commands below

a. For Population based filtering
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?population=280904

b. For Area based filtering
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?area=916445

c. For Language based filtering
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?language=french

d. All filters or combination working together
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?population=280904&area=916445.0&language=spanish

e. Filters with sorting
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?language=french&sording=desc

f. Filters with pagination
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?language=english&page=1&pagesize=5

g. Sorting and Pagination without filters
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?sorting=asc&page=1&pagesize=5

Replace population,area, language, sorting, and page with your desired parameters and use different combinations as per requirement.



