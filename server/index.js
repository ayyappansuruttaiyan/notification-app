import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("someone has connected");
  socket.on("disconnect", () => {
    console.log("someone has left");
  });
});

io.listen(3000);
