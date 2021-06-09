import {
  Document,
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign
} from "docx";

export class DocumentCreator {
  // tslint:disable-next-line: typedef
  public create(table : any,title): Document {
    const doc = new Document({
      sections: [
          {
              children: [...this.createRoleText(title),...this.createTable(table)]
          },
      ],
  });

    return doc;
  }

  public createTable(table:any)
  {
    const tableData=[]
    Object.keys(table).forEach(element => {
      tableData.push(
        new Paragraph({
          text: ""
        }),
        this.createHeading(element),
        new Paragraph({
          text: ""
        }),
        new Table({
          rows: this.createRow(table[element])
        })
      )
    });
    return tableData
  }
  public createRow(row:any)
  {
    const rowData=[]
    row.forEach((element:any) => {
      rowData.push(
        new TableRow({
          children: this.createRowCell(element)
      }))
    });
    return rowData
  } 
  public createRowCell(rowCell)
  {
    const rowCells=[]
    rowCell.forEach(element => {
      rowCells.push(
        new TableCell({
          children: [new Paragraph({text: element ,heading: HeadingLevel.HEADING_1,
          thematicBreak: true})],
          verticalAlign: VerticalAlign.CENTER,
      })
      )
    });
    return rowCells;
  }
  public createHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true
    });
  }

  public createSubHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2
    });
  }

  public createRoleText(roleText: any) {
    return [
      new Paragraph({
      children: [
        new TextRun({
          text: "Title of the MOP : ",
          bold: true
        }),
        new TextRun({
          text: roleText.tmop,
          italics: true
        })
      ]
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Creator of the MOP : ",
          bold: true
        }),
        new TextRun({
          text: roleText.cmop,
          italics: true
        })
      ]
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "Description of the MOP : ",
          bold: true
        }),
        new TextRun({
          text: roleText.dmop,
          italics: true
        })
      ]
    })
  ]
  }

  public createBullet(text: string): Paragraph {
    return new Paragraph({
      text: text,
      bullet: {
        level: 0
      }
    });
  }


  public splitParagraphIntoBullets(text: string): string[] {
    return text.split("\n\n");
  }

  // tslint:disable-next-line:no-any
  public createPositionDateText(
    startDate: any,
    endDate: any,
    isCurrent: boolean
  ): string {
    const startDateText =
      this.getMonthFromInt(startDate.month) + ". " + startDate.year;
    const endDateText = isCurrent
      ? "Present"
      : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;

    return `${startDateText} - ${endDateText}`;
  }

  public getMonthFromInt(value: number): string {
    switch (value) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sept";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        return "N/A";
    }
  }
}
