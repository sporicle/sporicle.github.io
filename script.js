$(document).ready(function() {
    $('#emailForm').submit(function(e) {
        e.preventDefault();
        var email = $('#emailInput').val();
        
        // Immediately hide the form
        $('#emailForm').addClass('hidden');
        
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxG0_X7qDrzgDj5HfjTlrNjosrM6gyJDD0eOHk-Sk18xjX8HFBpUr4EIWUytpFXdAI/exec',
            type: 'POST',
            data: {email: email},
            success: function(response) {
                // Show the success message
                $('#successMessage').removeClass('hidden');
                
                setTimeout(function() {
                    $('#successMessage').addClass('visible');
                }, 50);
            },
            error: function(error) {
                // If there's an error, show the form again
                $('#emailForm').removeClass('hidden');
                alert('An error occurred. Please try again.');
            }
        });
    });

    const carousel = $('#mascot-carousel');
    const images = carousel.find('.mascot-image');
    let currentIndex = 0;

    function rotateCarousel(direction = 1) {
        currentIndex = (currentIndex + direction + 3) % 3;
        updateCarousel();
    }

    function updateCarousel() {
        images.css('transition', 'all 0.5s ease');
        images.removeClass('center');
        
        images.each(function(index) {
            const offset = (index - currentIndex + 3) % 3;
            if (offset === 0) {
                $(this).css('transform', 'translateX(0) scale(1)').css('z-index', '2').addClass('center');
            } else if (offset === 1) {
                $(this).css('transform', 'translateX(70px) scale(0.9)').css('z-index', '1');
            } else {
                $(this).css('transform', 'translateX(-70px) scale(0.9)').css('z-index', '1');
            }
        });
    }

    let intervalId = setInterval(() => rotateCarousel(1), 3000);

    images.click(function() {
        const clickedIndex = images.index(this);
        const direction = (clickedIndex - currentIndex + 3) % 3 === 1 ? 1 : -1;
        clearInterval(intervalId);
        rotateCarousel(direction);
        intervalId = setInterval(() => rotateCarousel(1), 3000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const instagramLink = document.querySelector('.instagram-link');
    const webUrl = 'https://www.instagram.com/andyw_says';
    const appUrl = instagramLink.href;

    instagramLink.addEventListener('click', function(e) {
        if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            e.preventDefault();
            window.open(webUrl, '_blank');
        } else {
            // Attempt to open the app
            setTimeout(function() {
                window.location = webUrl;
            }, 2500);
        }
    });
});
