/**
 * Canonical list of sales-rep regions shown on the /team tile-grid map.
 * `row`/`col` place each tile on a stylized (non-geographic) grid, in the
 * spirit of NPR-style US tile-grid maps — every US state gets exactly one
 * cell, except Nevada and New York, which are split into the two rep
 * territories the business actually sells through.
 *
 * Canada isn't a US state, so it has no grid cell — it's listed separately
 * wherever this data is rendered.
 */
export interface UsRegion {
  code: string;
  label: string;
  row: number;
  col: number;
}

export const US_REGIONS: UsRegion[] = [
  { code: 'AK',    label: 'Alaska',                 row: 0, col: 0 },
  { code: 'ME',    label: 'Maine',                  row: 0, col: 10 },

  { code: 'WA',    label: 'Washington',              row: 1, col: 1 },
  { code: 'ID',    label: 'Idaho',                   row: 1, col: 2 },
  { code: 'MT',    label: 'Montana',                 row: 1, col: 3 },
  { code: 'ND',    label: 'North Dakota',            row: 1, col: 4 },
  { code: 'MN',    label: 'Minnesota',               row: 1, col: 5 },
  { code: 'WI',    label: 'Wisconsin',               row: 1, col: 6 },
  { code: 'MI',    label: 'Michigan',                row: 1, col: 7 },
  { code: 'NY-N',  label: 'New York (North)',        row: 1, col: 8 },
  { code: 'VT',    label: 'Vermont',                 row: 1, col: 9 },
  { code: 'NH',    label: 'New Hampshire',           row: 1, col: 10 },

  { code: 'OR',    label: 'Oregon',                  row: 2, col: 1 },
  { code: 'NV-N',  label: 'Nevada (Northern)',       row: 2, col: 2 },
  { code: 'WY',    label: 'Wyoming',                 row: 2, col: 3 },
  { code: 'SD',    label: 'South Dakota',            row: 2, col: 4 },
  { code: 'IA',    label: 'Iowa',                    row: 2, col: 5 },
  { code: 'IL',    label: 'Illinois',                row: 2, col: 6 },
  { code: 'IN',    label: 'Indiana',                 row: 2, col: 7 },
  { code: 'OH',    label: 'Ohio',                    row: 2, col: 8 },
  { code: 'PA',    label: 'Pennsylvania',            row: 2, col: 9 },
  { code: 'NY-S',  label: 'New York (South)',        row: 2, col: 10 },
  { code: 'MA',    label: 'Massachusetts',           row: 2, col: 11 },

  { code: 'CA',    label: 'California',              row: 3, col: 1 },
  { code: 'NV-LV', label: 'Nevada (Las Vegas)',      row: 3, col: 2 },
  { code: 'CO',    label: 'Colorado',                row: 3, col: 3 },
  { code: 'NE',    label: 'Nebraska',                row: 3, col: 4 },
  { code: 'MO',    label: 'Missouri',                row: 3, col: 5 },
  { code: 'KY',    label: 'Kentucky',                row: 3, col: 6 },
  { code: 'WV',    label: 'West Virginia',           row: 3, col: 7 },
  { code: 'VA',    label: 'Virginia',                row: 3, col: 8 },
  { code: 'NJ',    label: 'New Jersey',              row: 3, col: 9 },
  { code: 'CT',    label: 'Connecticut',             row: 3, col: 10 },
  { code: 'RI',    label: 'Rhode Island',            row: 3, col: 11 },

  { code: 'UT',    label: 'Utah',                    row: 4, col: 2 },
  { code: 'NM',    label: 'New Mexico',              row: 4, col: 3 },
  { code: 'KS',    label: 'Kansas',                  row: 4, col: 4 },
  { code: 'TN',    label: 'Tennessee',               row: 4, col: 6 },
  { code: 'DC',    label: 'Washington D.C.',         row: 4, col: 7 },
  { code: 'MD',    label: 'Maryland',                row: 4, col: 8 },
  { code: 'DE',    label: 'Delaware',                row: 4, col: 9 },

  { code: 'AZ',    label: 'Arizona',                 row: 5, col: 2 },
  { code: 'OK',    label: 'Oklahoma',                row: 5, col: 4 },
  { code: 'AR',    label: 'Arkansas',                row: 5, col: 5 },
  { code: 'MS',    label: 'Mississippi',             row: 5, col: 6 },
  { code: 'NC',    label: 'North Carolina',          row: 5, col: 8 },

  { code: 'TX',    label: 'Texas',                   row: 6, col: 4 },
  { code: 'LA',    label: 'Louisiana',               row: 6, col: 5 },
  { code: 'AL',    label: 'Alabama',                 row: 6, col: 6 },
  { code: 'GA',    label: 'Georgia',                 row: 6, col: 7 },
  { code: 'SC',    label: 'South Carolina',          row: 6, col: 8 },

  { code: 'FL',    label: 'Florida',                 row: 7, col: 7 },

  { code: 'HI',    label: 'Hawaii',                  row: 4, col: 1 },
];

export const US_GRID_ROWS = Math.max(...US_REGIONS.map((r) => r.row)) + 1;
export const US_GRID_COLS = Math.max(...US_REGIONS.map((r) => r.col)) + 1;

/** Canada isn't part of the state grid — it's covered by a rep same as any region, just listed separately. */
export const CANADA_REGION: UsRegion = { code: 'CANADA', label: 'Canada', row: -1, col: -1 };
