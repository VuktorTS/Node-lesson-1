import * as moviesService from "./movies/index.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allMovies = await moviesService.getAllMovies();
      return console.log(allMovies);
    case "getById":
      const movie = await moviesService.getMovieById(id);
      return console.log(movie);
    case "add":
      const addMuvie = await moviesService.addNewMuvie(data);
      return console.log(addMuvie);
    case "updateById":
      const updateMovie = await moviesService.updateMovieById(id, data);
      return console.log(updateMovie);
    case "deleteById":
      const deleteMovies = await moviesService.deleteMovieById(id);
      return console.log(deleteMovies);
    default:
      break;
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "Op8ApLTY0-Vn2cR0vDIwG" });
// invokeAction({
//   action: "add",
//   title: "Avatar: way of water",
//   director: "James Cameron",
// });
// invokeAction({
//   action: "updateById",
//   id: "YO0opXXPJHqhKSaaIibE-",
//   director: "Spilberg",
// });
invokeAction({ action: "deleteById", id: "_-cdkqBquFUD3yzG1gj6T" });
