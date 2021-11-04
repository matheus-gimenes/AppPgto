/* eslint-disable no-mixed-spaces-and-tabs */

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
                // eslint-disable-next-line no-undef
                var oModel = new JSONModel(sap.ui.require.toUrl("pagto/mock/payments.json"));
			    // eslint-disable-next-line no-mixed-spaces-and-tabs
			    this.getView().setModel(oModel);
            },
            onListItemPress: function (oEvent) {
                
                MessageToast.show("Pagamento Enviado : " + oEvent.getSource().getTitle() + oEvent.getSource().getTitle());
		    }
		});
    });
    
// eslint-disable-next-line no-undef
