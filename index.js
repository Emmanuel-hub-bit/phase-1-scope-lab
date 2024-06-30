// Write your solution in this file!
{
    var customerName = 'bob';
}

function upperCaseCustomerName() {
    if (window.customerName) {
      window.customerName = window.customerName.toUpperCase();
    }
  }

  function setBestCustomer() {
    window.bestCustomer = 'not bob';
  }

  function overwriteBestCustomer(newCustomer) {
    window.bestCustomer = newCustomer;
  }

  const leastFavoriteCustomer = 'Alice';

  // Function that attempts to change the value of the constant
  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Bob'; // Attempting to reassign the constant variable
  }
