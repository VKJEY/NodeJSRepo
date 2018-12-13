(function() {
    sap.ui.getCore().loadLibrary("sap.bpm");

    //sap.ui.localResources("sap.bpm");

    jQuery.sap.require("sap.bpm.hello");
    console.log(sayHello());
}());