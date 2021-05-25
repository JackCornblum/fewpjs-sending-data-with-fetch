// Add your code here

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// };

// fetch('http://localhost:3000/dogs', configurationObject);

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(resp => resp.json())
    .then(data => document.body.append(data.id))
    .catch(error => {
        document.body.append(`Ruh roh raggy, ${error}`);
        
    })
}