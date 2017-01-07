export function initialize( appInstance ) {
  appInstance.inject('component', 'commandRecognition', 'service:command-recognition');
}

export default {
  name: 'command-recognition',
  initialize
};
