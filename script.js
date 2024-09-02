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
});
