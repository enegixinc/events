import { RegexService } from './regex.service';

export class ErrorStack {
  private callerIndex = 5;

  get callerStackTrace() {
    console.log('Error().stack: ', new Error().stack);
    return new Error().stack?.split('\n').slice(this.callerIndex).join('\n') || '';
  }

  get callerMetaData() {
    const metaData = {
      functionName: RegexService.getFunctionName(this.callerStackTrace),
      fileUrl: RegexService.getFilePath(this.callerStackTrace),
      relativePath: RegexService.getFilePath(this.callerStackTrace),
      lineNumber: RegexService.getLineColumn(this.callerStackTrace),
      columnNumber: RegexService.getLineColumn(this.callerStackTrace),
    };

    console.log('callerStackTrace: ', this.callerStackTrace);
    console.log('metaData: ', metaData);
    return metaData;
  }
}
