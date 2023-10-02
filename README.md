# Country Information API Service Development using REST Countries API
A backend API service that returns useful data about countries

## Setup

1. **Clone the repository:** <br/>
_Command_ <br/>
   git clone https://github.com/hardikjaipuriaTech/country-data-api.git <br/>

2. **Navigate to the project directory** <br/>
_Command_ <br/>
   cd country-data-api <br/>

3. **Run the Server** <br/>
_Command_ <br/>
   npm start <br/>
_The server will be running at http://localhost:3000._ <br/>

## Service API Testing

**1. Get Auth Token** <br/>
_Command:_ <br/>
curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"admin\", \"password\": \"admin@1234\"}" http://localhost:3000/api/auth <br/>
_Sample Output 1:_ <br/>
After running this command , you will receive the generated token in json response as shown below
   {"authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4"} <br/>


**2. Fetch Detailed Information about a Country** <br/>
Copy the token from the Output 1 and use it in the command below <br/>
_Command:_ <br/>
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countryInfo/India <br/>

**3. Retrieve list of Countries Name based on specified filters of population, area and language.
Also provide sorting as 'asc' or 'desc' for sorting on names as ascending and descending respetively
Provide page and pagesize paramters for pagination** <br/>

Copy the token from Output 1 and use it in the commands below <br/>

**a.  Population based filtering** <br/>
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?population=280904 <br/>

**b. Area based filtering** <br/>
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?area=916445 <br/>

**c. Language based filtering** <br/>
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?language=french <br/>

**d. All filters or combination working together** <br/>
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?population=280904&area=916445.0&language=spanish <br/>

**e. Filters with sorting** <br/>
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?language=french&sording=desc <br/>

**f. Filters with pagination** <br/>
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?language=english&page=1&pagesize=5 <br/>

**g. Sorting and Pagination without filters** <br/>
curl -H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjk2MjU1MjQ5LCJleHAiOjE2OTYzNDE2NDl9.MlQw3uqDfZl_2HjILJARU7eV1NifDVggLa-OtyPbtZ4" http://localhost:3000/api/countriesName/list?sorting=asc&page=1&pagesize=5 <br/>

Replace population,area, language, sorting, and page with your desired parameters and use different combinations as per requirement.



