var adminurl = "http://wohlig.io/api/";
myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "wohlig_home_page",
            subnav: []
        }, {
            name: "About Us",
            classis: "active",
            anchor: "about_us",
            subnav: []
        },
        {
            name: "Services",
            classis: "active",
            anchor: "services",
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
            anchor: "client_page",
            subnav: []
        },

        {
            name: "Get In Touch",
            classis: "active",
            anchor: "getintouch",
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },




        saveUser: function (formData, callback) {
            $http({
                url: adminurl + 'Candidate/saveMailData',
                method: 'POST',
                data: formData
            }).then(callback);
        },
 

          submitApply: function (formData, callback) {
            $http({
                url: adminurl + 'Apply/saveMailData',
                method: 'POST',
                data: formData
            }).then(callback);
        },


        apiCall: function (url, input, callback) {
            $http({
                url: adminUrl + url,
                method: 'POST',
                withCredentials: true,
                data: input
            }).then(callback);
        },
    };
});