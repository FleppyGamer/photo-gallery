$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on("submit", function (e) {
        e.preventDefault();
        newImage();
    })

    function newImage(){
        const newImgAddress = $('#new-image').val();
        const description = $('#description-new-image').val();

        const itemCreator = $('<li style="display: none"></li>');

        $(`<img src="${newImgAddress}" alt="${description}">`).appendTo(itemCreator);
        $(`<div class="overlay-image-link">
                <a href="${newImgAddress}" title="See this image in real size" target="_blank">See this image in real size</a>
            </div>`).appendTo(itemCreator);

        $(itemCreator).appendTo('ul');
        $(itemCreator).fadeIn(1000)

        $('#new-image').val('');
        $('#description-new-image').val('');
    }
})
