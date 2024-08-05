// punto de entrada de la aplicacion! index.ts
import "reflect-metadata"; // para poder usar los decoradores. 
import express from "express";
import sequelize from "./config/db";
import router from "./routes/Router";
import cors from 'cors';

const app = express(); // instance of express
const PORT = process.env.PORT || 3000;

// const corsOptions = {
//   origin: `*`, 
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));

app.use(express.json()); // 
app.use("/api", router); // ruta raiz! 

const startServer = async () => {
  try { // por que es importante try catch, por manejo de errores.
    await sequelize.authenticate(); // para que se conecte a la base de datos.
    console.log("DATABASE is ONLINE... loading data..");
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`WELCOME, server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();