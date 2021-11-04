sap.ui.define(function() {
	"use strict";

	var Formatter = {

		status :  function (sStatus) {
				if (sStatus === "Pago") {
					return "Success";
				} else if (sStatus === "Pendente") {
					return "Warning";
				} else if (sStatus === "Com Erro"){
					return "Error";
				} else {
					return "None";
				}
		}
	};

	return Formatter;

},  /* bExport= */ true);
