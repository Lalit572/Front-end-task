# Front-end-task
Complete front end task PennyPot blog site with some functionalities.

In this task i have used three files such as index.html that contains all the html code, style.css file for providing style to the website , index.js file for the functionalities such as clicking and markdown parser to convert the blog content written in markdown to HTML for display on the website.
In the index.html file i have used comman html tags to make the ui as expected.And talking about the responsivness i have used bootstrap so , the site is responsive for desktop and mobile screen .On the top section there is a slide show the functionalities to that sliders can be added later on as when we add some data in it.

In style.css i have used all the styling tags and methods to make the site design looks as expected i also added hover effect to the buttons and text.I have used colors that have been used in the figma design and tried to make the site looks same as possible .

In index.js the main functionalities are added i used JQuery to add that functionality to buttons such that when user click on Read me button it will redirect to the PennyPot main site we can also add functionality such that when user click on that button he will be redirect to that content page , we can add that later on.For  markdown parser to convert the blog content written in markdown to HTML for display on the website i did In this code, we first wait for the document to be ready before executing any JavaScript code, by using $(document).ready(). Then, we get the Markdown content of the blog post from a container element with the ID markdown-content, using jQuery's text() method.

Next, we create a new instance of showdown.Converter to convert the Markdown content to HTML, using the makeHtml() method.

Finally, we set the HTML content of the same container element with the ID markdown-content, using jQuery's html() method.

you can test that by using alert i have added that just uncomment that and try to run on your local system.

At the end i have added functionality to social media icons as when user click that perticular icon he will redirect to that platform .

Thank you..!

