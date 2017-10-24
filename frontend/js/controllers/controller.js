myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };



    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;

        //content of about us arrow
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('AboutUsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/about_us.html");
        TemplateService.title = "About Us";
        $scope.navigation = NavigationService.getNavigation();

        $scope.testslide = [{
                name: "Lorem Ipsum",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }, {
                name: "Lorem Phirse",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }, {
                name: "Lorem Phirse",
                desc: "438584787867676767 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Lorem Phirse",
                desc: "6764576665476em Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }


        ];
    })





    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    .controller('servicesCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/services.html");
        TemplateService.title = "Services"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })



    .controller('GetInTouchCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/getintouch.html");
        TemplateService.title = "Get In Touch"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        // Submit data function
        $scope.submitUser = function (userData, formData) {
            console.log("hiii")
            console.log(userData)
            if (userData) {
                if (formData.$valid == true) {
                    NavigationService.saveUser(userData, function (data) {
                        if (data.data.value) {
                            console.log("Data Save")
                        }
                        console.log(data)
                    });
                }
            }
        }
    })

    .controller('ServicesCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/services.html");
        TemplateService.title = "Services"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();


        //business page content
        $scope.allRecord = {
            id: 2,
            heading: "Business Intelligence",

            activeTab: false,

            records: [{
                    "img": "img/2.jpg",
                    "Title": "",
                    "Description": ""
                }, {
                    "img": "img/3.jpg",
                    "Title": "Customer Analytics",
                    "Description": "Wohlig Transformations helped a bank to extensively cross sell its new products into all existing customers by leveraging customer analytics backed by Qlik. We have extracted information from all the existing data silos, identified a comprehensive list of KPIs and created a cross sell / up sell modelling based on customer segmentation. Customer-Analytics-Exponentia-DataLabs"
                },
                {
                    "img": "img/3rd_img.jpg",
                    "Title": "Text Analytics",
                    "Description": "A large retailer in UK had millions of unstructured records of customer feedback data.Wohlig Transformations developed a text analytics engine and helped the client to visualize report directly from the text analytics engine. We analysed the data fed into Qlik and have done KPI Analysis in Qlik to deliver actionable and meaningful insights. Text-Analytics-Exponentia-DataLabs"
                },
                {
                    "img": "img/4th_img.jpg",
                    "Title": "Predictive Analytics",
                    "Description": "Wohlig Transformations helped this ecommerce company to increase the lead conversion rates even with the limited ground staff and an intense competitive landscape. We used all proprietary analytics models to customize the propensity to purchase model and integrated this with the Qlik dashboards. This helped the sales team to target customer who displayed the high probability rate to purchase. Predictive-Analytics-Exponentia-DataLabs-e1464762980172"
                },
                {
                    "img": "img/6th.jpg",
                    "Title": "Business Turnaround Analysis",
                    "Description": "Wohlig Transformations helped a large hospital to turnaround its business whose revenues and patient footfall were dropping rapidly. We identified the root cause of the problem based on the single window view BI dashboard built on Qlik. The scenario analysis helped us to identify the most significant drivers and address them for quick business turnaround."
                },


            ]
        }



        $scope.International = true;
        $scope.business = false;
        $scope.analytics = false;
        $scope.Enterprise = false;
        $scope.Testing = false;
        $scope.Application = false;
        $scope.Cloud = false;
        $scope.Technology = false;
        $scope.ITI = false;


        $scope.one = function () {
            console.log("hiii")
            $scope.International = true;
            $scope.business = false;
            $scope.analytics = false;
            $scope.Enterprise = false;
            $scope.Testing = false;
            $scope.Application = false;
            $scope.Cloud = false;
            $scope.Technology = false;
            $scope.ITI = false;

        }


        $scope.two = function () {
            console.log("hello")
            $scope.International = false;
            $scope.business = true;
            $scope.analytics = false;
            $scope.Enterprise = false;
            $scope.Testing = false;
            $scope.Application = false;
            $scope.Cloud = false;
            $scope.Technology = false;
            $scope.ITI = false;


        }


        $scope.three = function () {
            console.log("ccvfo")
            $scope.International = false;
            $scope.business = false;
            $scope.analytics = true;
            $scope.Enterprise = false;
            $scope.Testing = false;
            $scope.Application = false;
            $scope.Cloud = false;
            $scope.Technology = false;
            $scope.ITI = false;


        }
        $scope.four = function () {
            console.log("hello4")
            $scope.International = false;
            $scope.business = false;
            $scope.analytics = false;
            $scope.Enterprise = true;
            $scope.Testing = false;
            $scope.Application = false;
            $scope.Cloud = false;
            $scope.Technology = false;
            $scope.ITI = false;


        }
        $scope.five = function () {
            console.log("hello5")
            $scope.International = false;
            $scope.business = false;
            $scope.analytics = false;
            $scope.Enterprise = false;
            $scope.Testing = true;
            $scope.Application = false;
            $scope.Cloud = false;
            $scope.Technology = false;
            $scope.ITI = false;
        }

        $scope.six = function () {
            console.log("hello6")
            $scope.International = false;
            $scope.business = false;
            $scope.analytics = false;
            $scope.Enterprise = false;
            $scope.Testing = false;
            $scope.Application = true;
            $scope.Cloud = false;
            $scope.Technology = false;
            $scope.ITI = false;
        }
        $scope.seven = function () {
            console.log("hello6")
            $scope.International = false;
            $scope.business = false;
            $scope.analytics = false;
            $scope.Enterprise = false;
            $scope.Testing = false;
            $scope.Application = false;
            $scope.Cloud = true;
            $scope.Technology = false;
            $scope.ITI = false;
        }

        $scope.eight = function () {
            console.log("hello7")
            $scope.International = false;
            $scope.business = false;
            $scope.analytics = false;
            $scope.Enterprise = false;
            $scope.Testing = false;
            $scope.Application = false;
            $scope.Cloud = false;
            $scope.Technology = true;
            $scope.ITI = false;
        }

        $scope.nine = function () {
            console.log("hello8")
            $scope.International = false;
            $scope.business = false;
            $scope.analytics = false;
            $scope.Enterprise = false;
            $scope.Testing = false;
            $scope.Application = false;
            $scope.Cloud = false;
            $scope.Technology = false;
            $scope.ITI = true;
        }

    })


    .controller('Terms_conditionCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/Terms_condition.html");
        TemplateService.title = "Terms_condition"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })


    .controller('PrivacyPolicyCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/privacy_policy.html");
        TemplateService.title = "privacy_policy"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    .controller('WohligHomePageCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/wohlig_home_page.html");
        TemplateService.title = "Welcome to wohlig Transformation"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        //images of clients in home page
        $scope.clients = [
            "img/c/TUI_Logo_tilewhite.png",
            "img/c/coachmentor.png",
            "img/c/6.png",
            "img/c/11.png",
            "img/c/10.png",
            "img/c/d.png",
            "img/c/8.png",
            "img/c/e.png",
            "img/c/1.png",
            "img/c/icon (1).png",
            "img/c/ting.png",
            "img/c/phele-kadam.png",
        ];


    })

    .controller('ClientPageCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/client_page.html");
        TemplateService.title = "Client Page"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        //images of clients in client page

        $scope.clients = [
            "img/70 tui.png",
            "img/c/coachmentor.png",
            "img/c/6.png",
            "img/c/11.png",
            "img/c/10.png",
            "img/c/d.png",
            "img/c/8.png",
            "img/c/e.png",
            "img/c/1.png",
            "img/c/icon (1).png",
            "img/c/ting.png",
            "img/c/phele-kadam.png",
            "img/c/gsource.png",
            "img/c/s.png",
            "img/c/alpha.png",
            "img/c/q.png",
            "img/c/clickmania.png",
            "img/c/EURO-FLOOR-LOGO.png",
            "img/c/euro-pratik.png",
            "img/c/gs-entertainment.png",
            "img/c/icon (2).png",
            "img/c/7.png",
            "img/procreatelogo.png",
            "img/c/rd-engineering.png",
            "img/c/ngu.png",
            "img/c/tmm.png",
            "img/c/unifly LOGO.png",
            "img/c/a.png",
            "img/c/az_logo.png",
            "img/c/Screen Shot 2017-01-19 at 5.28.43 PM copy.png",
            "img/c/91streets-01.png",
            "img/c/9.png",
            "img/c/12.png",
            "img/c/4.png",
            "img/c/2.png",
            "img/c/h.png",
            "img/c/n.png",
            "img/c/Anima creatives.png",
            "img/c/m.png",
            "img/c/r.png",
            "img/c/o.png",


        ];
    })


    .controller('Applyctrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/apply.html");
        TemplateService.title = "Apply"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.oneAtATime = true;
        $scope.tabActive = 1;



        //apply button
        $scope.submitOnApply = function (userData, formData) {
            console.log("hiii")
            console.log(userData)
            if (userData) {
                if (formData.$valid == true) {
                    NavigationService.submitApply(userData, function (data) {
                        if (data.data.value) {
                            console.log("apply")
                        }
                        console.log(data)
                    });
                }
            }
        }


        $scope.applyUser = function (data) {
            console.log(data);
            window.scrollTo(0, 325);
            $scope.tabActive = data;
            console.log($scope.tabActive);
        }
        console.log($scope.tabActive);




    })

    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid12.html");
        TemplateService.title = "grid12"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.oneAtATime = true;

    })





    // Example API Controller
    .controller('DemoAPICtrrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });