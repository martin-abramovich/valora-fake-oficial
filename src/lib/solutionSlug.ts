/**
 * Derives a clean URL slug from a solutions content-collection entry id.
 * Filenames are prefixed with an ordering number (e.g. "01-custom-mirrors-led")
 * so every new solution gets a working page automatically, without an editor
 * having to fill in a separate slug field by hand.
 */
export function solutionSlug(id: string): string {
  return id.replace(/^\d+-/, '');
}
