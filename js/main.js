
// Function to copy link to clipboard
      document.getElementById('copy-link').addEventListener('click', function() {
        // Get the current page URL
        const url = "https://rolexinvest.shop/auth/register";

        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = url; // Set the value to the URL
        document.body.appendChild(textarea);

        // Select the content of the textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices

        // Execute the copy command
        document.execCommand('copy');

        // Remove the textarea from the document
        document.body.removeChild(textarea);

        // Alert user that the link has been copied
        alert(`Link ${url} telah Disalin!`);
});
