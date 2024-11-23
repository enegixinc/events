// eslint-disable-next-line @nx/enforce-module-boundaries
import { SourceMapConsumer } from 'source-map';

export type OriginalPosition = {
  file: string;
  line: number | null;
  column: number | null;
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
  mappedPosition: { line: number; column: number }
): Promise<OriginalPosition> => {
  if (!sourceMapUrl) {
    throw new Error('sourceMapUrl is required');
  }

  const cleanUrl =
    new URL(sourceMapUrl).origin + new URL(sourceMapUrl).pathname + '.map';

  const sourceMap = await getSourceMap(cleanUrl);
  const map = await new SourceMapConsumer(sourceMap);
  const originalPosition = map.originalPositionFor(mappedPosition);

  console.log('originalPosition', {
    inputs: { sourceMapUrl, mappedPosition },
    map: map,
    file: map.file,
    line: originalPosition.line,
    column: originalPosition.column,
  });
  return {
    file: new URL(sourceMapUrl).pathname,
    line: originalPosition.line,
    column: originalPosition.column,
  };
};
