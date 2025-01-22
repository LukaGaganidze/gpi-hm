interface DropdownOption {
  name: string;
  val: dropdownValue;
}

interface dropdownValue {
  res: string;
  for: string;
}

interface AvailableHour {
  start: string;
  end: string;
}

export interface DoctorCard {
  name: string;
  speciality: string;
  clinicName: string;
  clinicAddress: string;
  availableHours: AvailableHour[];
}

export interface StageFiveDropdown {
  label: string;
  options: DropdownOption[];
  selectedValue: null;
}

export const stageFiveDropdowns: StageFiveDropdown[] = [
  {
    label: 'კლინიკა',
    options: [
      { name: 'კლინიკა N1', val: { res: 'clinic N1', for: 'კლინიკა' } },
      { name: 'კლინიკა N2', val: { res: 'clinic N2', for: 'კლინიკა' } },
      { name: 'კლინიკა N3', val: { res: 'clinic N3', for: 'კლინიკა' } },
      { name: 'კლინიკა N4', val: { res: 'clinic N4', for: 'კლინიკა' } },
      { name: 'კლინიკა N5', val: { res: 'clinic N5', for: 'კლინიკა' } },
      { name: 'კლინიკა N6', val: { res: 'clinic N6', for: 'კლინიკა' } },
    ],
    selectedValue: null,
  },
  {
    label: 'ენა',
    options: [
      { name: 'ქართული', val: { res: 'georgian', for: 'ენა' } },
      { name: 'ინგლისური', val: { res: 'english', for: 'ენა' } },
      { name: 'რუსული', val: { res: 'russian', for: 'ენა' } },
    ],
    selectedValue: null,
  },
  {
    label: 'პირადი ექიმი',
    options: [
      {
        name: 'ექიმი გიორგი',
        val: { res: 'doctor giorgi', for: 'პირადი ექიმი' },
      },
      { name: 'ექიმი ნინო', val: { res: 'doctor nino', for: 'პირადი ექიმი' } },
      {
        name: 'ექიმი შალვა',
        val: { res: 'doctor shalva', for: 'პირადი ექიმი' },
      },
    ],
    selectedValue: null,
  },
  {
    label: 'სპეციალობა',
    options: [
      { name: 'თერაპევტი', val: { res: 'therapist', for: 'სპეციალობა' } },
      { name: 'პედიატრი', val: { res: 'pediatrician', for: 'სპეციალობა' } },
      { name: 'ქირურგი', val: { res: 'surgeon', for: 'სპეციალობა' } },
    ],
    selectedValue: null,
  },
  {
    label: 'სპეციალისტი',
    options: [
      { name: 'სპეციალისტი ლევან', val: { res: 'levan', for: 'სპეციალისტი' } },
      {
        name: 'სპეციალისტი მარიამ',
        val: { res: 'mariam', for: 'სპეციალისტი' },
      },
      { name: 'სპეციალისტი დათო', val: { res: 'dato', for: 'სპეციალისტი' } },
    ],
    selectedValue: null,
  },
  {
    label: 'კვლევის დასახელება',
    options: [
      {
        name: 'კვლევა 1',
        val: { res: 'research 1', for: 'კვლევის დასახელება' },
      },
      {
        name: 'კვლევა 2',
        val: { res: 'research 2', for: 'კვლევის დასახელება' },
      },
      {
        name: 'კვლევა 3',
        val: { res: 'research 3', for: 'კვლევის დასახელება' },
      },
    ],
    selectedValue: null,
  },
  {
    label: 'ექიმი',
    options: [
      { name: 'ექიმი 1', val: { res: 'doc1', for: 'ექიმი' } },
      { name: 'ექიმი 2', val: { res: 'doc2', for: 'ექიმი' } },
      { name: 'ექიმი 3', val: { res: 'doc3', for: 'ექიმი' } },
      { name: 'ექიმი 4', val: { res: 'doc4', for: 'ექიმი' } },
    ],
    selectedValue: null,
  },
];

export const doctorCards: DoctorCard[] = [
  {
    name: 'მარიამ',
    speciality: 'ოტორინოლარინგოლოგი',
    clinicName: 'მედალფა კლინიკა',
    clinicAddress: '16 რუსთაველის გამზირი',
    availableHours: [
      { start: '10:00', end: '10:20' },
      { start: '10:30', end: '10:50' },
      { start: '11:00', end: '11:20' },
      { start: '12:00', end: '12:20' },
      { start: '13:00', end: '13:20' },
      { start: '14:00', end: '14:20' },
      { start: '15:00', end: '15:20' },
      { start: '16:00', end: '16:20' },
      { start: '17:00', end: '17:20' },
      { start: '18:00', end: '18:20' },
      { start: '19:00', end: '19:20' },
      { start: '20:00', end: '20:20' },
      { start: '21:00', end: '21:20' },
      { start: '21:30', end: '21:50' },
    ],
  },
  {
    name: 'ლუკა',
    speciality: 'კარდიოლოგი',
    clinicName: 'სამედიცინო ცენტრი',
    clinicAddress: '18 ბერი ანდრია უმებულის ქუჩა',
    availableHours: [
      { start: '09:00', end: '09:30' },
      { start: '10:00', end: '10:30' },
      { start: '11:00', end: '11:30' },
      { start: '12:00', end: '12:30' },
      { start: '13:30', end: '14:00' },
      { start: '15:00', end: '15:30' },
      { start: '16:00', end: '16:30' },
      { start: '17:00', end: '17:30' },
      { start: '18:00', end: '18:30' },
      { start: '19:00', end: '19:30' },
      { start: '20:00', end: '20:30' },
      { start: '21:00', end: '21:30' },
    ],
  },
  {
    name: 'ნატალია',
    speciality: 'კარდიოლოგი',
    clinicName: 'ნატალი კინიკა',
    clinicAddress: '10 ზაქარია ჭიჭინაძის ქუჩა',
    availableHours: [
      { start: '08:00', end: '08:30' },
      { start: '09:00', end: '09:30' },
      { start: '10:00', end: '10:30' },
      { start: '11:00', end: '11:30' },
      { start: '12:00', end: '12:30' },
      { start: '14:00', end: '14:30' },
      { start: '15:00', end: '15:30' },
      { start: '16:00', end: '16:30' },
      { start: '17:00', end: '17:30' },
      { start: '18:00', end: '18:30' },
      { start: '19:00', end: '19:30' },
      { start: '20:00', end: '20:30' },
      { start: '21:00', end: '21:30' },
    ],
  },
  {
    name: 'გიორგი',
    speciality: 'ტრავმატოლოგი',
    clinicName: 'ჯეოკლინიკა',
    clinicAddress: '23 მარჯანიშვილის ქუჩა',
    availableHours: [
      { start: '09:00', end: '09:30' },
      { start: '10:00', end: '10:30' },
      { start: '11:00', end: '11:30' },
      { start: '12:00', end: '12:30' },
      { start: '13:00', end: '13:30' },
      { start: '14:00', end: '14:30' },
      { start: '15:00', end: '15:30' },
      { start: '16:00', end: '16:30' },
      { start: '17:00', end: '17:30' },
      { start: '18:00', end: '18:30' },
      { start: '19:00', end: '19:30' },
      { start: '20:00', end: '20:30' },
      { start: '21:00', end: '21:30' },
    ],
  },
  {
    name: 'ანა',
    speciality: 'კოსმეტოლოგი',
    clinicName: 'ალფა კლინიკა',
    clinicAddress: '2 ვაკის ქუჩა',
    availableHours: [
      { start: '08:00', end: '08:30' },
      { start: '09:00', end: '09:30' },
      { start: '10:00', end: '10:30' },
      { start: '11:00', end: '11:30' },
      { start: '12:00', end: '12:30' },
      { start: '13:00', end: '13:30' },
      { start: '14:00', end: '14:30' },
      { start: '15:00', end: '15:30' },
      { start: '16:00', end: '16:30' },
      { start: '17:00', end: '17:30' },
      { start: '18:00', end: '18:30' },
      { start: '19:00', end: '19:30' },
      { start: '20:00', end: '20:30' },
      { start: '21:00', end: '21:30' },
    ],
  },
];
