import app from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";

app.get('/users/all', getAllUsers)
app.get('users/:name', getUserByName)
app.get('users/type/:type', getUserByType)