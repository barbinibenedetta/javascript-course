import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// 15f. 15g.
import isSatSun from './15-weekend.js';


// 15a.
const today = dayjs();
console.log(today.format("MMMM D"));

// 15b.
const afterOneMonth = today.add(1, 'month');
console.log(afterOneMonth.format("MMMM D"));

// 15c.
const beforeOneMonth = today.subtract(1, 'month');
console.log(beforeOneMonth.format("MMMM D"));

// 15d.
console.log(today.format("dddd"));

// 15e. 15f.
isSatSun(today);
isSatSun(afterOneMonth);
isSatSun(beforeOneMonth);