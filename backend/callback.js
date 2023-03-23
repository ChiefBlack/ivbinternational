console.log("Task starts");

const asyncTask = (cb) => {
  cb();
};

asyncTask((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data");
  }
});
