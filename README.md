# Unit 02 CSS and Bootstrap Homework: Responsive Portfolio
[Github Page here](https://b-dionysus.github.io/homework2-portfolio/portfolio.html)


# Updates as of 10/10/2020
* I updated the portfolio page to dynamically generate the thumbnails based on a list of projects
* Clicking on a screenshot thumbnail still brings up the full size photo, but now it also includes the project name and a link to both the git repo and live url for the project.

Three page site with an about page, a contact page, and a portflio page displaying responsive images. All pages should be responive.

For this project, I tried to avoid using javascipt for layout, and to minimize original css for layout as well—the goal was to do as much via Bootstrap's native classes as possible. Obviously I had to use a little of my own css, and I used javascript to create some sweet modal thubnail expansions in the portfolio page.

# Remaining issues / bugs:
- [ ]These pages do not pass [W3's html validation](https://validator.w3.org/)--It complains that ""Element navbar not allowed as child of element body in this context"
--The wise and kind trilogy grading folks suggested using the <nav> element instead, to pass validation, but I'm pretty sure that the bootstrap standards want <navbar>.
