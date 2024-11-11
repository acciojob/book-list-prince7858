//your JS code here. If required.
// Function to add a new book to the list
function addBook(event) {
  event.preventDefault();

  // Retrieve input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Check if inputs are not empty
  if (title === "" || author === "" || isbn === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Create a new row
  const row = document.createElement("tr");

  // Insert cells for title, author, and ISBN
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="btn btn-danger btn-sm delete">X</button></td>
  `;

  // Append the row to the table body
  document.getElementById("book-list").appendChild(row);

  // Clear input fields after submission
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

// Function to delete a row when "Clear" is clicked
function deleteBook(event) {
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this book?")) {
      const row = event.target.parentElement.parentElement;
      document.getElementById("book-list").removeChild(row);
    }
  }
}

// Event listener for adding books
document.getElementById("submit").addEventListener("click", addBook);

// Event listener for deleting books
document.getElementById("book-list").addEventListener("click", deleteBook);
