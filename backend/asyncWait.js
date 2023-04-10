const UserLogin = () => {
  let username = "tobatsu";
  // prompt("Enter username");
  let password = "tobatsi";
  // prompt("Enter password");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing user authentication");
      if (username === "molapo" && password === "mama")
        resolve("user authentictated!");
      else reject("authentication  failed");
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`go to Homepage as :${userAuthStatus}`);
}

UserLogin()
  .then((res) => {
    console.log("VALIDED USER");
    return goToHomePage(res);
  })
  .then((userAuthStatus) => console.log(userAuthStatus))
  .catch((err) => console.log(err));




