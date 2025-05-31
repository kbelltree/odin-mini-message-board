# The Odin Project: Mini Message Board

This **Mini Message Board** project was developed to strengthen my skills in **Express** and **EJS**.

For more details on the project assignment, please visit [The Odin Project - Mini Message Board](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board).

## Key Project Instructions

The project was developed following these main guidelines:

- Install Express and EJS.
- Prepare two routes - `/` for index page, `/new` for the new message form page.
- Add sample `messages` data in the index route file.
- Render the `messages` data in the index EJS template using iteration.
- Create a message form with:<br>
  - Heading
  - Two input fields: one for the author’s name and one for the message text
  - Submit button
- Configure the `/new` route to handle form submissions using **router.post()** and an **HTML POST** request.
- Set up the application flow for form submission:
  1.  Submit the form
  2.  Decode the form data using express.urlencoded()
  3.  Push the submitted data to the messages array
  4.  Redirect to the index page
  5.  Display the new message on the index page
- Add an Open button next to each message that links to a detailed view of the selected message.

## Built With

- HTML
- CSS
- JavaScript
- Express
- EJS
- ESLint
- Prettier
