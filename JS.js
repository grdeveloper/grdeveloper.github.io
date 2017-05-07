var mBlog = document.getElementById("mainBlog");
var aPage = document.getElementById("abtPage");
aPage.click = function myFunction(){
  if(mBlog.className == "mainDiv"){
    mBlog.className = "mainDivBlock";
    aPage.className = "aboutPageShadow";
  } else{
    mBlog.className == "mainDiv";
    aPage.className = "aboutPage";
  }
};
