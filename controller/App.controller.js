sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("portfolio.controller.App", {
        onInit: function () {
            // Initialize controller
            console.log("Portfolio app initialized");
        },

        onDownloadResume: function () {
            MessageToast.show("Resume download functionality will be implemented here");
        },

        onContact: function () {
            MessageToast.show("Contact form will be opened here");
        },

        onProjectPress: function (oEvent) {
            var oBindingContext = oEvent.getSource().getBindingContext("portfolio");
            var sGithubUrl = oBindingContext.getProperty("github");
            if (sGithubUrl && sGithubUrl !== "#") {
                window.open(sGithubUrl, "_blank");
            } else {
                MessageToast.show("GitHub link not available for this project");
            }
        }
    });
});