import { FormControl } from '@angular/forms';

export function restrcitedWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) {
      return null;
    }

    const invalidWords = words.map(w => control.value.includes(w) ? w : null);
    return invalidWords && invalidWords.length > 0 ? { 'restrcitedWords': invalidWords.join(', ') } : null;
  };
}
