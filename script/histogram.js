google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
/*var data = google.visualization.arrayToDataTable([
  ['Game', {label:'RTX 3080 Ti', color: '#2bff64'}, 'RTX 2080 Ti', 'GTX 1080 Ti'],
  ['Control (RTX ON)', 1000, 400, 200],
  ['Minecraft (RTX ON)', 1170, 460, 250],
  ['Borderlands 3', 660, 1120, 300]
]);*/
var data = new google.visualization.DataTable();    
data.addColumn('string', 'game');
data.addColumn('number', 'RTX 3080 Ti');
data.addColumn('number', 'RTX 2080 Ti');
data.addColumn('number', 'GTX 1080 Ti');
data.addRow(['Control (RTX ON)',100, 80, 10]);
data.addRow(['Minecraft (RTX ON)',130,76, 30]);
data.addRow(['Borderlands 3',130,90, 5]);



var options = {
	color: 'white',
	height: 300,
	
	colors: ['#09b004','#9e9e9e', '#d6d6d6'],
	chart: {
	},
	bars: 'horizontal', // Required for Material Bar Charts.
	chartArea: {
        backgroundColor: {
          fill: 'black',
          fillOpacity: 1
        },
	},
	titleTextStyle: { color: 'white' },
	legend: {
		textStyle: { color: 'white' }
	},
	backgroundColor: {
          fill: 'black',
          fillOpacity: 1
        },
};

var chart = new google.charts.Bar(document.getElementById('histogram'));

chart.draw(data, google.charts.Bar.convertOptions(options));
}