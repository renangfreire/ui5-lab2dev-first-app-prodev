sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapplication.controller.Home", {
            onInit: function () {

            },
            onHelloButtonPress: function (test){
                console.log("Hello");
                console.log(test)
            }
        });
    });
