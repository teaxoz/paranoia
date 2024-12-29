<!DOCTYPE html>
<html css="js">
<head>
    <meta charset="UTF-8">
    <meta name="noiaweb" content="width=device-width, initial-scale=1.0">
    <title>AR Link Project</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to AR Link Project</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Home</h2>
            <p>Welcome to AR Link, your gateway to augmented reality experiences.</p>
        </section>

        <section id="about">
            <h2>About</h2>
            <p>AR Link is a platform that connects users with interactive AR content in a seamless way.</p>
        </section>

        <section id="features">
            <h2>Features</h2>
            <ul>
                <li>Interactive AR Experiences</li>
                <li>Easy-to-Use Interface</li>
                <li>Cross-Platform Compatibility</li>
            </ul>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <form id="contactForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 AR Link Project. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
