
// Server Setup:
const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies


//  start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


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
    ratings: [5, 5],
  },
};



//----------------------- API ENDPOINTS ---------------------------------------------------------------------------------------------

// List All Courses (GET /courses)
app.get("/courses", (req, res) => {
  res.json(courses);
});


//Get Details of a Specific Course (GET /courses/:name)

app.get("/courses/:name", (req, res) => {
  const course = courses[req.params.name];
  console.log(req.params.name);
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


//Create a New Course (POST /courses):
app.post("/courses", (req, res) => {
  const { name, title, description } = req.body;
  if (courses[name]) {
    return res.status(400).send("Course already exists");
  }
  courses[name] = { title, description, ratings: [] };
  res.status(201).send(`Course ${name} created`);
});


//Add a Rating to a Course (POST /courses/:name/rating):
app.post("/courses/:name/rating", (req, res) => {
  const course = courses[req.params.name];
  
  if (course) {
  
    course.ratings.push(req.body.rating);
    res.send("Rating added");
  } else {
    res.status(404).send("Course not found");
  }
});


//Modify Course Details (PUT /courses/:name):
app.put("/courses/:name", (req, res) => {
  const { title, description } = req.body;
  if (courses[req.params.name]) {
    courses[req.params.name].title = title;
    courses[req.params.name].description = description;
    res.send("Course updated");
  } else {
    res.status(404).send("Course not found");
  }
});

// ---------------------------------------------------------------------


// Count Total no of Subjects (GET /courses/count):

app.get("/course/count", (req, res) => {
  const course = courses[req.params.name];

  let count = 0;
  for (let x in courses) {
    count = count + 1;
  }
  console.log(count)
  res.json(count);

});


// Count length rating array (GET /courses/count):

app.get("/course/:name/total_ratings", (req, res) => {
  const course = courses[req.params.name];
  const ratings_lenght = course.ratings.length
  if (course) {
    res.json({"ratings_lenght" : ratings_lenght});
  } else {
    res.status(404).send("Course not found");
  }

});


//Get description of a Specific Course (GET /courses/:name/description):

app.get("/courses/:name/description", (req, res) => {
  const course = courses[req.params.name];
  console.log(req.params.name);
  if (course) {
    res.json(course.description);
  } else {
    res.status(404).send("Course not found");
  }
});
