let url;


if (process.env.NODE_ENV === "development") {
  console.log(process.env.NODE_ENV);
  url = "http://localhost:22571/v1";
} else if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV);
  url = "https://todolist-backend-arifdogru.herokuapp.com/:31571/v1";
}

export default {
  ToDoListServiceUrl: url
};
