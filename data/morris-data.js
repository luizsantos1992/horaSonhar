$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010-01-01',
            Débito: 2300,
            Crédito: 2500,
            Dinheiro: 3000,
            'Peixe Urbano': 2100
        },{
            period: '2010-02-01',
            Débito: 2000,
            Crédito: 2700,
            Dinheiro: 2900,
            'Peixe Urbano': 2500
        },{
            period: '2010-03-01',
            Débito: 4000,
            Crédito: 6000,
            Dinheiro: 2500,
            'Peixe Urbano': 5000
        },{
            period: '2010-04-01',
            Débito: 10000,
            Crédito: 1000,
            Dinheiro: 500,
            'Peixe Urbano': 0
        },{
            period: '2011 Q1',
            Débito: 3500,
            Crédito: 8000,
            Dinheiro: 9500,
            'Peixe Urbano': 15000
        }],
        xkey: 'period',
        ykeys: ['Débito', 'Crédito', 'Dinheiro', 'Peixe Urbano'],
        labels: ['Débito', 'Crédito', 'Dinheiro', 'Peixe Urbano'],
        pointSize: 4,
        hideHover: 'auto',
        resize: true
    });

    // Morris.Donut({
    //     element: 'morris-donut-chart',
    //     data: [{
    //         label: "Download Sales",
    //         value: 12
    //     }, {
    //         label: "In-Store Sales",
    //         value: 30
    //     }, {
    //         label: "Mail-Order Sales",
    //         value: 20
    //     }],
    //     resize: true
    // });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
