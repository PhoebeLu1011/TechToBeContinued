export const exhibitionDateRange = '2026.12.12（六）– 12.13（日）';

export const exhibitionSchedule = [
  {
    id: 'day-one',
    date: '2026-12-12',
    dateLabel: '12/12（六）',
    openingTime: '12:30',
    closingTime: '17:00',
    ceremonyTime: '14:00',
    ceremonyLabel: '開幕茶會',
    closingLabel: '當日閉幕',
  },
  {
    id: 'day-two',
    date: '2026-12-13',
    dateLabel: '12/13（日）',
    openingTime: '08:30',
    closingTime: '16:00',
    ceremonyTime: '15:00',
    ceremonyLabel: '閉幕暨頒獎典禮',
    closingLabel: '展覽閉幕',
  },
] as const;

export type ExhibitionDay = (typeof exhibitionSchedule)[number];
