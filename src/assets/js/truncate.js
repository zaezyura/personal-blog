function truncate(str, maxlength) {
  return (str.length > maxlength) ? 
    str.slice(0, maxlength - 1) + "…" : str;
}


let title = document.querySelectorAll('h4.related-list-title a');

title.forEach(element => {
   let titleText = element.innerHTML; 
   
   titleText = truncate(titleText, 60);
   element.innerHTML = titleText;
});
