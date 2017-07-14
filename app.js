(function() {
    var app = angular.module("MobileStore", []);
    var samsungs8plus = {
        name: "samsung galaxy S8 plus",
        color: "Black",
        memory: "6GB RAM, 128GB Internal Memory",
        price: 65000,
        image: "images/samsung-galaxy-s8-plus-orchid-grey-vorne-und-hinten%20(1).png",
        isSoldOut: true,
        activeTab:"Description",
    };
    var iphone = {
        name: "iphone 7",
        color: "Black",
        memory: "3GB RAM, 128GB Internal Memory",
        price: 45000,
        image: "images/IPhone-PNG-Picture.png",
        isSoldOut: true,
        activeTab:"Description",
    };
    app.controller("StoreController", function () {
        this.mobiles = [iphone, samsungs8plus];
        this.ActiveTab="Description";
        this.setActiveTab = function (mobile,Tab) {
            mobile.ActiveTab = Tab;
        }
    });
})();