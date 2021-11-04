// eslint-disable-next-line no-undef
sap.ui.define([
    "sap/m/MessageToast",
    "./Formatter",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (MessageToast, Formatter, Controller,JSONModel) {
		"use strict";

		return Controller.extend("pagto.controller.ListaPagamento", {
			onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("pagto/mock/payments.json"));
			    this.getView().setModel(oModel);
            },
            onListItemPress: function (oEvent) {
			    MessageToast.show("Pressed : " + oEvent.getSource().getTitle());
		    }
		});
    });
    
// eslint-disable-next-line no-undef
