import { splitCaptionIntoSegments } from './caption-highlight.util';

describe('splitCaptionIntoSegments', () => {
  it('returns a single non-highlighted segment when patterns are missing', () => {
    expect(splitCaptionIntoSegments('TRUCK')).toEqual([
      { text: 'TRUCK', highlight: false }
    ]);
  });

  it('returns a single non-highlighted segment when patterns are empty', () => {
    expect(splitCaptionIntoSegments('TRUCK', [])).toEqual([
      { text: 'TRUCK', highlight: false }
    ]);
  });

  it('highlights a single match', () => {
    expect(splitCaptionIntoSegments('TRUCK', ['CK'])).toEqual([
      { text: 'TRU', highlight: false },
      { text: 'CK', highlight: true }
    ]);
  });

  it('highlights every occurrence of a pattern', () => {
    expect(splitCaptionIntoSegments('COOKBOOK', ['CK'])).toEqual([
      { text: 'COO', highlight: false },
      { text: 'CK', highlight: true },
      { text: 'BOO', highlight: false },
      { text: 'CK', highlight: true }
    ]);
  });

  it('prefers longer overlapping patterns', () => {
    expect(splitCaptionIntoSegments('MATCH', ['TCH', 'CH', 'TH'])).toEqual([
      { text: 'MA', highlight: false },
      { text: 'TCH', highlight: true }
    ]);
  });

  it('supports multiple patterns in one set', () => {
    expect(splitCaptionIntoSegments('RAIN', ['AI', 'AY'])).toEqual([
      { text: 'R', highlight: false },
      { text: 'AI', highlight: true },
      { text: 'N', highlight: false }
    ]);

    expect(splitCaptionIntoSegments('DAY', ['AI', 'AY'])).toEqual([
      { text: 'D', highlight: false },
      { text: 'AY', highlight: true }
    ]);
  });

  it('normalizes pattern casing', () => {
    expect(splitCaptionIntoSegments('TRUCK', ['ck'])).toEqual([
      { text: 'TRU', highlight: false },
      { text: 'CK', highlight: true }
    ]);
  });

  it('returns plain text when no pattern matches', () => {
    expect(splitCaptionIntoSegments('CAT', ['CK'])).toEqual([
      { text: 'CAT', highlight: false }
    ]);
  });
});
