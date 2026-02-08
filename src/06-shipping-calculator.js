/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
  // Your code here
  if (parseFloat(weight) === NaN || parseFloat(orderTotal) === NaN || weight <= 0 || orderTotal < 0) return -1;

  let shippingCharge = 0;
  if (country.toUpperCase() === "US") {
    if (weight <= 1) shippingCharge = 5;
    else if (weight <= 5) shippingCharge = 10;
    else shippingCharge = 15;

    if (orderTotal > 50) shippingCharge = 0;
  }
  else {
    if (weight <= 1) shippingCharge = 15;
    else if (weight <= 5) shippingCharge = 25;
    else shippingCharge = 40;

    if (orderTotal > 100) shippingCharge = 0;
  }

  return shippingCharge
}
