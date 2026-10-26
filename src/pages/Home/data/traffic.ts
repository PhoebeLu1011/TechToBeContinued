export type TrafficDirection = {
  mode: string;
  description: string;
};

export const trafficDirections: TrafficDirection[] = [
  {
    mode: '搭乘捷運',
    description: '松山新店線古亭站，5 號出口步行約 7 分鐘即可抵達。',
  },
  {
    mode: '搭乘公車',
    description: '師大綜合大樓站：18、235、237、278、295、672、907、和平幹線。',
  },
  {
    mode: '自行開車',
    description: '可導航至和平校區羅馬廣場地下停車場，收費 70 元／小時。',
  },
];

const destination = '國立臺灣師範大學綜合大樓';
const encodedDestination = encodeURIComponent(destination);

export const trafficMapEmbedUrl =
  `https://www.google.com/maps?q=${encodedDestination}&z=16&output=embed&hl=zh-TW`;

export const trafficMapLinkUrl =
  `https://www.google.com/maps/search/?api=1&query=${encodedDestination}`;
