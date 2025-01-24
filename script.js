const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");


optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        const target = e.target.tagName === "IMG" ? e.target : e.target.closest("img");

        if (target) {
            userResult.src = cpuResult.src ="images/rock.png";
            target.classList.add("active");

            optionImages.forEach((image2, index2) => {
                index !== index2 && image2.classList.remove("active");
            });

            gameContainer.classList.add("start")

            let time = setTimeout(() => {
                gameContainer.classList.remove("start")
                userResult.src = target.src;

                let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];
    
            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];
    
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "Cpu",
                PS: "User",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            }
    
            let outComeValue = outcomes[userValue + cpuValue];
    
            result.textContent = userValue === cpuValue ? "Math Draw" : `${outComeValue} Won!!`;
            }, 2500)
        }
    });
});
