# Unit 02 CSS and Bootstrap Homework: Responsive Portfolio
[Github Page here](https://b-dionysus.github.io/homework2-portfolio/index.html)

Three page site with an about page, a contact page, and a portflio page displaying responsive images. All pages should be responive.

For this project, I tried to avoid using javascipt for layout, and to minimize original css for layout as well—the goal was to do as much via Bootstrap's native classes as possible. Obviously I had to use a little of my own css, and I used javascript to create some sweet modal thubnail expansions in the portfolio page.

# Remaining issues / bugs:
- [ ]These pages do not pass [W3's html validation](https://validator.w3.org/)--It complains that ""Element navbar not allowed as child of element body in this context"
- [x]Under certain conditions, a hoizontal scroll bar appears at the bottom of portfolio.html. I was unable to replicate it locally, but it shows up on github pages.

    Oh, good news! Changing the overflow to overflow-y in my .scroll-BD class fixed the problem after all! It just took a while for github pages to load my fix.
