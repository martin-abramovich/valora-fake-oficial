/**
 * Derives a clean URL slug from an artists content-collection entry id.
 * Filenames are prefixed with an ordering number (e.g. "01-lorem-ipsum")
 * so every new artist gets a working page automatically, without an editor
 * having to fill in a separate slug field by hand.
 */
export function artistSlug(id: string): string {
  return id.replace(/^\d+-/, '');
}
