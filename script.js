// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
	
// };

// getSumBtn.addEventListener("click", getSum);

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all the elements with the class "price"
    const prices = document.querySelectorAll(".prices");
    
    // Calculate the sum of all the prices
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    // Create a new row
    const newRow = document.createElement("tr");

    // Create a single cell for this row
    const totalCell = document.createElement("td");
    
    // Set the colspan to 2 to span across both columns
    totalCell.setAttribute("colspan", "2");

    // Add the total price to the cell
    totalCell.textContent = `Total Price: Rs ${total}`;

    // Append the cell to the new row
    newRow.appendChild(totalCell);

    // Append the new row to the table
    const table = document.querySelector("table");
    table.appendChild(newRow);
};

// Add an event listener to the button to calculate and display the total price when clicked
getSumBtn.addEventListener("click", getSum);


