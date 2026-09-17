document.addEventListener("DOMContentLoaded", () => {
    let headerleftContent = document.getElementsByClassName("hi_contentLeft")[0]
    let timestamp = document.getElementById("timeStamp");
    let timeItself = new Date().getFullYear()
    timestamp.textContent = timeItself;
    let dynamicMessage = document.getElementsByClassName("dynamicMessage")[0]
    let progressBarDiv = document.getElementsByClassName("progressBar")[0]

    headerleftContent.addEventListener("click", () => {
        window.location.href = "index.html"
    })

    let headerRightContent = document.getElementsByClassName("hi_contentRight")

    for(let i = 0; i < headerRightContent.length; i++){
        if(i == 0){
            headerRightContent[i].addEventListener("click", () => {
                window.location.href = "projects.html"
            })
        }else if(i == 1){
             headerRightContent[i].addEventListener("click", () => {
                window.location.href = "skills.html"
            })
        }else{
            headerRightContent[i].addEventListener("click", () => {
                dynamicMessage.classList.add("opened");

            setTimeout(() => {
                dynamicMessage.classList.add("waving");
                progressBarDiv.style.width = "0%"
                setTimeout(() => {
                    dynamicMessage.classList.remove("waving");
                    setTimeout(() => {
                        dynamicMessage.classList.remove("opened");
                        setTimeout(() => {
                            progressBarDiv.style.width = "100%"
                        }, 500);
                    }, 100);
                }, 3000);

            }, 500);
            })
        }
    }
})
