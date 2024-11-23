// eslint-disable-next-line @nx/enforce-module-boundaries
import { SourceMapConsumer } from 'source-map';

export type OriginalPosition = {
  file: string;
  line: number | null;
  column: number | null;
  codeBlock: string;
};

SourceMapConsumer.initialize({
  'lib/mappings.wasm': 'https://unpkg.com/source-map@0.7.3/lib/mappings.wasm',
});

const getSourceMap = async (sourceMapUrl: string) => {
  const response = await fetch(sourceMapUrl);
  return await response.json();
};

export const getOriginalPosition = async (
  sourceMapUrl: string | null,
  mappedPosition: { line: number; column: number },
  surroundingLines = 3 // Number of surrounding lines to extract
): Promise<OriginalPosition> => {
  if (!sourceMapUrl) {
    throw new Error('sourceMapUrl is required');
  }

  const cleanUrl =
    new URL(sourceMapUrl).origin + new URL(sourceMapUrl).pathname + '.map';

  const sourceMap = await getSourceMap(cleanUrl);
  const map = await new SourceMapConsumer(sourceMap);
  const originalPosition = map.originalPositionFor(mappedPosition);

  const content = map.sourceContentFor(originalPosition.source);

  if (!content) {
    throw new Error('Source content not found');
  }

  // Get the surrounding lines from the content
  const lines = content.split('\n');
  const startLine = Math.max(originalPosition.line! - surroundingLines, 0);
  const endLine = Math.min(
    originalPosition.line! + surroundingLines,
    lines.length - 1
  );

  const surroundingCode = lines.slice(startLine, endLine + 1).join('\n');

  return {
    file: new URL(sourceMapUrl).pathname,
    line: originalPosition.line,
    column: originalPosition.column,
    codeBlock: surroundingCode,
  };
};
