myApp.factory('NavigationService', function () {
    var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        }, {
            name: "About us",
            classis: "active",
            anchor: "About us",
            subnav: []
        },
        {
            name: "Services",
            classis: "active",
            anchor: "Services",
            subnav: []
        },
         {
            name: "Work Process",
            classis: "active",
            anchor: "Work Process",
            subnav: []
        },
         {
            name: "Current Openings",
            classis: "active",
            anchor: "apply",
            subnav: []
        },
         {
            name: "Clients",
            classis: "active",
            anchor: "Clients",
            subnav: []
        },
        
        {
            name: "Get in Touch",
            classis: "active",
            anchor: "getintouch",
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});