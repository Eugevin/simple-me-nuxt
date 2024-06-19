import { type IDraft } from '~/types';
import jsPDF from 'jspdf';

type IDrafts = Omit<IDraft, 'image'>

export default (drafts: Array<IDrafts>, creds: string) => {
  const pdf = new jsPDF()
  
  pdf.text(`${creds}`, 10, 10);
  pdf.save(`${creds}.pdf`);
}