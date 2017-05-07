var mainBlog = document.getElementById("mainBlog");
var aboutPage = document.getElementById("abtPage");
aboutPage.click = function myFunction(){
  if(mainBlog.className === "mainDiv"){
    mainBlog.className = "mainDivBlock";
    aboutPage.className = "aboutPageShadow";
  } else{
    mainBlog.className === "mainDiv";
    aboutPage.className = "aboutPage";
  }
};
