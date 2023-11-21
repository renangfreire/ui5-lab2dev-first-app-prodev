sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "./Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast, JSONModel, Formatter) {
        "use strict";


        return Controller.extend("com.lab2dev.firstapplication.controller.Home", {
            onInit: function () {
                const productsList = [
                    {
                        "ProductId": "HT-1000",
                        "Category": "Laptops",
                        "MainCategory": "Computer Systems",
                        "TaxTarifCode": "1",
                        "SupplierName": "Very Best Screens",
                        "WeightMeasure": 4.2,
                        "WeightUnit": "KG",
                        "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                        "Name": "Notebook Basic 15",
                        "DateOfSale": "2017-03-26",
                        "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
                        "Status": "Out of Stock",
                        "Quantity": 10,
                        "UoM": "PC",
                        "CurrencyCode": "EUR",
                        "Price": 956,
                        "Width": 30,
                        "Depth": 18,
                        "Height": 3,
                        "DimUnit": "cm"
                    },
                    {
                        "ProductId": "HT-1001",
                        "Category": "Laptops",
                        "MainCategory": "Computer Systems",
                        "TaxTarifCode": "1",
                        "SupplierName": "Very Best Screens",
                        "WeightMeasure": 4.5,
                        "WeightUnit": "KG",
                        "Description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
                        "Name": "Notebook Basic 17",
                        "DateOfSale": "2017-04-17",
                        "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
                        "Status": "Discontinued",
                        "Quantity": 20,
                        "UoM": "PC",
                        "CurrencyCode": "EUR",
                        "Price": 1249,
                        "Width": 29,
                        "Depth": 17,
                        "Height": 3.1,
                        "DimUnit": "cm"
                    },
                    {
                        "ProductId": "HT-1002",
                        "Category": "Laptops",
                        "MainCategory": "Computer Systems",
                        "TaxTarifCode": "1",
                        "SupplierName": "Very Best Screens",
                        "WeightMeasure": 4.2,
                        "WeightUnit": "KG",
                        "Description": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
                        "Name": "Notebook Basic 18",
                        "DateOfSale": "2017-01-07",
                        "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg",
                        "Status": "Available",
                        "Quantity": 10,
                        "UoM": "PC",
                        "CurrencyCode": "EUR",
                        "Price": 1570,
                        "Width": 28,
                        "Depth": 19,
                        "Height": 2.5,
                        "DimUnit": "cm"
                    },
                    {
                        "ProductId": "HT-1003",
                        "Category": "Laptops",
                        "MainCategory": "Computer Systems",
                        "TaxTarifCode": "1",
                        "SupplierName": "Smartcards",
                        "WeightMeasure": 4.2,
                        "WeightUnit": "KG",
                        "Description": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
                        "Name": "Notebook Basic 19",
                        "DateOfSale": "2017-04-09",
                        "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg",
                        "Status": "Available",
                        "Quantity": 15,
                        "UoM": "PC",
                        "CurrencyCode": "EUR",
                        "Price": 1650,
                        "Width": 32,
                        "Depth": 21,
                        "Height": 4,
                        "DimUnit": "cm"
                    },
                    {
                        "ProductId": "HT-1007",
                        "Category": "Accessories",
                        "MainCategory": "Computer Components",
                        "TaxTarifCode": "1",
                        "SupplierName": "Technocom",
                        "WeightMeasure": 0.2,
                        "WeightUnit": "KG",
                        "Description": "Digital Organizer with State-of-the-Art Storage Encryption",
                        "Name": "ITelO Vault",
                        "DateOfSale": "2017-05-17",
                        "ProductPicUrl": "test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
                        "Status": "Available",
                        "Quantity": 15,
                        "UoM": "PC",
                        "CurrencyCode": "EUR",
                        "Price": 299,
                        "Width": 32,
                        "Depth": 22,
                        "Height": 3,
                        "DimUnit": "cm"
                    }
                ]
                const oModel = new JSONModel(productsList);

                this.getView().setModel(oModel, "productsList");
            },
            showMessageToast(oEvent){
                const item = oEvent.getSource();

                const itemTitle = item.getTitle();
                const itemCount = item.getCounter();

                const message = `O item: ${itemTitle} foi clicado 
                ${itemCount ? `e possui um total de ${itemCount} ${itemCount == 1 ? 'produto' : 'produtos'}` : "Não possui produtos"}`

                MessageToast.show(message)

            },

        });
    });
