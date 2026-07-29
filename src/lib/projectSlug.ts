/**
 * Derives a clean URL slug from a projects content-collection entry id.
 * Filenames are prefixed with an ordering number (e.g. "01-lorem-ipsum-residence")
 * so every new project gets a working page automatically, without an editor
 * having to fill in a separate slug field by hand.
 */
export function projectSlug(id: string): string {
  return id.replace(/^\d+-/, '');
}
