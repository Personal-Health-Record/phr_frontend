export type Rujukan = {
  id: number;
  referenceNumber: string;
  date: string;
  nik: string;
  patientType: string;
  patientName: string;
  doctorName: string;
  location: string; // fakses rujukan
  referenceLocation: string; // fakses perujuk
  polyName: string;
  diagnose: string;
  medicine: string;
  actionsTaken: string;
  referenceReason: string; // alasan rujukan
};
