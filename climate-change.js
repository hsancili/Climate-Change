// Our labels along the x-axis
let years = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
// For drawing the lines
let UnsafeDays = [2076,2155,2084,1789,1398,1989,1722,1796,1193,786,1112,1251,1296,677,598,706,702,721,799];

let northAmerica = [75,100,110,112,85,180,183,230,430,380,530,230,250,355,210,420,512,610,570];


let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: years,
    datasets: [
      { 
        type: 'line',
        data: UnsafeDays,
        label: "Number of Days Reaching Unsafe for Sensitive Groups Level or Above on Air Quality Index",
        borderColor: "#8f031a",
        //backgroundColor: "#ecb1f0",
        yAxisID: 'UnsafeDays',
        fill: false
       
      },
      { 
        data: northAmerica,
        label: "Number of Articles about climate change from major news sources",
        //FontFamily: 'Georgia';
        //borderColor: "#ecb1f0",
        yAxisID: 'northAmerica',
        backgroundColor: "#020475",
        fill: true
      }
    ]
},
options: {
        scales: {
            yAxes: [
                {
                    id: "UnsafeDays",
                    ticks: {
                        beginAtZero: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Unsafe Air Quality Days'
                      }
                },
                {
                    id: "northAmerica",
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                      //  max:1000
                       //min:0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '# of Articles'
                      }
                },
            ]
        },
    }
});
