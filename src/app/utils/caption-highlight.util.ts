export interface CaptionSegment {
  text: string;
  highlight: boolean;
}

export function splitCaptionIntoSegments(
  caption: string,
  patterns?: string[]
): CaptionSegment[] {
  if (!patterns?.length) {
    return [{ text: caption, highlight: false }];
  }

  const normalizedPatterns = patterns
    .map(pattern => pattern.toUpperCase())
    .filter(pattern => pattern.length > 0)
    .sort((a, b) => b.length - a.length);

  if (normalizedPatterns.length === 0) {
    return [{ text: caption, highlight: false }];
  }

  const upperCaption = caption.toUpperCase();
  const matches: { start: number; end: number }[] = [];

  for (const pattern of normalizedPatterns) {
    let searchFrom = 0;
    while (searchFrom <= upperCaption.length - pattern.length) {
      const index = upperCaption.indexOf(pattern, searchFrom);
      if (index === -1) {
        break;
      }

      const end = index + pattern.length;
      const overlaps = matches.some(match => index < match.end && end > match.start);
      if (!overlaps) {
        matches.push({ start: index, end });
      }

      searchFrom = index + 1;
    }
  }

  if (matches.length === 0) {
    return [{ text: caption, highlight: false }];
  }

  matches.sort((a, b) => a.start - b.start);

  const segments: CaptionSegment[] = [];
  let cursor = 0;

  for (const match of matches) {
    if (match.start > cursor) {
      segments.push({
        text: caption.slice(cursor, match.start),
        highlight: false
      });
    }

    segments.push({
      text: caption.slice(match.start, match.end),
      highlight: true
    });
    cursor = match.end;
  }

  if (cursor < caption.length) {
    segments.push({
      text: caption.slice(cursor),
      highlight: false
    });
  }

  return segments;
}
