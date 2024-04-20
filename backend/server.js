const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
const  user  =  require("./routes/userRoute");
const  courseRoute  =  require("./routes/courseRoute");
const  facultyRoute  =  require("./routes/facultyRoute");
app.use(bodyParser.json({ limit: '1gb' }));
app.use(bodyParser.urlencoded({ limit: '1gb', extended: true }));

app.use("/user",  user);
app.use("/Course",  courseRoute);
app.use("/faculty",  facultyRoute);
app.use('/upload', express.static('uploads'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
