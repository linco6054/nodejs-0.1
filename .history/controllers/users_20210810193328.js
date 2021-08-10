const createUser=()=>{
    (req, res) => {
      //request . body gets you incoming info
      const user = req.body;

      const userWithId = { ...user, id: uuidv4(), createdAt: new Date() };
      users.push(userWithId);
      res.send(`user with the name ${userWithId.name} added to the database`);
    };
}