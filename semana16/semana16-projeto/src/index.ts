import app from "./app"
import putUser from "./endpoints/putUser"

app.put("/user/create", putUser);

