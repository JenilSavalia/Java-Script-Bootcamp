const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// Data

let studentsData = {
    "Rahul Sharma": {
        email: "rahul.sharma@codinggita.com",
        websites: [
            "http://rahuls-portfolio.com",
            "http://rahulblogs.com",
            "http://rahulprojects.com"
        ]
    },
    "Anjali Mehta": {
        email: "anjali.mehta@codinggita.com",
        websites: [
            "http://anjalisdesigns.com",
            "http://anjalitech.com",
            "http://anjalicode.com"
        ]
    }
};



// Get Endpoints

// 1. Get all students' data 
//(/studentdata)

app.get("/studentdata", (req, res) => {
    // res.send("Jay Swaminarayan");
    res.json(studentsData);
})


//GET Request 2: Retrieve Individual Student Details by Name 
//(/studentdata/:name)

app.get("/studentdata/:name", (req, res) => {

    let Student = studentsData[req.params.name];
    if (Student) {
        res.json(Student);
    }
    else {
        res.status(404).send("Data not found");
    }
})


//3. GET Request 3: Retrieve a Student's Email by Name
//  /students/:name/email

app.get("/studentdata/:name/email", (req, res) => {

    let Student = studentsData[req.params.name];
    if (Student) {
        res.json(Student.email);
    }
    else {
        res.status(404).send("Data not found");
    }

})




// Put Endpoints

//4. POST Request 1: Add a New Student
//Endpoint: /studentdata

app.post("/studentdata", (req, res) => {

    const { name, email, websites } = req.body

    if (studentsData[name]) {
        return res.status(400).send("Data already exists");
    }

    studentsData[name] = {
        email,
        websites
    };
    res.status(201).send(`Course ${name} created`);

});



//5. POST Request 2: Add a Fourth Website to an Existing Student

//Endpoint: /studentdata/:name/websites


app.post("/studentdata/:name/websites", (req, res) => {

let Student = studentsData[req.params.name]

    if (Student) {
        Student.websites.push(req.body.addweb);
        res.status(201).send(`Website added to ${Student.name}`);
    }
    else {
        res.status(404).send("Data not found")
    }


});