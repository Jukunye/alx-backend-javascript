export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
