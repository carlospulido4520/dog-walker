export interface Dogwalker {
  id: string;
  descrip: string;
  img: string;
  name: string;
  location: string;
  calification: string;
  prize: string;
  service: string;
  schedules?: Schedule[];
}

export interface Schedule {
  schedule: string;
  days: Day[];
}

export interface Day {
  day: string;
  value: boolean;
}
