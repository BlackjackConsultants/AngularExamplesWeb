import { trigger, animate, transition, style, state, keyframes } from '@angular/animations';

// used in progress bar for example
export const colorAnimation = trigger('colorAnimation',
  [
    state('animateStart',
      style({ top: '150px', backgroundColor: 'red' }),
      { params: { toTop: '150px', toColor: 'red' } }),
    state('animateEnd',
      style({ top: '{{toTop}}', backgroundColor: '{{toColor}}' }),
      { params: { toTop: '333px', toColor: 'orange' } }),
    transition('animateStart => animateEnd', animate('1000ms ease-in')),
    transition('animateEnd => animateStart', animate('1000ms ease-out'))
  ]
);
