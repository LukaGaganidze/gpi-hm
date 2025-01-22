export interface PersonData {
  id: string;
  name: string;
  personId: string;
};

export const peopleDataPersonal : PersonData[] = [
  { id: 'person1', name: 'ლუკა 1', personId: 'person-ID-1' },
  { id: 'person2', name: 'ლუკა 2', personId: 'person-ID-2' },
  { id: 'person3', name: 'ლუკა 3', personId: 'person-ID-3' },
];

export const peopleDataForOthers : PersonData[] = [
  { id: 'person4', name: 'ლუკა 4', personId: 'person-ID-4' },
  { id: 'person5', name: 'ლუკა 5', personId: 'person-ID-5' },
  { id: 'person6', name: 'ლუკა 6', personId: 'person-ID-6' },
];
