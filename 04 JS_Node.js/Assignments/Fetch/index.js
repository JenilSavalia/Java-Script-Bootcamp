fetch("http://localhost:3002/studentdata/Rahul Sharma")
    .then((response) => response.json())
    .then((data) => {
        // Select the HTML element to display data
        const outputDiv = document.getElementById("output");
        // If data is a single object, display it as a JSON string (or format as needed)
        outputDiv.innerHTML = `<p>${JSON.stringify(data)}</p>`;
    })
    .catch((error) => console.log(error));





// fetch("http://localhost:3002/studentdata/Rahul Sharma/websites")
//     .then((response) => response.json())
//     .then((data) => {
//         // Select the HTML element to display data
//         const outputDiv = document.getElementById("output");

//         // Check if data is an array
//         if (Array.isArray(data)) {
//             // Create HTML structure for the data
//             outputDiv.innerHTML = data
//                 .map(student => `<p>${student.name} - ${student.grade}</p>`)
//                 .join('');
//         } else {
//             // If data is a single object, display it as a JSON string (or format as needed)
//             outputDiv.innerHTML = `<p>${JSON.stringify(data)}</p>`;
//         }
//     })
//     .catch((error) => console.log(error));
