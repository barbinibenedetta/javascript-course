// 15e. 15f.

export default function isWeekend(date) {
  if (date.format("dddd") === 'Saturday' || date.format("dddd") === 'Sunday') {
    console.log("It's the weekend!");
  } else {
    console.log("It's not the weekend...")
  }
}