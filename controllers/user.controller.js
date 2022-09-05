const fs = require("fs");
// const data = fs.readFileSync('userData.json');
const data = JSON.parse(fs.readFileSync("userData.json"));

module.exports.getRandomUser = (req, res, next) => {
  // res.send("Random User Found");
  /*  const randomValue = Math.floor(Math.random() * data.length)
        console.log(randomValue);
        res.status(200).json({
            message: {
                success: true,
                message: "Random user found.",
                user:data[randomValue]
        } */
  const randomValue = data[parseInt(Math.random() * data.length)];
  // console.log(randomValue);
  res.status(200).send({
    message: {
      success: true,
      message: "Random user found.",
      user: randomValue,
    },
  });
};

module.exports.getAllUser = (req, res, next) => {
  // res.send(data);
  const { limit } = req.query;
  // console.log(limit);
  // res.send(data.slice(0,limit));
  // res.send(data.slice(0, parseInt(limit)));
  if (limit) {
    res.status(200).send({
      message: {
        success: true,
        message: "Limited Users",
        // limitedUsers: (data.slice(0,limit))
        limitedUsers: data.slice(0, parseInt(limit)),
      },
    });
  }
  else {
    res.status(200).send({
      message: {
        success: true,
        message: "All Users Found",
        // limitedUsers: (data.slice(0,limit))
        users: data
      },
    });
  }
};

module.exports.saveUser = (req, res, next) => {
  // res.send("Saved A User");
  // console.log(req.body);
  const { gender, name, contact, address, photoUrl } = req.body;
  // console.log(gender);
  // const randomId = Math.floor(Math.random() * (50-10)+1);
  // console.log(randomId);
  // data.push({id:randomId, ...req.body});
  data.push({ id: data.length + 1, ...req.body });
  fs.writeFileSync("userData.json", JSON.stringify(data))
  if (req.body !== gender, name, contact, address, photoUrl) {
    res.status(500).send({
      message: {
        success: false,
        message: "Please provide a valid data",
      },
    });
  }
  else {
    res.status(200).send({
      message: {
        success: true,
        message: "User added successfully",
        users:data
      },
    });
  }
};



module.exports.updateRandomUser = (req, res, next) => {
  // res.send('Update A Random User')
  // res.send(req.params.id);
  const updatedData = req.body;
  const { id } = req.params;
  // const filter = { _id: id };
  const newData = data.find(d => d.id == id);
  // console.log(updatedUser);
  newData.id = id;
  newData.name = updatedData.name;
  newData.gender = updatedData.gender;
  newData.contact= updatedData.contact;
  newData.address= updatedData.address;
  newData.photoUrl = updatedData.photoUrl;
  
  console.log(newData);
  // const index = data.indexOf(userToBeUpdated);
  // const updatedUser = { ...userToBeUpdated, ...update };
  // data[index] = updatedUser;

  res.send(newData)
};

module.exports.updateMultipleUser = (req, res, next) => {
  res.send("Update A Multiple User");
};

module.exports.deleteUser = (req, res, next) => {
  res.send("Delete A User");
};
