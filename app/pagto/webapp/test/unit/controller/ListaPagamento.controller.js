/*global QUnit*/

sap.ui.define([
	"pagto/controller/ListaPagamento.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListaPagamento Controller");

	QUnit.test("I should test the ListaPagamento controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
