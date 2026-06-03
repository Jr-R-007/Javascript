<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Basic JavaScript Lesson</title>
</head>
<body>
    <h1 id="greeting">Hello, World!</h1>

    <script>
        // 1. Define a variable to store user data
        let userName = "Student";

        // 2. Create a dynamic message using string concatenation
        let message = "Welcome to JavaScript, " + userName + "!";

        // 3. Select the HTML element by its ID
        let heading = document.getElementById("greeting");

        // 4. Update the element's content with the new message
        heading.textContent = message;

        // 5. Print confirmation to the browser console
        console.log(message);
    </script>
</body>
</html>   