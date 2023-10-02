const axios = require('axios');

//URL to fetch country data by name
const REST_COUNTRY_INFO_API = 'https://restcountries.com/v3.1/name/';
//URL to fetch country data by language
const REST_COUNTRIES_LANGUAGE_API = 'https://restcountries.com/v3.1/lang/';
//URL to fetch all country data with required output fields
const REST_ALL_COUNTRIES_LIST_API = 'https://restcountries.com/v3.1/all?fields=name,population,area,languages'

/**
 * Fetches detailed information about a specific country as per requested country name.
 *
 * @param {string} countryName - The name of the country to retrieve information for.
 * @returns {Promise<Object>} Detailed information of the specified country.
 */
async function getCountryInfo(countryName) {
    const response = await axios.get(`${REST_COUNTRY_INFO_API}${countryName}`);
    return response.data;
}

/**
 * Retrieves a filtered and paginated list of countries based on specified criteria.
 *
 * @param {string} requestedPopulation - The population filter for countries.
 * @param {string} requestedArea - The area filter for countries.
 * @param {string} requestedLanguage - The language filter for countries.
 * @param {string} requestedSorting - The sorting order ('asc' or 'desc') for the country list.
 * @param {string} requestedPage - The requested page number for pagination.
 * @param {string} requestedPageSize - The requested page size for pagination.
 * @returns {Promise<Array<string>>} List of names of Country that meet the specified criteria.
 * @throws {Error} Throws an error if there is an issue fetching the country list.
 */

async function getCountryList(requestedPopulation, requestedArea, requestedLanguage, requestedSorting, requestedPage, requestedPageSize) {
    try {
        // Determining API URL based on language presence
        const apiUrl = requestedLanguage !== undefined && requestedLanguage !== null && requestedLanguage.trim() !== "" ? `${REST_COUNTRIES_LANGUAGE_API}${requestedLanguage}` : REST_ALL_COUNTRIES_LIST_API;

        const response = await axios.get(apiUrl);

        let countries = response.data;

        // Applying population filter
        if (requestedPopulation != undefined && requestedPopulation) {
            countries = countries.filter(country => {
                const matchesPopulation = country.population && country.population !==0 ? country.population == requestedPopulation : true;
                return matchesPopulation;
            });
        }
        // Applying area filter
        if (requestedArea != undefined && requestedArea) {
            countries = countries.filter(country => {
                const matchesArea = country.area ? country.area == requestedArea : true;
                return matchesArea;
            });
        }

        // Applying sorting only if provided in requested as 'asc' or 'desc', not defaulting any sort as client may need the data unsorted
        if (requestedSorting === 'asc' || requestedSorting === 'desc') {
            countries.sort((a, b) => {
                return requestedSorting === 'asc' ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
            });
        }

        // Pagination
        let paginatedCountries;
        // Using requestedPage and requestedPageSize if available, otherwise default page to 1 and default pagesize to 1000
        const page = requestedPage || 1;
        const pageSize = requestedPageSize || 1000;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        paginatedCountries = countries.slice(startIndex, endIndex);

        // Extracting country names
        const countryNames = paginatedCountries?.map(country => country.name.common);

        return countryNames;
    } catch (error) {
        throw new Error('Error fetching country list from REST Countries API');
    }
}

module.exports = {getCountryInfo, getCountryList};
