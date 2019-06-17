


$(document).ready(function () {
    //data to be shown
    var graphData = [{
        // Visits
        data: [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ],
        color: '#71c73e'
    }, {
        // Returning Visits
        data: [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ],
        color: '#77b7c5',
        points: { radius: 4, fillColor: '#77b7c5' }
    },
    {
        // my data
        data: [ [6, 1000], [7, 300], [8, 50], [9, 1200], [10, 100], [11, 2000], [12, 0], [13, 1200], [14, 550], [15, 120] ],
        color: '#ff0000',
        points: { radius: 4, fillColor: '#000000' }
    }
    ];


    $.plot($('#myDiv'), graphData, {
        series: {
            points: {
                show: true,
                radius: 10
            },
            lines: {
                show: true
            },
            shadowSize: 5
        },
        grid: {
            color: '#646464',
            borderColor: '#000000',
            borderWidth: 5,
            hoverable: true
        },
        xaxis: {
            tickColor: '#000000',
            tickDecimals: 1
        },
        yaxis: {
            tickColor: '#000000',
            tickSize: 100
        }
    });

});