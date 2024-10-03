const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    database: 'delta_app',
    password: 'SIDdharth'
  });

  let createRandomUser = () => {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }


  let q = 'insert into user11(id, username, email, password) values ?';
  let data = [];

  for(let i=0;i<10;i++){
    data.push(createRandomUser());
  }

  try{
  connection.query(q,[data], (err, result) => {
    if(err) throw err;
    console.log(result);
  });
  } catch (err) {
    console.log(err);
  }

  // connection.end();

 