sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "./Formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    'sap/m/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast, JSONModel, Formatter, Filter, FilterOperator, mobileLibrary) {
        "use strict";
        
        const PopinLayout = mobileLibrary.PopinLayout;

        return Controller.extend("com.lab2dev.firstapplication.controller.Home", {
            onInit: async function () {
                /*const productsList = [
                    
                    
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
                ] */
                
                const oData = new JSONModel();
                await oData.loadData('/json/Products.json')

                this.getView().setModel(oData, "productsList");
            },
            showMessageToast(oEvent){
                const item = oEvent.getSource();

                const itemTitle = item.getTitle();
                // const itemCount = item.getCounter();

                const message = `O item: ${itemTitle} foi clicado`

                MessageToast.show(message)

            },
            onSearch(oEvent){
                const sQuery = oEvent.getSource().getValue();

                const aFilters = [];
                if(sQuery && sQuery.length > 0){
                    const filter = new Filter("Name", FilterOperator.Contains, sQuery)
                    aFilters.push(filter)
                } 

                const oList = this.byId("idProductsTable")
                const oBinding = oList.getBinding("items")
                oBinding.filter(aFilters)    
            },
            onPopinLayoutChanged: function() {
                var oTable = this.byId("idProductsTable");
                var oComboBox = this.byId("idPopinLayout");
                var sPopinLayout = oComboBox.getSelectedKey();
                switch (sPopinLayout) {
                    case "Block":
                        oTable.setPopinLayout(PopinLayout.Block);
                        break;
                    case "GridLarge":
                        oTable.setPopinLayout(PopinLayout.GridLarge);
                        break;
                    case "GridSmall":
                        oTable.setPopinLayout(PopinLayout.GridSmall);
                        break;
                    default:
                        oTable.setPopinLayout(PopinLayout.Block);
                        break;
                }
            },
    
            onSelect: function(oEvent) {
                const bSelected = oEvent.getParameter("selected"),
                    sText = oEvent.getSource().getText(),
                    oTable = this.byId("idProductsTable"),
                    aSticky = oTable.getSticky() || [];
    
                if (bSelected) {
                    aSticky.push(sText);
                } else if (aSticky.length) {
                    const iElementIndex = aSticky.indexOf(sText);
                    aSticky.splice(iElementIndex, 1);
                }
    
                oTable.setSticky(aSticky);
            },
    
            onToggleInfoToolbar: function(oEvent) {
                const oTable = this.byId("idProductsTable");
                oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
            }

        });
    });
