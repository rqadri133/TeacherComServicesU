import React, { useState, useEffect } from 'react';
import * as questionAnswering from '@tensorflow-models/qna';
import { Container } from 'react-bootstrap';

function ChatBot() {
  const [model, setModel] = useState(null);
  const [passage, setPassage] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    async function loadQnaModel() {
      const loadedModel = await questionAnswering.load();
      setModel(loadedModel);
    }
    loadQnaModel();
  }, []);



  async function answerFeedQuestion() {
    const model = await questionAnswering.load();
  

    const question = "What is the capital of France?";
    const context = "Paris is the capital and most populous city of France.";
  
    const answers = await model.findAnswers(question, context);
  
    console.log(answers); // Output: [ { text: 'Paris', score: 0.9999, start: 0, end: 5 } ]
  }
  

  const handleAnswer = async () => {
    if (model && passage && question) {
      const answers = await model.findAnswers(question, passage);
      setAnswer(answers[0]?.text || 'No answer found.');
    }
  };

  return (

    <Container>
		<div className="container-login100">
			<div className="wrap-login100">
      <textarea value={passage} onChange={(e) => setPassage(e.target.value)} placeholder="Enter passage" />
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter question" />
      <button onClick={handleAnswer}>Answer</button>
      <p>{answer}</p>
    </div>
    </div>
   
    </Container>
    
  );
}

export default ChatBot;
