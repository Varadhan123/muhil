import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-proj';
  
  private pdfUrl = 'assets/Tamil.pdf';

  openPdf() {
    const pdfWindow = window.open();
    if (pdfWindow) {
      pdfWindow.document.write(
        `<iframe src="${this.pdfUrl}" width="100%" height="100%"></iframe>`
      );
    } else {
      // Handle the scenario where the window couldn't be opened
      // You can show an error message or a fallback link to download the PDF.
      console.error('Unable to open the PDF in a new window.');
    }
  }
}
