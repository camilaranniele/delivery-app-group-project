const newUser = 
  {
    "name": "Manoel da Skina",
    "password": "agoraano2022",
    "email": "manelskina@email.com"
  };

const createUser = {
  id: 3,
  name: "Cliente Zé Birita",
  password: "1c37466c159755ce1fa181bd247cb925",
  email: "zebirita@email.com",
  role: "customer",
};

const loginUser = {
  password: "$#zebirita#$",
  email: "manoelskina@gmail.com",
};

const invalidEmail = {
  name: "Manoel da Skina",
  password: "1c37466c159755ce1fa181bd247cb925",
  email: "manoelskina.gmail",
};

const invalidPassword = {
  name: "Manoel da Skina",
  password: "2022",
  email: "manoelskina@gmail.com",
};

const returnRegister = {
  id: 3,
  email: "zebirita@email.com",
  name: "Cliente Zé Birita",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsIm5hbWUiOiJPdHRvIEFsYnVxdWVycXVlIiwiZW1haWwiOiJvdHRvQm95QG90dG8uY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxNzcwNjE3fQ.PLve6Pvt3xXhNlHO9iLHjD_B1ovg0hRuEO_EE2lobHk",
  role: "customer",
};

const returnToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsIm5hbWUiOiJPdHRvIEFsYnVxdWVycXVlIiwiZW1haWwiOiJvdHRvQm95QG90dG8uY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxNzcwNjE3fQ.PLve6Pvt3xXhNlHO9iLHjD_B1ovg0hRuEO_EE2lobHk";

module.exports = {
  createUser,
  createNewUser,
  loginUser,
  invalidEmail,
  invalidPassword,
  returnRegister,
  returnNewRegister,
  returnToken,
  newUser,
};

// //
// (3, 'Cliente Zé Birita', 'zebirita@email.com', '1c37466c159755ce1fa181bd247cb925', 'customer'); -- senha: md5('$#zebirita#$')
// //