/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}","./dis/*.html"],
  theme: {
    extend: {
      fontFamily:{
        myfont:[
          "Sigmar", "serif"

        ],
        jos:[
          "Jost", "Sans-serif"
        ]
      },
      
      
      backgroundImage:{
        trans:[
          "linear-gradient(315deg, rgba(2,0,36,1) 0%, rgba(41,114,138,1) 57%, rgba(0,212,255,1) 100%)"
        ]
       
      },
      height:{
        div:[
          "500px"
        ],
        sec1:[
          "15%"
        ],
        sec2:[
          "40%"
        ],
        sec3:[
          "45%"
        ],
        hskin:[
          "328px" 
        ]
      },
      backgroundColor:{
        darkk:[
          "#292D33"
        ],
        darkkblue:[
          "#555C66"
        ],
        skin:[
          "#F9F9EB"
        ],
        skinb:[
          "#E9EABC"
        ],
        sking:[
          "#3C4E16"
        ],
        skinnav:[
          "#A1B66F"
        ],
        skindark:[
          "#302815"
        ],
        skinpink:[
          "#EB866B"
        ],
        skindark2:[
          "#251406"
        ],
        darkis:[
          "#44270E"
        ],
        orange:[
          "#EB866B"
        ]
      },
      textColor:{
        cskin:[
          "#3C4E16"
        ],
        orange:[
          "#EB866B"
        ]
      },
      width:{
        wskin:[
          "286px"
        ]
      }
      
     
    },
  },
  plugins: [],
}



