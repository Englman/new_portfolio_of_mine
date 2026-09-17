document.addEventListener("DOMContentLoaded", () => {

    function animationImageLaunch(){
        setTimeout(() => {
            setTimeout(() => {
            progressImage.style.width = "30px";
            setTimeout(() => {
                progressImage.style.width = "10px"
                setTimeout(() => {
                    progressImage.style.width = "150px"
                    progressImage.style.removeProperty("--shaking-hands", "shakingHands 0.1s linear infinite")
                    setTimeout(() => {
                        progressImage.style.removeProperty('--scale-all', '1');
                    }, 1000);
                }, 500);
            }, 2000);
        }, 1000);
        }, 600);
    }

    let headerleftContent = document.getElementsByClassName("hi_contentLeft")[0]
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

    let timestamp = document.getElementById("timeStamp");
    let timeItself = new Date().getFullYear()
    timestamp.textContent = timeItself;

    let progressImage = document.getElementsByClassName("mbrbtp_image")[0];
        progressImage.style.backgroundImage = "url('imgs/photo_5249390393491661631_y.jpg')";

    let secondImage = false;

    setTimeout(() => {
        progressImage.style.setProperty('--scale-all', '1'); // Important!!! // Вот тут ребята after и before уже вкурсе про переменную, так как я им задавал ее. И увидев изменения, они применяют их.!!!
        setTimeout(() => {
            progressImage.style.setProperty("--shaking-hands", "shakingHands 0.1s linear infinite")
        }, 600);
    }, 100);

    animationImageLaunch();

    progressImage.addEventListener("mouseenter", () => {
        if(!secondImage){
            progressImage.style.backgroundImage = "url('imgs/photo_5249390393491661631_y.jpg')";
            secondImage = !secondImage;
        }else{
            progressImage.style.backgroundImage = "url('imgs/photo_5278408528278266453_y.jpg')";
            secondImage = !secondImage;
        }
    })
})

