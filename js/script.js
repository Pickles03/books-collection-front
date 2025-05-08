// <div id='bookList' class="bookList"></div>
//<div id='userList' class="userList"></div>

function getBooks() {
    const url = 'http://localhost:3000/books';
    const bookList = document.getElementById('bookList');
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            data.forEach(({title, author, date, image}) => {
                const bookContainer = document.createElement('div');
                bookContainer.className = 'bookContainer';
                bookContainer.innerHTML = `
                    <h3>${title}</h3>
                    <img src='${image}' width=300px alt='${title}' />
                    <p>Author: ${author}</p>
                    <p>Publication Date: ${date}</p>
                `;
                bookList.appendChild(bookContainer);
            });
        })
        .catch (error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

function getUsers() {
    const url = 'http://localhost:3000/users';
    const userList = document.getElementById('userList');
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            data.forEach(({name, email, collection, wishlist}) => {
                const userContainer = document.createElement('div');
                userContainer.className = 'userContainer';
                
                userContainer.innerHTML = `
                    <h3>${name}</h3>
                    <p>Email: ${email}</p>
                    <p><strong>Collection:</strong></p>
                        <ul class="collectionCentered">
                            ${collection.map(book => `<li>${book}</li>`).join('')}
                        </ul>
                    <p><strong>Wishlist:</strong></p>
                        <ul class="wishCentered">
                            ${wishlist.map(book => `<li>${book}</li>`).join('')}
                        </ul>
                `;
                userList.appendChild(userContainer);
            });  
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error);
        });
};

document.getElementById('home').addEventListener('click', function() {
    userList.innerHTML = '';
    bookList.innerHTML = '';
});