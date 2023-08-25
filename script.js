if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', detectColorScheme);
}
  else{
    detectColorScheme();
  }

    //As seen on
    //https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
    //2nd part in body needs to be after the checkbuton+label!!!

  function detectColorScheme(){
      var theme="light";    //default to light

      //local storage is used to override OS theme settings
      if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
          theme = "dark";
        }
      } else if(!window.matchMedia) {
        //matchMedia method not supported
        return false;
      } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        theme = "dark";
      }

      //dark theme preferred, set document with a `data-theme` attribute
      if (theme=="dark") {
       document.documentElement.setAttribute("data-theme", "dark");
     }
   }