const visitorInput = prompt(
    "Please enter a list of comma-seperated froyo flavors."
)

const orderArray = visitorInput.split(",");

function countOrders(orderArray) {
        const count = {};
        for (let flavor of orderArray) {
            if (count[flavor]) {
                count[flavor] += 1;
            } else {
                count[flavor] = 1;
            }
        }
            return count;
}

const flavorCount = countOrders(orderArray);

const formattedData = Object.entries(flavorCount).map(([flavor, count]) => ({
    Flavor: flavor,
    Count: count,
}));

console.table(formattedData);
