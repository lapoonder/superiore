document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.footer-form');
    const commentInput = document.querySelector('#comment');
    const emailInput = document.querySelector('#email');
    const popup = document.querySelector('.pop-up');
    const popupCloseButton = document.querySelector('.pop-up-close-btn');

    const apiURL = 'https://portfolio-js.b.goit.study/api';

    form.addEventListener('submit', async event => {
        event.preventDefault();

        const comment = commentInput.value.trim();
        const email = emailInput.value.trim();
        const formData = {
            email,
            comment,
        };

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                popup.classList.add('is-open');

                form.reset();
            } else {
                const errorData = await response.json();

                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    });

    popupCloseButton.addEventListener('click', () => {
        popup.classList.remove('is-open');
    });
});
