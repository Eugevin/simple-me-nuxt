import { type IDraft } from '~/types';
import jsPDF from 'jspdf';

type IDrafts = Omit<IDraft, 'image'>

export default (drafts: Array<IDrafts>, creds: string) => {
  const pdf = new jsPDF()

  const [titleSize, headingSize, textSize] = [20, 14, 10]
  
  pdf
    .setFontSize(textSize)
    .text('Frontend Developer', 10, 10)
    .setFontSize(titleSize)
    .text(`${creds}`, 10, 18)
    .setFontSize(headingSize)
    .text('Projects:', 10, 30)
    .text(':', 10, 30)

  drafts.map((draft, i) => {
    const startYPos = (i + 1) * 40

    pdf
      .setFontSize(textSize)
      .text(`${draft.time[0]} - ${draft.time[1]}`, 10, startYPos)
      .text(`${draft.title}`, 10, startYPos + 5)
      .text(`${draft.description}`, 10, startYPos + 10)

    draft.details.map((detail, i) => {
      const detailYPos = startYPos + 10 + ((i + 1) * 5)
      
      pdf.text(`${detail}`, 15, detailYPos)
    })
  })
  pdf.save(`${creds}.pdf`);
}