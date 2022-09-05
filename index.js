const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;
const errorHandler = require('./middleware/errorHandler');
const userRoutes=require('./routes/user.route')

//middleWares
app.use(cors());
app.use(express.json());
app.use(errorHandler);


app.use('/api/user', userRoutes);


app.get('/', (req, res) => {
  res.send('Hello Assignment-1....')
})

app.all("*", (req, res) => {
  // res.send("No User Found")
  res.send({
    Welcome: " Welcome to Random user API.",
    Sorry: " No User Found  !!! Please follow the Doc",
    Doc: {
      "GET /api/user/random": "Get a random user from the .json file.",
      "GET /api/user/all": "list of all random users from the .json file.",
      "POST /api/user/save": "Save a random user from the .json file.",
      "PATCH /api/user/update": "Update a random user from the .json file.",
      "PATCH /api/user/bulk-update": "update multiple users from the .json file.",
      "PATCH /api/user/delete/:id": "Delete a user from the .json file using its id.",
    },
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// handle unhandled rejections or errors
process.on("unhandledRejection", (error) => {
  console.log({
    name: err.name,
    message: err.message,
  });
  // close server or app & exit 
  app.close(() => process.exit(1));
});