import express from 'express';
import cors from 'cors';
import sensorBootstrap from "./src/sensor/sensorApi";

function bootstrap() {
  const app = express();
  const port = 8081;
  app.use(cors());
  
  // Add bootstrap here
  sensorBootstrap(app);
  
  app.listen(port, () => {
    console.log(`SensorTech server at http://localhost:${port}`);
  });
  
}

bootstrap();
