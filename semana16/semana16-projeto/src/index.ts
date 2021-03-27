import app from "./app"
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getUserById from "./endpoints/getUserById";


app.put("/user", createUser);
app.get("/user/:id", getUserById)
app.post("/user/edit/:id", editUser)


