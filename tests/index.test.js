import {getSensorRepositoryById} from "../src/sensor/sensorRepository";

const SENSOR_TEST_ID = 2;

test('check api of get sensor data', async () => {
  const data = await getSensorRepositoryById(SENSOR_TEST_ID);
  expect(data).toBeDefined();
  expect(data.error).toBe(false);
  expect(data.data).toBeDefined();
  expect(data.data.id).toBeDefined();
});
