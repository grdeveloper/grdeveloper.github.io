var mBlog = document.getElementById("mainBlog");
var aPage = document.getElementById("abtPage");
aPage.click = function myFunction(){
  if(mBlog.className == "mainDivBlock"){
    mBlog.className = "";
    aPage.className = "aboutPage";
  } else{
    mBlog.className == "mainDivBlock";
    aPage.className = "aboutPageShadow";
  }
};
