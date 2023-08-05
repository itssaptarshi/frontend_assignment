import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EngagementHelper from "./EngagementHelper";
import channels from './data/channels.json'
import messageCountList from './data/messageCountList.json'


const EngagementMessagesOverTime = () => {
    const options = {
        chart: {
          type: "spline",
          backgroundColor: "#22222c",
        },
    
        title: {
          style: { color: "#FFFFFF" },
          text: "Engagement Chart",
        },
    
        xAxis: {
          type: "datetime",
          tickInterval: 24 * 3600 * 1000,
          labels: {
            style: {
              color: "#FFFFFF",
            },
          },
          dateTimeLabelFormats: {
            day: "%e %b, %y",
          },
        },
    
        yAxis: {
          gridLineWidth: 0,
          title: {
            style: { color: "#FFFFFF" },
            text: "Messages",
          },
          labels: {
            style: {
              color: "#FFFFFF",
            },
          },
        },
    
        tooltip: {
          headerFormat: "<b>{series.name}</b><br />",
          pointFormat: "{point.y} messages on {point.x:%e,%b}",
          backgroundColor: "#222",
          style: {
            color: "#FFFFFF",
            opacity: ".8",
          },
        },
        series: EngagementHelper.engagementMessageOverTimeChartOptions(
          channels.channels,
          messageCountList.messageCountList
        ),
    
        legend: {
          itemStyle: {
            color: "white",
          },
        },
        
      };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
