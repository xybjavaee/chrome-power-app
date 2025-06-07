// paypal-safe-note-examples.js

// 适用于 PayPal Friends and Family 转账的备注模板，避免触发风控

const paypalSafeNotes = {
  dailyLife: [
    "Dinner last night 🍜",
    "Thanks for the coffee ☕",
    "Groceries from Costco 🛒",
    "Your half of the Uber ride 🚗",
    "Reimbursing lunch 🍱",
    "Netflix split this month 🎬"
  ],
  travel: [
    "Airbnb split 🏡",
    "Gas money for road trip",
    "Concert tickets 🎶",
    "Beach house share 🏖️",
    "Bus fare from last week 🚌"
  ],
  giftsAndSupport: [
    "Happy Birthday 🎂",
    "Just because 💕",
    "New Year red packet 🧧",
    "For good luck 🍀",
    "Hope this helps 🙌"
  ],
  familySupport: [
    "Lunch allowance for school 🍔",
    "Textbook costs 📚",
    "Phone bill support 📱",
    "Help with groceries",
    "Monthly support ❤️"
  ],
  generalUse: [
    "For that thing we talked about 😉",
    "As discussed",
    "All good — no rush!",
    "Much appreciated!",
    "From me to you"
  ]
};

// 随机选择一个备注
function getRandomNote(category = 'generalUse') {
  const notes = paypalSafeNotes[category] || paypalSafeNotes.generalUse;
  return notes[Math.floor(Math.random() * notes.length)];
}

// 示例用法：生成一个随机的备注信息
const note = getRandomNote('travel');
console.log("Suggested PayPal Note:", note);

module.exports = {
  paypalSafeNotes,
  getRandomNote
};
