// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
	
// };

// getSumBtn.addEventListener("click", getSum);

const getSum = () => {
    // Use querySelectorAll to get all the elements with the class 'prices'
    const prices = document.querySelectorAll('.prices');
    
    // Initialize the sum variable
    let total = 0;
    
    // Loop through each price element and add its content to the total
    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });
    
    // Create a new row and cell for the total price
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    
    // Set the attributes and content for the new cell
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = `Total Price: Rs ${total}`;
    
    // Append the cell to the row and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

// Call the function to calculate the sum and update the table
getSum();
