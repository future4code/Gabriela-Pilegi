import app from "./app";
import deleteActor from "./endpoints/deleteActor";
import getActors from "./endpoints/getActors";
import createMovie from './endpoints/createMovie';
import getMoviesLimit from "./endpoints/getMovieLimit";
import getMovies from './endpoints/getMovie';
import editActor from './endpoints/editActor';
import getAvgSalary from "./endpoints/getAvgSalary";
import updateSalary from "./endpoints/updateSalary";

app.get("/actor/all", getActors);

app.get("/actor/:id", getActors);

app.put("/actor/edit/salary:id", updateSalary);

app.delete("/actor/delete", deleteActor);

app.get("/actor/salary/avg/:gender", getAvgSalary);

app.put("/actor/edit/:id", editActor);

app.delete("/actor/delete/:id", deleteActor);

app.post("/movie/create", createMovie);

app.get("/movies/list/limit", getMoviesLimit);

app.get("/movies", getMovies);
