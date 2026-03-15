$(document).on("pagecreate", "#loginPage", function () {

    $("#loginForm").submit(function (event) {

        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        if (username == "" || password == "") {

            $("#popupWarning").popup("open");

        } else {

            $.mobile.changePage("#infoPage");

        }

    });

});