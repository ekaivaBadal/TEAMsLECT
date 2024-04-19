function toOtherPages(){
const btn =  document.querySelectorAll("#pageButtons button");

btn.forEach((b ,i) => {
    b.addEventListener("click",function (e) {
        if (i === 0) {
            window.location.href = "./HTML/makeTeams.html"
        }else if (i=== 1) {
            window.location.href = "./HTML/makeTeams.html"
            
        }else if (i=== 2) {
            window.location.href = "./HTML/makeTeams.html"
            
        }else if (i=== 3) {
            window.location.href = "./HTML/makeTeams.html"
            
        }
    })
})
}

toOtherPages()    