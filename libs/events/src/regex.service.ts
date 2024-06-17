export const Regex =  {
  webpackInternal : /\bwebpack-internal\b/,
  filePath : /\b[\w\/\.-]+(?=:\d+:\d+)\b/,
  functionName : /(?<=\()[\w]+(?=\))/,
  lineColumn : /:\d+:\d+$/,
} as const

export class RegexService {
  static match(regex: RegExp, text: string): string[] {
    return text.match(regex) || [];
  }

  static isWebpackInternal(text: string): boolean {
    return this.match(Regex.webpackInternal, text).length > 0;
  }

  static getFilePath(text: string): string {
    return this.match(Regex.filePath, text)[0] || '';
  }

  static getFunctionName(text: string): string {
    return this.match(Regex.functionName, text)[0] || '';
  }

  static getLineColumn(text: string): number {
    return Number(this.match(Regex.lineColumn, text)[0] || '')
  }
}
