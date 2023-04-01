

    // functionality added for buttons to redirect to the actual pennypot site
$(".btn").click(()=>{
    window.location.href ="https://www.pennypot.money/";
});



//functionality for social media pages redirecting added to the icons
$(".fa-linkedin").click(()=>{
    window.location.href ="https://www.linkedin.com/company/pennypot/";
});
$(".fa-youtube").click(()=>{
    window.location.href ="https://www.youtube.com/";
});
$(".fa-facebook").click(()=>{
    window.location.href ="https://www.facebook.com/";
});
$(".fa-twitter").click(()=>{
    window.location.href ="https://twitter.com/";
});

//markdown content parser

$(document).ready(function() {
    // Get the Markdown content from the blog post
    const markdownContent = $('#markdown-content').text();
  
    // Convert the Markdown content to HTML using Showdown.js
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdownContent);
  
    //you can test by uncommenting following alert 
    //alert(html);
    // Set the HTML content of the blog post container
    // this line sets the content to the blog site you can also use that by using html variable name 
    
    // $('#markdown-content').html(html);
    

    
  });

