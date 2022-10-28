const champions = [
    //ODI WC
    {
        'question':'ODI WC 1975',
        'answer':'West Indies',
        'option-1':'India',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    },
    {
        'question':'ODI WC 1979',
        'answer':'West Indies',
        'option-1':'Srilanka',
        'option-2':'England',
        'option-3':'West Indies',
        'option-4':'Pakistan'
    }
    ,{
        'question':'ODI WC 1983',
        'answer':'India',
        'option-1':'Australia',
        'option-2':'India',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'ODI WC 1987',
        'answer':'Australia',
        'option-1':'South Africa',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'England'
    }
    ,{
        'question':'ODI WC 1992',
        'answer':'Pakistan',
        'option-1':'India',
        'option-2':'Pakistan',
        'option-3':'England',
        'option-4':'New Zealand'
    }
    ,{
        'question':'ODI WC 1996',
        'answer':'Srilanka',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'West Indies',
        'option-4':'Pakistan'
    }
    ,{
        'question':'ODI WC 1999',
        'answer':'Australia',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'India'
    }
    ,{
        'question':'ODI WC 2003',
        'answer':'Australia',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'ODI WC 2007',
        'answer':'Australia',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'ODI WC 2011',
        'answer':'India',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'ODI WC 2015',
        'answer':'Australia',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'ODI WC 2019',
        'answer':'England',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    //T20 WC 
    ,{
        'question':'T20 WC 2007',
        'answer':'India',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'T20 WC 2009',
        'answer':'Pakistan',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'T20 WC 2012',
        'answer':'West Indies',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'T20 WC 2014',
        'answer':'Srilanka',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'T20 WC 2016',
        'answer':'West Indies',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
    ,{
        'question':'T20 WC 2021',
        'answer':'Australia',
        'option-1':'Srilanka',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    }
]

const jersey = [
    //Indian Players
    {
        'question' : 18,
        'answer':'Virat Kohli',
        'option-1':'India',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    },
    {
        'question' : 45,
        'answer':'Rohit Sharma',
        'option-1':'India',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    },
    {
        'question' : 7,
        'answer':'MS Dhoni',
        'option-1':'India',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    },
    {
        'jerseyNumber' : 18,
        'answer':'Virat Kohli',
        'option-1':'India',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    },
    {
        'jerseyNumber' : 10,
        'answer':'Sachin Tendulkar',
        'option-1':'India',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    },
    {
        'jerseyNumber' : 65,
        'answer':'Suryakumar Yadav',
        'option-1':'India',
        'option-2':'Australia',
        'option-3':'Pakistan',
        'option-4':'West Indies'
    },
]
 //Created an array of id's of playButtons
const playButtons = ['play-button-1', 'play-button-2', 'play-button-3']
const questionPages = ['champions-question-page', 'jersey-question-page', 'ipl-question-page']
const questionPageOfChampions = document.getElementById('champions-question-page')
const test = 4
const shortGame = 10
const longGame = 25
const nextButton = document.getElementById('next')
const question = document.getElementById('question')
const answerButtons = document.getElementById('option')
const option1 = document.getElementById('option-1')
const option2 = document.getElementById('option-2')
const option3 = document.getElementById('option-3')
const option4 = document.getElementById('option-4')
const options = [option1,option2,option3,option4]
const resultsPage = document.getElementById('results-page')
const result = document.getElementById('result')
var score = 0
var selectedAnswer = null
var random_number = 2
var questionCounter = 0
//hiding results page
resultsPage.style.display = 'none'

//starts game
function playGame()
{
    document.getElementById('game-card').style.display = 'none'
    document.getElementById('champions-question-page').setAttribute("style","display:flex; flex-direction:column; align-items:center;justify-content:space-between")
}

//for deslecting the option before moving to the next question
function deselectOption(){
    options.forEach(element => {
        element.setAttribute('style',"background-color:#42497F ;color :white ")
    });
}

//for deselecting the option selected if user wants to change the option
function deslectingOthers(a,b,c,d){
    a.setAttribute('style',"background-color:#42497F ;color :white ")
    b.setAttribute('style',"background-color:#42497F ;color :white ")
    c.setAttribute('style',"background-color:#42497F ;color :white ")
    selectedAnswer = d
}
//for loading results page
function loadResultsPage()
{
    questionPageOfChampions.style.display = 'none'
    resultsPage.style.display = 'flex'
    result.textContent = score
}
//for next question 
function changeQuestion()
{   
    questionCounter++
    if(selectedAnswer.textContent == champions[random_number].answer)
    {
        score++;
    }
    random_number = Math.floor(Math.random()*10)
    question.textContent = champions[random_number].question
    option1.textContent = champions[random_number]["option-1"]
    option2.textContent = champions[random_number]["option-2"]
    option3.textContent = champions[random_number]["option-3"]
    option4.textContent = champions[random_number]["option-4"]
    deselectOption()
    selectedAnswer = null
    if(questionCounter === test -1)
    {
        nextButton.textContent = "Submit"
    }
    if(questionCounter === test)
    {
        loadResultsPage()
    }
}

//for showing that option is selected on click
option1.addEventListener('click',function getSelected()
{
    option1.setAttribute('style',"background-color:white ;color : #42497F")
    deslectingOthers(option2,option3,option4,option1)
})

option2.addEventListener('click',function getSelected()
{
    option2.setAttribute('style',"background-color:white ;color : #42497F")
    deslectingOthers(option1,option3,option4,option2)
})

option3.addEventListener('click',function getSelected()
{
    option3.setAttribute('style',"background-color:white ;color : #42497F")
    deslectingOthers(option1,option2,option4,option3)
})

option4.addEventListener('click',function getSelected()
{
    option4.setAttribute('style',"background-color:white ;color : #42497F")
    deslectingOthers(option1,option2,option3,option4)
})
//

function nextQuestion()
{
    nextButton.addEventListener('click',changeQuestion)
}
nextQuestion()

//used for each method of the loop to pass the value of id's of play buttons 
playButtons.forEach(element => {
    document.getElementById(element).addEventListener('click', playGame)
})