
// my presets of animations transitions
export const softTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
export const bounceTransition = (duration: number,bounce?: number,delay?:number) =>{ return {type:"spring", bounce:bounce ? bounce : 0.4, duration:duration ? duration : 0.8 ,delay: delay? delay : 0}};
export const easeTransition = {type:"ease", ease:"easeInOut", duration:0.4};