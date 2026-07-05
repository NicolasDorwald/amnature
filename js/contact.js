document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    const popup = document.getElementById("formPopup");
    const popupMessage = document.getElementById("popupMessage");
    const closePopup = document.getElementById("closePopup");

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.classList.add("show");
    }

    closePopup.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showPopup("🌿 Merci ! Votre message a bien été envoyé.");
                form.reset();
            } else {
                showPopup("Oups, une erreur est survenue.");
            }

        } catch (error) {
            showPopup("Erreur de connexion.");
        }
    });
});