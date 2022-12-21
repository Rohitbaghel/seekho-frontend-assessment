const allQuestions = [
  {
    id: Math.random().toString(),
    quest: "Which type of JavaScript language is ___",
    correct: "Object-Based",
    selected: null,
    opt: [
      {
        value: "Object-Oriented",
        displayText: "Object-Oriented",
      },
      {
        value: "Object-Based",
        displayText: "Object-Based",
      },
      {
        value: "Assembly-language",
        displayText: "Assembly-language",
      },
      {
        value: "High-level",
        displayText: "High-level",
      },
    ],
  },
  {
    id: Math.random().toString(),
    quest: `varx=5,y=1  
var obj ={ x:10}  
with(obj)  
{  
      alert(y)  
}   `,
    correct: "1",
    selected: null,
    opt: [
      {
        value: "1",
        displayText: "1",
      },
      {
        value: "Error",
        displayText: "Error",
      },
      {
        value: "10",
        displayText: "10",
      },
      {
        value: "5",
        displayText: "5",
      },
    ],
  },
  {
    id: Math.random().toString(),
    quest: "Which one of the following also known as Conditional Expression:",
    correct: "immediate if",
    selected: null,
    opt: [
      {
        value: "Alternative to if-else",
        displayText: "Alternative to if-else",
      },
      {
        value: "Switch statement",
        displayText: "Switch statement",
      },
      {
        value: "If-then-else statement",
        displayText: "If-then-else statement",
      },
      {
        value: "immediate if",
        displayText: "immediate if",
      },
    ],
  },
];

export default allQuestions;
