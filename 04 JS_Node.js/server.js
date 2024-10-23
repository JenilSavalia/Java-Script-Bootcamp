
// Server Setup:

const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies



// data

let courses = {
    frontend: {
        title: "Frontend Development",
        description: "Learn HTML, CSS, JavaScript...",
        ratings: [5, 4, 4.5],
    },

    backend: {
        title: "Backend Development",
        description: "Learn Node, Express, Database",
        ratings: [5, 5, 4.9],
    },
};


// List All Courses (GET /courses)

app.get("/courses", (req, res) => {
    res.json(courses);
});


// Get Details of a Specific Course (GET /courses/:name):

app.get("/courses/:name", (req, res) => {
    const course = courses[req.params.name];
    //   console.log(req.params.name)
    if (course) {
        res.json(course);
    } else {
        res.status(404).send("Course not found");
    }
});



//Get Average Rating of a Course (GET /courses/:name/rating):

app.get("/courses/:name/rating", (req, res) => {
    const course = courses[req.params.name];
    if (course && course.ratings.length > 0) {
        const average =
            course.ratings.reduce((acc, r) => acc + r, 0) /
            course.ratings.length;
        res.json({ averageRating: average });
    } else {
        res.status(404).send("Course not found or no ratings available");
    }
});

//  start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});