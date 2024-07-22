// Insert your code here

document.querySelector('#register').addEventListener('click',
    function () {
        const register = {
            name: document.querySelector('#registerName').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value,
        }
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(register)
        })
            .then(response => response.json())
            .then(register => {
                if (register.result) {
                    window.location.assign('index.html')
                    console.log('nice')
                };
            });
    })



document.querySelector('#connection').addEventListener('click',
    function () {
        const login = {
            email: document.querySelector('#connectionEmail').value,
            password: document.querySelector('#connectionPassword').value,
        }
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        })
            .then(response => response.json())
            .then(connect => {
                if (connect.result) {
                    window.location.assign('index.html')
                };
            });
    })