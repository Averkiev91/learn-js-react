import { restaurants } from '../materials/mock.js';

import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(
  <div>
    {restaurants.map((element) => (
      <div key={element.id}>
        <h3>{'Ресторан: ' + element.name}</h3>
        <p>Меню</p>
        <ul>
          <li>{element.menu.map((item) => item.name)}</li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {element.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
