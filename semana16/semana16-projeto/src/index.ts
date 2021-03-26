import app from "./app"
import getUserById from "./endpoints/getUserById";
import putUser from "./endpoints/putUser"

app.put("/user/create", putUser);
app.get("/user/:id", getUserById)

