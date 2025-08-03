import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root')).render(<App />);


function getNumbers(grades) {

  const sum = grades.filter(grade => grade > 90)
                    .map(grade => grade + 5)
                    .reduce((acc, grade) => acc + grade, 0);

    const total = sum / grades.length;
    return total;
}
