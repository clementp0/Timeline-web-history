(function($) {
    $.fn.timeline = function() {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
            ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function() {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function(i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);
                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        selectors.item
                        .last()
                        .find(selectors.img)
                        .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 40 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(this)
                        .find(selectors.img)
                        .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);

$("#timeline-1").timeline();


window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function overlay() {
    document.getElementById('overlay').style.opacity = 1;
    document.getElementById('overlay').style.pointerEvents = 'auto';
}

function closepc(){
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('overlay').style.pointerEvents = 'none';
}

function closemobile(){
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('overlay').style.pointerEvents = 'none';
}

$(document).ready(function(){
    $("a").click(function(e) {
        e.preventDefault();

        $("#fiche").attr("src", $(this).attr("href"));
    })
});