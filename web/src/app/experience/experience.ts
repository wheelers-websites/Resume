import {Date} from "../shared/date";
import {Image} from "../shared/image";
import {Location} from "../shared/location";

export interface Experience {
  id: number;
  company: string;
  description: string;
  end: Date;
  image: Image;
  location: Location;
  role: string;
  start: Date;
  type: EmploymentType;
}

export enum EmploymentType {
  Contract,
  FullTime,
  Seasonal
}