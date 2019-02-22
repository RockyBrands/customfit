// Need the event listener otherwise script runs before DOM fully loads
window.addEventListener('load', function () {
    new Vue({
        el: '#app',
        data: {
            currentFilter: 'All',
            companies: [
                {title: "Schneider", image: "https://github.com/RockyBrands/customfit/blob/master/img/schneider_LogoSlim.jpg?raw=true", category: 'Schneider', review:'Employees can choose from hundreds of options that are within their budget requirements. Our shop operates 24 hours a day, 7 days a week, so the service provides an equal opportunity for all employees to purchase shoes according to their schedule. It improves productivity on the shop floor.'},
                {title: "PepsiCo", image: "https://github.com/RockyBrands/customfit/blob/master/img/pepsico_LogoSlim.jpg?raw=true", category: 'PepsiCo',review:'The kiosk has been extremely user-friendly. The support personnel from Lehigh have been very helpful and are very accessible. There have been some bumps on the road (we put safety shoes on 300+ people) but Lehigh has been responsive to all issues that we have faced.'},
                {title: "AK Steel", image: "https://github.com/RockyBrands/customfit/blob/master/img/aksteel_logo.jpg?raw=true", category: 'AKSteel',review:'Just a note to say that our online boot process with Lehigh is working very well. And any time I have a question about an order or how to make the system run smoother, Tara is extremely helpful and responds to me quickly.'}
            ]
        },
        methods: {
            setFilter: function(filter) {
                this.currentFilter = filter;
            }
        }
    })
})