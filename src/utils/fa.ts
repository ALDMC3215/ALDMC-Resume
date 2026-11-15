const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';

/** Latin digits to Persian digits. Use for numbers shown inside Persian UI text. */
export const toFa = (value: string | number): string =>
  String(value).replace(/[0-9]/g, d => FA_DIGITS[Number(d)]);
