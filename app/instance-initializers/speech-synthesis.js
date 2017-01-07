export function initialize( appInstance ) {
  appInstance.inject('component', 'speechSynthesis', 'service:speech-synthesis');
}

export default {
  name: 'speech-synthesis',
  initialize
};
