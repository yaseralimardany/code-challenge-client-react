import {getSensorRepositoryById} from "./sensorRepository";

export function sensorBootstrap(app) {
  app.get('/temperature/:id', async (req, res) => {
    const response = await getSensorRepositoryById(req.params.id);
    res.send(response.data);
  });
}

export default sensorBootstrap;