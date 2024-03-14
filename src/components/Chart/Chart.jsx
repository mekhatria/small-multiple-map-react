import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highmaps";
import irelandMap from "@highcharts/map-collection/countries/ie/ie-all.topo.json";
import "./Chart.css";

const baseOptions = {
  chart: {
    map: irelandMap,
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom",
    },
  },
  colorAxis: {
    min: 26, // Set the minimum value of the color axis
    max: 1458, // Set the maximum value of the color axis
    stops: [
      [0.0, "#FFFFCC"], // Light yellow
      [0.05, "#FFEDA0"], // Yellow
      [0.1, "#FED976"], // Dark yellow / light orange
      [0.15, "#FEB24C"], // Orange
      [0.2, "#FD8D3C"], // Dark orange
      [0.9, "#FC4E2A"], // Red-orange
      [1.0, "#E31A1C"], // Deep red
    ],
  },

  tooltip: {
    formatter: function () {
      return (
        "<b>Province</b>: " +
        this.point.name +
        "<br>" +
        "<b>Year</b>: " +
        this.series.chart.title.textStr +
        "<br>" +
        "<b>Population</b>: " +
        (this.point.value * 1000).toLocaleString()
      );
    },
  },

  series: [
    {
      name: "Random data",
      states: {
        hover: {
          color: "#BADA55",
        },
      },
      dataLabels: {
        enabled: false,
        format: "{point.name}",
      },
    },
  ],
};

const arrMaps = [
  {
    title: {
      text: "1961",
    },
    data: [
      ["ie-cw", 33],
      ["ie-cn", 57],
      ["ie-ce", 74],
      ["ie-491", 330],
      ["ie-dl", 114],
      ["ie-dn", 718],
      ["ie-7034", 718],
      ["ie-1528", 718],
      ["ie-7035", 718],
      ["ie-1510", 149],
      ["ie-ky", 116],
      ["ie-ke", 64],
      ["ie-kk", 61],
      ["ie-ls", 45],
      ["ie-lm", 33],
      ["ie-1533", 133],
      ["ie-ld", 31],
      ["ie-lh", 67],
      ["ie-mo", 123],
      ["ie-mh", 65],
      ["ie-mn", 47],
      ["ie-oy", 52],
      ["ie-rn", 59],
      ["ie-so", 54],
      ["ie-ty", 123],
      ["ie-7033", 123],
      ["ie-2363", 74],
      ["ie-wh", 52],
      ["ie-wx", 83],
      ["ie-ww", 58],
    ],
  },
  {
    title: {
      text: "1981",
    },
    data: [
      ["ie-cw", 40],
      ["ie-cn", 54],
      ["ie-ce", 88],
      ["ie-491", 402],
      ["ie-dl", 125],
      ["ie-dn", 1003],
      ["ie-7034", 1003],
      ["ie-1528", 1003],
      ["ie-7035", 1003],
      ["ie-1510", 172],
      ["ie-ky", 122],
      ["ie-ke", 104],
      ["ie-kk", 70],
      ["ie-ls", 51],
      ["ie-lm", 28],
      ["ie-1533", 161],
      ["ie-ld", 31],
      ["ie-lh", 89],
      ["ie-mo", 114],
      ["ie-mh", 95],
      ["ie-mn", 51],
      ["ie-oy", 58],
      ["ie-rn", 55],
      ["ie-so", 55],
      ["ie-ty", 134],
      ["ie-7033", 134],
      ["ie-2363", 87],
      ["ie-wh", 61],
      ["ie-wx", 99],
      ["ie-ww", 87],
    ],
  },
  {
    title: {
      text: "2002",
    },
    data: [
      ["ie-cw", 46],
      ["ie-cn", 57],
      ["ie-ce", 103],
      ["ie-491", 447],
      ["ie-dl", 137],
      ["ie-dn", 1122],
      ["ie-7034", 1122],
      ["ie-1528", 1122],
      ["ie-7035", 1122],
      ["ie-1510", 209],
      ["ie-ky", 132],
      ["ie-ke", 163],
      ["ie-kk", 80],
      ["ie-ls", 58],
      ["ie-lm", 26],
      ["ie-1533", 175],
      ["ie-ld", 31],
      ["ie-lh", 102],
      ["ie-mo", 117],
      ["ie-mh", 134],
      ["ie-mn", 53],
      ["ie-oy", 64],
      ["ie-rn", 54],
      ["ie-so", 58],
      ["ie-ty", 140],
      ["ie-7033", 140],
      ["ie-2363", 94],
      ["ie-wh", 71],
      ["ie-wx", 116],
      ["ie-ww", 114],
    ],
  },
  {
    title: {
      text: "2022",
    },
    data: [
      ["ie-cw", 61],
      ["ie-cn", 81],
      ["ie-ce", 127],
      ["ie-491", 584],
      ["ie-dl", 167],
      ["ie-dn", 1458],
      ["ie-7034", 1458],
      ["ie-1528", 1458],
      ["ie-7035", 1458],
      ["ie-1510", 277],
      ["ie-ky", 156],
      ["ie-ke", 247],
      ["ie-kk", 104],
      ["ie-ls", 91],
      ["ie-lm", 35],
      ["ie-1533", 209],
      ["ie-ld", 46],
      ["ie-lh", 139],
      ["ie-mo", 137],
      ["ie-mh", 220],
      ["ie-mn", 65],
      ["ie-oy", 83],
      ["ie-rn", 70],
      ["ie-so", 70],
      ["ie-ty", 167],
      ["ie-7033", 167],
      ["ie-2363", 127],
      ["ie-wh", 96],
      ["ie-wx", 163],
      ["ie-ww", 155],
    ],
  },
];

function Chart() {
  return (
    <div className="charts-container center">
      {arrMaps.map((map, i) => (
        <div className="chart" key={i}>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              ...baseOptions,
              title: map.title,
              series: [{ ...baseOptions.series[0], data: map.data }],
            }}
            constructorType={"mapChart"}
          />
        </div>
      ))}
    </div>
  );
}

export default Chart;
