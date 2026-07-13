type ImageOptions = {
  width?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
};

// Routes CMS-uploaded images through Netlify's Image CDN so visitors get
// resized, WebP-encoded files without touching the originals in the repo.
// Only active on Netlify (astro dev/preview have no /.netlify/images endpoint).
export function netlifyImage(src: string, { width, quality = 75, format = 'webp' }: ImageOptions = {}): string {
  if (import.meta.env.DEV || !src || src.endsWith('.svg')) return src;

  const params = new URLSearchParams({ url: src, fm: format, q: String(quality) });
  if (width) params.set('w', String(width));

  return `/.netlify/images?${params.toString()}`;
}
