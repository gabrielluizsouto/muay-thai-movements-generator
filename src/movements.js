export const movements = [
  {
    name: 'Jab',
    speak_form: 'jébi',
    level: 'branca',
    fall_in_switch_base: false
  },
  {
    name: 'Direto',
    speak_form: 'direto',
    level: 'branca',
    fall_in_switch_base: false
  },
  {
    name: 'Cruzado',
    speak_form: 'cruzado',
    level: 'branca',
    fall_in_switch_base: false
  },
  {
    name: 'Upper',
    speak_form: 'upper',
    level: 'branca',
    fall_in_switch_base: false
  },
  {
    name: 'Esquiva lateral',
    speak_form: 'esquiva lateral',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Bloqueio de jab direto',
    speak_form: 'Bloqueio de jébi direto',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Step',
    speak_form: 'step',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'High kick',
    speak_form: 'high kick',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Low kick',
    speak_form: 'low kick',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Joelhada',
    speak_form: 'joelhada',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Joelhada lateral',
    speak_form: 'joelhada lateral',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Cotovelada lateral',
    speak_form: 'Cotovelada lateral',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Chute frontal',
    speak_form: 'chute frontal',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Chute lateral',
    speak_form: 'chute lateral',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Teep',
    speak_form: 'teep',
    level: 'ponta_vermelha',
    fall_in_switch_base: false
  },
  {
    name: 'Dae Teep',
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