// ❗ Description:
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// ✅ SOLUTION:

function combat(health, damage) {
   let newHealth = health - damage;
   if (newHealth < 0) { return 0 }
   else return newHealth;
}