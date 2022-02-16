// const textNodes = [
//     {
//       id: 1,
//       text: 'Welcome to the city of 821! A place that once was the epicenter of finance and technology but now is a crime riddled metropolis. No more bustling skyscrapers,luxury stores and fancy suited men. Homicide rates has risen, employment has decreased and now more than ever cash is king! But just remember how they treat you is how they feel about you!' ,
//       options: [
//           {
//               text: 'Continue',
//               nextText: 2
//       } 
//       ]
//       },
          
//       {
//               id: 2,
//               text:'Around you there are derelict buildings covered in graffiti and filled with the homeless. You see a bag from the corner of your eyes and you decide to take a look inside',
//               options: [
//                   {
//                         text: 'Take the 821 coin?',
//           setState: { coin: true },
//           nextText: 3
//                   },
//                   {
//                       text: 'Keep it pushing',
//           nextText: 4,
//           setState:{coin:false}
//         }
//               ]
              
//           },
//        {
//       id: 3,
//       text : 'A dirty man comes to you and says to put the coins back or else! You decide to run away and up in going deeper into the city. A arms dealer bumps into you. He lets you know that you cant be outside without any arsenal or cash. He gives you a two weapons to choose from. A sword or gun! Choose Wisely! ',
//       options: [
//         {
//           text: 'Buy the Justifiah.. A plain old sword it just sounds fancy...! ',
//           requiredState: (currentState) => currentState.coin,
//           setState: { coin: false, Justifiah: true },
//           nextText: 3
//         },
//         {
//           text: 'Buy the Fourty Nickel... A rusty gun, but it gets the job done...',
//           requiredState: (currentState) => currentState.coin,
//           setState: { coin: false, FourtyNickel: true },
//           nextText: 3
//         },
//         {
//           text: 'Keep your coins',
//           nextText: 3,
//           setState:{coin:true}
//         },
//         {
//             text:'Try to steal a weapon',
//             nextText:12
//         }
//       ]
//     },
//       {
//           id: 4,
//           text: 'After not taking the bag of money, your stomach starts to growl and its starting to get late. Once it gets dark it becomes every man for themselves!. What to do?',
//           options: [
//               {
//                   text:'Try to sweet talk yourself into a meal and bed for the night.',
//                   nextText: 6
//               },
//               {
//                   text:'Figure it out later',
//                   nextText: 5
//               },
//               {
//                   text:'Rob a store or someone',
//                   nextText: 7
                  
//               }
//           ]
//       },
//       {
//           id:5,
//           text:'You end up running into a gang of hoodlums.They say they like your shoes and start to surround you. You decide to?', 
//           options:[
//               {
//                   text:'Fight them off!',
//                   requiredState: (currentState) => currentState.Justifiah,
//                   nextText:6
//               },
//               {
//                   text: 'Run away',
//                   nextText: 8
//               },
//               {
//                   text:'Blick EM DOWN',
//                   requiredState: (currentState) => currentState.FourtyNickel,
//                   nextText:7
//               },
//               {
//                   text:'Give up your coins', 
//                   nextText: 9
//               }
              
//           ]
//       },
//       {
//           id: 6,
//           text:'After using your sword to fight the hoodlums, you see that they start to gain a sense of notiriety for you. One of the men named BOB asks to join you in escapades around the city of 821, he says his men will join you too!',
//           options:[
//               {
//                  text:'Yes I would like that we can take over the city.',
//                  setState: {influenetial:true} 
//               },
//               {
//                   text:'I do not want to hang around you bums!',
//                   setState: {arrogant:true}
//               },
//               {
//                   text:'Beat em up again!',
//                   setState:{fiesty:true}
//               }
//           ]
//       },
//       {
//           id: 7,
//           text:'After killing the men you go to check their pockets. One of the men has a map pointing to a home a couple of streets away!What to do ?',
//           options:[
//               {
//                  text: 'Pick up the map',
//                   setState:{map:true}
//               },
//               {
//                   text:'Check the rest of the bums pockets',
//                   setState:{CarKey: true}
//               },
//               {
//                   text:'Keep walking'
                  
                  
//               }
//           ]
//       },
      
//     ]
