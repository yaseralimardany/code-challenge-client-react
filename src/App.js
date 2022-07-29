import { useEffect, useState } from 'react';
import { getSensorTemperatureByProducts } from './sensor/api';
import { getSensorMockData } from './sensor/mockData';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const request = async() => {
      getSensorTemperatureByProducts(getSensorMockData()).then(items => {
        setItems(items);
      });
    }

    setInterval(request, 5000);
    request();
  }, []);
  
  console.log("items", items, !items, items.length === 0, !items || items.length === 0);

  return (
    <div className="App">
      <h2>Beers</h2>
      {items.length > 0 && <table>
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
            <th align="left">Health range</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(items).map((itemKey) => (
          <tr key={items[itemKey].id}>
            <td width={150}>{items[itemKey].name}</td>
            <td width={150}>{items[itemKey].temperature}</td>
            <td width={150}>
              {items[itemKey].temperature <
              items[itemKey].minimumTemperature && <span>too low</span>}
              {items[itemKey].temperature >
              items[itemKey].maximumTemperature && <span>too high</span>}
              {items[itemKey].temperature <=
              items[itemKey].maximumTemperature &&
              items[itemKey].temperature >=
              items[itemKey].minimumTemperature && <span>all good</span>}
            </td>
            <td width={150}>{items[itemKey].minimumTemperature} - {items[itemKey].maximumTemperature}</td>
          </tr>
        ))}
        </tbody>
      </table>}
      {!items || items.length === 0 && <span>loading...</span>}
    </div>
  );
}

export default App;
