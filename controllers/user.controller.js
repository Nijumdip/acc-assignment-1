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
                user: randomValue
        },
    });
};


module.exports.getAllUser = (req, res, next) => {
  // res.send('All User Found');
    const { limit } = req.query;
    // console.log(limit);
    // res.send(data.slice(0,limit));
    res.status(200).send({
        message: {
            success: true,
            message: "Limited Users",
            // limitedUsers: (data.slice(0,limit))
            limitedUsers: (data.slice(0, parseInt(limit)))
    },
});
    
};

module.exports.saveUser = (req, res, next) => {
  res.send("Post A User");
};

module.exports.updateRandomUser = (req, res, next) => {
  // res.send('Update A Random User')
  res.send(req.params.id);
};

module.exports.updateMultipleUser = (req, res, next) => {
  res.send("Update A Multiple User");
};

module.exports.deleteUser = (req, res, next) => {
  res.send("Delete A User");
};
