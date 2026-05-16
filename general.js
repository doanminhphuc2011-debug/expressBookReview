const axios = require('axios');

async function getAllBooks() {
    const response = await axios.get('http://localhost:5000/');
    console.log(response.data);
}

function getBookByISBN(isbn) {
    return axios.get(`http://localhost:5000/isbn/${isbn}`)
        .then(response => console.log(response.data));
}

async function getBooksByAuthor(author) {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    console.log(response.data);
}

async function getBooksByTitle(title) {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    console.log(response.data);
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};