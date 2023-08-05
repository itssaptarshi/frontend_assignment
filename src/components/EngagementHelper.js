export default class EngagementHelper {
  static engagementMessageOverTimeChartOptions(channelList, messageCountList) {
    const channelMessageCount = {};
    const checkDateCount = {};
    channelList.forEach((channel) => {
      messageCountList.forEach((message) => {
        if (channel.id === message.channelId) {
          if (channelMessageCount[channel.id]) {
            checkDateCount[channel.id].add(message.timeBucket.substring(0, 10));
            channelMessageCount[channel.id]?.data?.push({
              x: new Date(message.timeBucket).getTime(),
              y: +message.count,
            });
          } else {
            checkDateCount[channel.id] = new Set().add(
              message.timeBucket.substring(0, 10)
            );

            channelMessageCount[channel.id] = {
              name: channel.label,
              data: [
                {
                  x: new Date(message.timeBucket).getTime(),
                  y: +message.count,
                },
              ],
            };
          }
        }
      });
    });

    const filteredData = [];
    for (let channelKey in channelMessageCount) {
      if (checkDateCount[channelKey].size > 1) {
        filteredData.push(channelMessageCount[channelKey]);
      }
    }
    return filteredData;
  }
}
