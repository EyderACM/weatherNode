let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Vik',
  };

  setTimeout(() => {
    callback(user);
  }, 3000);  
};

getUser(31, (user) => {
  console.log(user);
});