export const movements = [
  {
    name: 'Jab ð',
    speak_form: 'jÃ©bi',
    level: 'branca',
    fall_in_switch_base: false
  },
  {
    name: 'Direto ð',
    speak_form: 'direto',
    level: 'branca',
    fall_in_switch_base: false
  },
  {
    name: 'Cruzado ð¤',
    speak_form: 'cruzado',
    level: 'branca',
    fall_in_switch_base: false
  },
  {
    name: 'Upper â',
    speak_form: 'upper',
    level: 'branca',
    fall_in_switch_base: false
  },
  {
    name: 'Esquiva lateral ð¨',
    speak_form: 'esquiva lateral',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Bloqueio de jab direto ð',
    speak_form: 'Bloqueio de jÃ©bi direto',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Step ð£',
    speak_form: 'step',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'High kick ð¦¶ð',
    speak_form: 'high kick',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Low kick ð¦¶â¬ï¸',
    speak_form: 'low kick',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Joelhada ð¦µ',
    speak_form: 'joelhada',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Joelhada lateral ð¦µâï¸',
    speak_form: 'joelhada lateral',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Cotovelada lateral ðªâï¸',
    speak_form: 'Cotovelada lateral',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Chute frontal ð¦¶',
    speak_form: 'chute frontal',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Chute lateral ð¦¶âï¸',
    speak_form: 'chute lateral',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Teep ð¦¶',
    speak_form: 'teep',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Dae Teep ð¦¶ð£',
    speak_form: 'dae teep',
    level: 'ponta_vermelha',
    fall_in_switch_base: true
  },
];

export const random_movements = (quantity) => {
  let rand_mov = [];

  for (let i = 0; i < quantity; i++) {
    let sorted_movement = movements[Math.floor(Math.random()*movements.length)];
    
    // change last movement if it is teep
    if(i === quantity-1){
      while(sorted_movement.name === 'Step') sorted_movement = movements[Math.floor(Math.random()*movements.length)];
    }

    rand_mov.push(sorted_movement);
  }

  return rand_mov;
} 