// username functionality
// add features that stick with the character 
// avatar for player and enemies 
// music on certain events(death,enemies and game completion)
// title screen and background
// add legible font ... increase size 
// visual feedback when clicking buttons



const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
 

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
    text: 'The year is 2052. You are a world known robber and all your life you have had one dream. This dream was to steal from the vault in the bank of JSC. Stories about this vault say that this vault contains gold bars, jewelry, and money. All of these things have been collected over hundreds of years and you want to be the owner of these riches. All you have been waiting for was your one way in. You have thought for many years on how you were to enter, but all of them either make you dead or put in jail. You know that the bank is heavily guarded with many weapons and guards. If you want to fulfill your dream, you have to act fast. The feds are on to you and if they catch you, you will be put in prison for a very long time. As you are driving to an unknown destination, you hear on the radio that JSC is now open to the public. This is your only shot. You have to make a decision though. Do you travel to JSC to fulfill your dream, or stay home.',
    options: [
      {
        text: 'Travel to 821, to steal from the bank of JSC.',
        nextText: 2
      },
      {
        text: 'Chill in the Crib',
        nextText: 3,
      }
    ]
  },
  {
    id: 2,
    text: 'You make the decision to travel to JSC. Throughout your career as a thief, you have gained many skills like code breaking and lock picking. You believe that you can use these skills to help you in your heist. The drive to the JSC takes about 10 long hours, but you eventually make it. When you arrive you decide to act like a tourist so that you can see the parts JSC of that are open to the public. In all of the stories that you have heard, the vault is located in basement. On the tour, you look for places that you could enter basement. The tour guide tells of the history  and one of the things that stuck out was the year that the JSC was built. It was built in the year 2022 and the first time it was called was in 2017. You see a stone that looks suspicious because it is not even with the wall as the other stones were. It was also larger than the other stones and you think that this was the way to get into the basement. You now need to figure out a way to stay in JSC overnight, so that you can investigate further and complete the heist. Do you hide in the bathrooms, or do you hide in the shadows until JSC closes for the night.',
    options: [
      {
        text: 'Hide in the bathrooms',
          nextText: 4
      },
      {
        text: 'Hide in the shadows',
          nextText: 18
      },
    ]
  },
  {
    id:18,  
    text:'You choose to hide in the shadows. You look around for one that is out of the path that most people are walking on, and you find the perfect on near the back corner of the fort. You hear on the loud speaker that the fort is closing for the night and that all the tourists need to make their way to the exit. 1 hour passes and you think that it is safe to walk around the bank and look for entrances to the underground maze. You start walking towards the stone that looked suspicious. On the way, you see 2 guards doing their nightly check and you are now cornered. They see you and immediately raise their guns at you. They call for backup and they start walking closer to you. You are close to the back corner of the bank and escaping is nearly impossible. As they get closer, they recognize your face from all of the wanted posters. The backup eventually arrives and you get handcuffed. You go to trial and get 55 years in prison for all the crimes you committed and the attempted robbery of the bank.',
    options:[
        {
            text:"Restart",
            nextText:-1
        }
    ]
  },
  {
    id: 3,
    text : 'You stay put and keep a low profile for the time being. You dont talk to anyone because you are afraid that people are going to snitch on you or figure out who you are. Over the course of 2 weeks, you become very lonely and depressed and you question what you are doing. As you watch the news, you see that the feds have gotten very close to figuring out where you are and they will put you in jail very soon if you dont move. Do you stay on the move until further notice, or do you stay put?',
    options: [
      {
        text: 'Keep moving',
        nextText: 6
      },
      {
        text: 'Stay!',
        nextText: 7
      }
    ]
  },
    {
      id: 4,
      text:'You choose to hide in the bathrooms. Some guards come into the bathroom to check to see if any tourists are left in it. They only open the door and they dont check in any of the stalls. You hide in the stalls and raise your feet off of the ground so that the guards dont see you. After about 8 hours of hiding, you leave the bathroom and go to the suspicious rock that you see earlier, and you hear no one, so you think that the guards have already left. You make it to the rock to investigate. You look at all 4 sides of the rock and you see a very small keypad on the lower half of the left side of the rock. You look at it and it is a 4 digit number lock. If you get the number wrong, you will probably end up in jail because someone will find out. You think of all the dates that you remembered in the tour and you remember the three significant ones. The building year, which was 1998. The year it was first called JSC, which was 2000. The year that they named it training grounds was in 1754. All of these dates could be the code to get into the basement . You also get scared on the idea that you may get caught if you put in the wrong code, so you can also choose to leave the bank. Which one do you choose?',
      options: [
          {
              text:'1998',
              nextText: 5
          },
          {
              text:'2000',
              nextText:16
          },
          {
              text:'1754',
              nextText: 10
              
          },
          {
              text:'Leave the bank!',
              nextText:-1
          }
      ]
  },
  {
    id:5,
    text:'You choose to type in the code 1998 because you think that the code would not be too obvious and not too out of the blue. You think that this code has the best chance of being the correct one. You type in one digit at a time and leave 5 seconds in the middle of each to avoid any mistakes. You finish typing in 1932 and nothing happens. The rock doesnt move out, there are no sirens going off, and everything is quiet. You dont move a muscle and out of no where lasers are pointing at you from all directions. You cant move because the lasers will disintegrate you within a matter of seconds. A couple seconds later, the guards show up and the lasers are turned off. They come and handcuff you, and you go to trial. At trial you receive 63 years in prison because of all your past crimes, the attempted robbery, and the violation of the banks rules.',
    options:[
        {
            text:'Restart',
            nextText:-1
        }
        
    ]
},
{
  id: 6,
  text:'Two or three weeks pass and you are still on the move.You have just been travelling from place to place staying in motels and in your car overnight. One night you are driving just five miles per hour above the speed limit and a cop flashes his lights behind you. You get very scared that he will know who you are so you speed up. You are know being chased by the cop and you realize that this is the worst thing that you could have done, but there is no going back now. One cop car turned into 10 cop cars all trying to stop you. You leave the highway and end up on some local roads and you have lost the cops. You end up staying in your car on the side of a road that you have never seen before. After 30 minutes pass, you fall into a deep sleep. You are jolted awake by the sound of shouting and sirens. Your worst nightmare has come true. There are cop cars all around you and they arrest you. You realize that you messed up and that you are going to be in jail for a long time. You go to trial and receive 35 years in prison.',
  options:[
      {
         text:'Good Luck !',
         nextText: -1
      }
    ]
},
  {
    id: 8,
    text: 'No running away.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text:'You stay put and you think that life is going great for you. No one has found you, or found out who you were. A few months pass by and you think that the feds have given up on finding you. You feel that you can go talk to people now that the feds have given up on finding you. You start out only talking to people that you know won`t snitch on you, but then start talking to everyone in the town. You become well known throughout the town and even get invited to some parties. You end up going to some parties and no one knows who you actually are. As you leave the party you see a guy across the street that has binoculars and is looking right at you. He moves his binoculars from his face and you see that he has a grin on his face. You realize that there are people all around you with binoculars. You can either make a run for it, or you surrender.',
    options:[
        {
           text: 'Run',
           nextText:8
        },
        {
            text:'Damn bro',
           nextText:-1
        }
    ]
},
{
  id:8,
  text:'You suddenly make a run for it and the guy on the top of the roof across from you yells to his other partners to come chase you and arrest you. You bolt out of the street, and into an alleyway and you hear multiple feet running behind you. You turn around many corners and you think you lost them, but just as you think that you see a guy waiting right in front of you. With your quick reflexes, you turn around another corner, but another man was waiting for you. There are no more corners for you to turn around, so you immediately start running back the way that you came. As you turn around, you see that there are 2 more men waiting for you. You are cornered and you accept defeat. They come closer and closer until more men follow up behind them. They make their way closer to you and they are now an arms length away from you. They arrest you and you go to trial. You go to court and eventually get 50 years in prison for all the crimes you committed and for running away from the feds.',
  options:[
      {
          text:'Good Luck',
          nextText:-1
      }
  ]
}, 
{
  id:17,
      text:'You leave the group that you are in and go to the middle of the street. As you walk, you put your hands up as a sign of surrendering. Everyone in the group that you were in left, and the street is now empty except for you. You wait for something to happen and out of all the alleys connecting to the street a bunch of people holding badges come up to you and arrest you. You realize what just happened and your worst nightmare has occurred. You go to trial and you get 25 years in prison for all the crimes you have committed in the past. The sentence is not as high as it is supposed to be because you surrendered.',
      options:[
          {
              text:'Good Luck',
              nextText:-1
          }
      ]
},
{
    id:9,
        text:'You start to exit the bank and head out the way you came in, but on your way out you see 3 guards doing another nightly check and now, there is now no place to hide. There are no corridors to enter, and the bathrooms are a decent distance away. They are making their way closer and closer to you. You accept defeat because you know that there is no getting out of this. The guards see you as they do their check and handcuff you. You go to trial and get 57 years in prison for violating the rules of the fort, your past crimes, and running away from the feds.',
   options:[
       {
       text:'Restart',
           nextText:-1
   }
   ]
},
  {
    id:5,
    text:'You choose to type in the code 1998 because you think that the code would not be too obvious and not too out of the blue. You think that this code has the best chance of being the correct one. You type in one digit at a time and leave 5 seconds in the middle of each to avoid any mistakes. You finish typing in 1932 and nothing happens. The rock doesnt move out, there are no sirens going off, and everything is quiet. You dont move a muscle and out of no where lasers are pointing at you from all directions. You cant move because the lasers will disintegrate you within a matter of seconds. A couple seconds later, the guards show up and the lasers are turned off. They come and handcuff you, and you go to trial. At trial you receive 63 years in prison because of all your past crimes, the attempted robbery, and the violation of the banks rules.',
    options:[
        {
            text:'Restart',
            nextText:-1
        }
        
    ]
},
{
  id:10,
      text:'You are very hesitant to choose 1754 because it seems the most obvious and it seems that almost everyone would choose that 4 digit code. You type it in one digit at a time. You also leave a couple seconds in between each digit just to avoid mistakes. Once you finish typing the code, you hear a robotic voice that says."Access Granted." The stone then sinks into the ground and you see a staircase leading downstairs somewhere. You feel relieved and you start the descent into the maze. As you walk down the stairs you see torches on the sides of the walls and you think that this chamber was built well before the fort was built, but someone probably stumbled upon it and changed the code to something related to the fort. Once you reach the bottom, you immediately see a door. The door has a sign that reads, "lorem ipsum" You dont know what it means, but you think it means that you enter here to start. You walk through the door and you see a walkway. There is no other way to go, so you walk forward. You have entered the basement. You keep walking forward, and once you walk about 100 yards, there is a dead end. You can either go right or left. There are also 2 arrows, one pointing right that says, "To live" and the one pointing left that says, "To Death. Do you go right or left?',
  options:[
      {
          text:'Left',
          nextText:12
      },
      {
          text:'Right',
          nextText:11
      }
  ]
},
{
  id:11,
  text:'You dont want to die and you go right. You are walking along a pathway until you get to another dead end. The difference with this dead end is that the only way that you can go is right. You go right and keep on walking for another 100 yards or so and you come across another dead end. This one, like the one before, had only one option. This option was to go right. You walk for a little bit and as you walk, you see a wall that is blocking you from going straight. You go closer to investigate and there is no way to go right or left. You keep on walking and you are now an arms length away from the wall and suddenly the wall opens up like sliding doors. You walk through the doors and you are now right where you began. You think to yourself that this basement is just a big ass room and that if no one has gotten the treasure and people have been down here, then there are people stuck in here. You go back the way that you started and the only way you can go is left.',
  options:[
      {
          text:'Go left',
          nextText:12
      }
  ]
},
{
  id:12,
  text:'You go left and you walk straight for a while and for a little bit. You just follow the maze. You mess up a couple of times, but it is alright because you just end up back at the beginning. You remember the correct path that you have to take and just follow it through. An hour later, you finish the maze. There is a sign that reads "bonus labor!", and you think that you are done. You walk through a set of doors and to your surprise, there is another maze. You start walking through it, thinking that it is going to be like the last one. You walk for a little bit, and you have made multiple turns and you have not ended up back at the beginning. You think that this maze doesnt have any loops or anything. You think to yourself that this is going to be a hard challenge to over come, but you do know a trick to help you escape. This trick is to put your hand on a wall and just follow the wall. It may take you a long time to escape, but you still escape. You use this method for around two hours, and you hear a noise. You hear a persons footsteps. You want to know who it is, but you do not want to risk your life. Do you approach them, or do you keep your distance.',
  options:[
      {
          text:'Go to them',
          nextText:13
      },
  {
      text:'Stay back!',
      nextText:14
  }
  ]
},
{
  id:13,
  text:'You approach them to see if you can get any help from them, and as you turn the corner to them, you see them. The person was a boy and looked the same age as you. He said that he was the first person in the maze, and he changed the codes to make it easier for him to remember them. He seems friendly, so you become friends and you go on with the maze. You use the method that you learned when you were younger, and both of you guys get to the chamber carrying the riches. You both split the riches and he thanks you because he has attempted to complete this maze for over a month now. You both go out the way that you came in and without each others help, you guys would have never been able to complete the maze. You both leave the maze, and become really good friends. You both have the same passions and interests and you become partners in crime. You live a happy life and the feds never catch you.',
  options:[
      {
        text:'Have a nice life',
        nextText:-1
      },
  ]
},
{
  id:14,
  text:'You keep your distance in fear of being killed or hurt. You go on and you keep on turning different corners. You are walking around for 3 hours and everything around you goes dark. You get scared and you scream for help. Next thing you know, you are in a cell in handcuffs. You wonder how you got here, and you have no idea. All you know is that you are going to jail and there is no stopping that. You go to trial and realize the feds caught you going into the maze. You receive life in prison and you are immediately crushed.',
  options:[
      {
        text:'Restart',
        nextText:-1
      }
  ]
},
{
  id:15,
                  text:'You choose to type in the code 1932 because you think that the code would not be too obvious and not too out of the blue. You think that this code has the best chance of being the correct one. You type in one digit at a time and leave 5 seconds in the middle of each to avoid any mistakes. You finish typing in 1932 and nothing happens. The rock doesnt move out, there are no sirens going off, and everything is quiet. You dont move a muscle and out of no where lasers are pointing at you from all directions. You cant move because the lasers will disintegrate you within a matter of seconds. A couple seconds later, the guards show up and the lasers are turned off. They come and handcuff you, and you go to trial. At trial you receive 63 years in prison because of all your past crimes, the attempted robbery, and the violation of the forts rules.',
  options:[
      {
        text:'Restart',
        nextText:-1
      }
  ]
},
{
  id:17,
          text:'You choose to hide in the corridors. You look around for one that is out of the path that most people are walking on, and you find the perfect on near the back corner of the fort. You hear on the loud speaker that the fort is closing for the night and that all the tourists need to make their way to the exit. Thirty minutes pass and you think that it is safe to walk around the fort and look for entrances to the underground maze. You start walking towards the stone that looked suspicious. On the way, you see 2 guards doing their nightly check and you are now cornered. They see you and immediately raise their guns at you. They call for backup and they start walking closer to you. You are close to the back corner of the fort and escaping is nearly impossible. As they get closer, they recognize your face from all of the wanted posters. The backup eventually arrives and you get handcuffed. You go to trial and get 55 years in prison for all the crimes you committed and the attempted robbery of the fort.',
  options:[
      {
          text:'Restart',
          nextText:-1
      }
  ]
},
{
  id:16,
  text:'You choose to type in the code 2000 because you think that the code would be the least obvious. You type in one digit at a time and leave 5 seconds in the middle of each to avoid any mistakes. You finish typing in 1925 and nothing happens. The rock doesnt move out, there are no sirens going off, and everything is quiet. You dont move a muscle and out of no where lasers are pointing at you from all directions. You cant move because the lasers will disintegrate you within a matter of seconds. A couple seconds later, the guards show up and the lasers are turned off. They come and handcuff you, and you go to trial. At trial you receive 63 years in prison because of all your past crimes, the attempted robbery, and the violation of the forts rules',
  options:[
      {
          text:'Restart',
          nextText:-1
      }
  ]
},
]

startGame()