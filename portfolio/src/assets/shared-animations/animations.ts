import {trigger, animate, transition, style} from '@angular/animations';
export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(':enter', [
        style({
            opacity: 0,
        }),
        animate(600),
    ]),
    transition(':leave', [animate(150, style({opacity: 0}))]),
]);
export const cardXanimation = trigger('cardXanimation', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateX(100%)',
        }),
        animate(500),
    ]),
    transition(':leave', [
        style({
            opacity: 0,
            transform: 'translateX(-100%)',
        }),
        animate(500),
    ]),
]);
export const cardYanimation = trigger('cardYanimation', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(50%)',
        }),
        animate(500),
    ]),
    transition(':leave', [
        style({
            opacity: 0,
            transform: 'translateY(-50%)',
        }),
        animate(500),
    ]),
]);
