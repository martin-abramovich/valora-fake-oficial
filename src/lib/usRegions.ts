/**
 * Canonical list of sales-rep regions shown in the /team rep-locator dropdown.
 * Every US state gets one entry, except Nevada and New York, which are split
 * into the two rep territories the business actually sells through.
 *
 * Canada isn't a US state, so it's listed separately (`CANADA_REGION`)
 * wherever this data is rendered.
 */
export interface UsRegion {
  code: string;
  label: string;
}

export const US_REGIONS: UsRegion[] = [
  { code: 'AL',    label: 'Alabama' },
  { code: 'AK',    label: 'Alaska' },
  { code: 'AZ',    label: 'Arizona' },
  { code: 'AR',    label: 'Arkansas' },
  { code: 'CA',    label: 'California' },
  { code: 'CO',    label: 'Colorado' },
  { code: 'CT',    label: 'Connecticut' },
  { code: 'DE',    label: 'Delaware' },
  { code: 'DC',    label: 'Washington D.C.' },
  { code: 'FL',    label: 'Florida' },
  { code: 'GA',    label: 'Georgia' },
  { code: 'HI',    label: 'Hawaii' },
  { code: 'ID',    label: 'Idaho' },
  { code: 'IL',    label: 'Illinois' },
  { code: 'IN',    label: 'Indiana' },
  { code: 'IA',    label: 'Iowa' },
  { code: 'KS',    label: 'Kansas' },
  { code: 'KY',    label: 'Kentucky' },
  { code: 'LA',    label: 'Louisiana' },
  { code: 'ME',    label: 'Maine' },
  { code: 'MD',    label: 'Maryland' },
  { code: 'MA',    label: 'Massachusetts' },
  { code: 'MI',    label: 'Michigan' },
  { code: 'MN',    label: 'Minnesota' },
  { code: 'MS',    label: 'Mississippi' },
  { code: 'MO',    label: 'Missouri' },
  { code: 'MT',    label: 'Montana' },
  { code: 'NE',    label: 'Nebraska' },
  { code: 'NV-N',  label: 'Nevada (Northern)' },
  { code: 'NV-LV', label: 'Nevada (Las Vegas)' },
  { code: 'NH',    label: 'New Hampshire' },
  { code: 'NJ',    label: 'New Jersey' },
  { code: 'NM',    label: 'New Mexico' },
  { code: 'NY-N',  label: 'New York (North)' },
  { code: 'NY-S',  label: 'New York (South)' },
  { code: 'NC',    label: 'North Carolina' },
  { code: 'ND',    label: 'North Dakota' },
  { code: 'OH',    label: 'Ohio' },
  { code: 'OK',    label: 'Oklahoma' },
  { code: 'OR',    label: 'Oregon' },
  { code: 'PA',    label: 'Pennsylvania' },
  { code: 'RI',    label: 'Rhode Island' },
  { code: 'SC',    label: 'South Carolina' },
  { code: 'SD',    label: 'South Dakota' },
  { code: 'TN',    label: 'Tennessee' },
  { code: 'TX',    label: 'Texas' },
  { code: 'UT',    label: 'Utah' },
  { code: 'VT',    label: 'Vermont' },
  { code: 'VA',    label: 'Virginia' },
  { code: 'WA',    label: 'Washington' },
  { code: 'WV',    label: 'West Virginia' },
  { code: 'WI',    label: 'Wisconsin' },
  { code: 'WY',    label: 'Wyoming' },
];

/** Canada isn't part of the state list — it's covered by a rep same as any region, just listed separately. */
export const CANADA_REGION: UsRegion = { code: 'CANADA', label: 'Canada' };
