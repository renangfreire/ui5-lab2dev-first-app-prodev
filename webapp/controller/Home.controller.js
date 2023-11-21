sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapplication.controller.Home", {
            onInit: function () {
                const listItems = [
                    {
                        name: "Laranja",
                        count: 10,
                    },
                    {
                        name: "Morango",
                        count: 20,
                    },
                    {
                        name: "Uva",
                        count: 30,
                    },
                    {
                        name: "Abacaxi",
                        count: 32,
                    },
                    {
                        name: "Maçã",
                        count: 1,
                    },
                    {
                        name: "Melão",
                        count: 0,
                    }
                ]
                const oModel = new JSONModel(listItems);

                this.getView().setModel(oModel, "listItems");
            },
            showMessageToast(oEvent){
                const item = oEvent.getSource();

                const itemTitle = item.getTitle();
                const itemCount = item.getCounter();

                const message = `O item: ${itemTitle} foi clicado 
                ${itemCount ? `e possui um total de ${itemCount} ${itemCount == 1 ? 'produto' : 'produtos'}` : "Não possui produtos"}`

                MessageToast.show(message)

            }
        });
    });
