document.getElementById("enviar").addEventListener("click", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("fecha").value;
    console.log(fecha);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log(data);

            const user = {
                id : data.id + 1,
                name : nombre + ' ' + apellido
            };

            const options = {
                method : 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                    },
                body : JSON.stringify(user)
            };

            fetch('https://jsonplaceholder.typicode.com/users', options)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
        })

        


})