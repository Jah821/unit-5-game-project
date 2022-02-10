// username functionality
// add features that stick with the character 
// avatar for player and enemies 
// music on certain events(death,enemies and game completion)
// title screen and background



const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let myMusic 

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Welcome to the land of 821!',
    options: [
      {
        text: 'Take the 821 coin?',
        setState: { coin: true },
        nextText: 2
      },
      {
        text: 'Keep it pushing',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You come across a Shop Person! He invites you in. He starts to tell you a story of 3 men who come into town and caused havoc amongst all of the townspeople. He tells you to come inside and look at the weapons he has available',
    options: [
      {
        text: 'Buy the Justifiah.. A great weapon! ',
        requiredState: (currentState) => currentState.coin,
        setState: { coin: false, Justifiah: true },
        nextText: 3
      },
      {
        text: 'Buy the Fourty Nickel',
        requiredState: (currentState) => currentState.coin,
        setState: { coin: false, FourtyNickel: true },
        nextText: 3
      },
      {
        text: 'Keep your coins',
        nextText: 3
      },
      {
          text:'Try to steal a weapon',
          nextText:12
      }
    ]
  },
  {
    id: 3,
    text: 'You have now left the store ! You are trying to figure out where to go now.',
    options: [
      {
        text: 'Explore the boonies',
        nextText: 4
      },
      {
        text: 'Keep walking',
        nextText: 4
      },
      {
        text: 'Steal a car',
        nextText: 7
      }
    ]
  },
  {
    id: 4,
    text: 'You end up running into a gang of hoodlums.They say they like your shoes and start to surround you. You decide to?',
    options: [
      {
        text:'Fight them off!',
        nextText: 6,
        requiredState:(currentState) => currentState.coin
      },
      {
          text: 'Run away',
          nextText:8,
        
      },
     {
         text:'Call out for help',
         nextText:5 
     },
    ]
  },
  {
    id: 5,
    text: 'Noone helps you :(',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'After beating them up you see that someones door is left open',
    options: [
      {
        text: 'Explore the unknown crib',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Someone appears and is trying to slash you! What are you going to do ?',
    options: [
      {
        text: 'Use the justifiah',
        requiredState: (currentState) =>
        currentState.Justifiah,
        nextText:10
      },
      {
        text:'Shoot it with the fourty nickel',
        requiredState: (currentState) => currentState.FourtyNickel,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the 821 coin at them',
        requiredState: (currentState) => currentState.coin,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You fool !',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster got boomed!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw some coin at the bum. After the dust settled you saw that the bum left. You basically just paid rent. The unknown crib is now yours!',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
      id: 12,
      text:'You dummy you cant steal without a weapon',
      options:[
          {
              text:'Restart',
              nextText:-1
          }
      ]
  }
]

startGame()