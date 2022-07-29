import {render} from '@testing-library/react';
import App from './App';
import { getSensorTemperature, getSensorTemperatureByProducts } from './sensor/api';
import { getSensorMockData } from './sensor/mockData';

describe('Test apis', () => {
    it('get one sensor by id api', async () => {
        const data = await getSensorTemperature(2);
        expect(data).toBeDefined();
        expect(data.id).toBeDefined();
        expect(data.id).toBe("2");
        expect(data.temperature).toBeDefined();
    });
    
    it('get many sensor by id api', async () => {
        const mockData = getSensorMockData();
        const data = await getSensorTemperatureByProducts(mockData);
        expect(data).toBeDefined();
        expect(data[0].id).toBeDefined();
        expect(data[0].id).toBe(mockData[0].id);
        expect(data[0].temperature).toBeDefined();
        expect(data.length).toBe(mockData.length);
    });
});
