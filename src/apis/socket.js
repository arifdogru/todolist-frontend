/*import openSocket from "socket.io-client";
import dynamicUrl from "./dynamicUrl";

function connect_backend (add_task, token) {
  console.log("Socket Connection Established");
  var socket = openSocket(dynamicUrl.notification_url, {
    query: {token: token}
  });
  socket.on("task", message => {
    console.log("Socket Message -> " ,message);
    add_task(message);
  });
}
  export { connect_backend };*/