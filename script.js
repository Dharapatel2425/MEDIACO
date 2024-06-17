$(document).ready(function() {
    $('.nav-link a').on('click', function(event) {
        event.preventDefault();
        const targetId = $(this).attr('href').substring(1);
        const targetElement = $('#' + targetId);

        $('html, body').animate({
            scrollTop: targetElement.offset().top
        }, 800); // Adjust the duration as needed
    });



    // $('#submit_btn').on('click', function(event) {
    //     event.preventDefault();
    //     console.log('in');
    //     var formData = $('#Quoteform').serialize();
    //     console.log(formData);
    //     $.ajax({
    //         type: 'POST',
    //         url: 'index.php',
    //         data: formData,
    //         success: function(response) {
    //             console.log(response);
    //             $('#response').html(response);
    //         },
    //         error: function() {
    //             $('#response').html('An error occurred.');
    //         }
    //     });
    // });
});

