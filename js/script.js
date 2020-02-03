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
    document.getElementById('noscroll').style.overflow = 'hidden';
}

function closepc(){
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('overlay').style.pointerEvents = 'none';
    document.getElementById('noscroll').style.overflow = 'auto';
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



/*####################### LEDs ####################################### */

$(document).ready(function () {
    $(".item").click(function () {
        $(".led", this).toggleClass("red");
    })
});

/*####################### Filter Buttons ####################################### */

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


/*####################### Filter Suche ####################################### */

function searchFunction() {
    // Declare variables
    var input, filter, list, i;
    input = document.getElementById('searchinput');
    filter = input.value.toUpperCase();
    list = document.getElementsByTagName('p');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < list.length; i++) {
        if (list[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            list[i].parentElement.parentElement.style.display = "";
        } else {
            list[i].parentElement.parentElement.style.display = "none";
        }
    }
}