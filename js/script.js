function stepForm() {
    const steps = document.querySelectorAll(".form_step")
    const prevBtn = document.querySelector(".btn_prev")
    const nextBtn = document.querySelector(".btn_next")
    const form = document.querySelector(".steps_form")
    const stepNumbers = document.querySelectorAll(".step_number")
    const progress = document.querySelector(".progress_success")
    const finishBlock = document.querySelector(".finish")

    form.addEventListener('submit', (e) => e.preventDefault())

    let formStepIndex = 0;

    prevBtn.addEventListener("click", () => {
        formStepIndex--

        stepNumbers[formStepIndex + 1].classList.remove("active_number")

        updateFormSteps()
    })

    nextBtn.addEventListener("click", () => {
        if(formStepIndex < steps.length - 1) {
            formStepIndex++
            updateFormSteps()
        }
    })

    function updateFormSteps() {
        steps.forEach((step) => {
            step.classList.contains("active") && step.classList.remove("active");
        })

        steps[formStepIndex].classList.add("active")
        stepNumbers[formStepIndex].classList.add("active_number")

        if(formStepIndex===0) {
            prevBtn.style.display = "none"
        }
        else {
            prevBtn.style.display = "block"
        }

        if(formStepIndex===steps.length - 1) {
            nextBtn.innerHTML = "Finish"

            nextBtn.addEventListener("click", () => {
                finishBlock.style.display = "block"
                form.style.display = "none"
            })
        }
        else {
            nextBtn.innerHTML = "Next"
        }

        const actives = document.querySelectorAll(".active_number")
        const percent = ((actives.length - 1) / (stepNumbers.length - 1)) * 100 + "%"

        progress.style.width = percent
    }

    updateFormSteps();
}

if(document.querySelector(".form_step")) {
    stepForm()
}