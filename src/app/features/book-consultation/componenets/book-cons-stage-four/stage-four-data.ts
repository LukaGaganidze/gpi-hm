export interface City {
  name: string;
  code: string;
}

export interface ClinicsData {
  clinicName: string;
  clinicAddress: string;
  img: string;
}

export const clinicsData = [
  {
    clinicName: 'კურაციო',
    clinicAddress: 'ოთარ ლორთქიფანიძის #31',
    img: 'ct-logo.png',
  },
  {
    clinicName: 'ინგოროყვას საუნივერსიტეტო კლინიკა',
    clinicAddress: 'წინანდლის ქუჩა N9',
    img: 'ing-logo.png',
  },
  {
    clinicName:
      'სს “ევექსის ჰოსპიტლები” - მ.იაშვილის სახელობის ბავშვთა ცენტრალური საავადმოფო',
    clinicAddress: 'ოთარ ლორთქიფანიძის #31',
    img: 'evex-logo.png',
  },
];

export const citiesData: City[] = [
  { name: 'თბილისი', code: 'TBS' },
  { name: 'ბათუმი', code: 'BTM' },
  { name: 'ქუთაისი', code: 'KTS' },
  { name: 'რუსთავი', code: 'RUS' },
  { name: 'გორი', code: 'GOR' },
  { name: 'ზუგდიდი', code: 'ZGD' },
  { name: 'ფოთი', code: 'POT' },
  { name: 'თელავი', code: 'TEL' },
  { name: 'ახალციხე', code: 'AKH' },
  { name: 'ოზურგეთი', code: 'OZU' },
];
