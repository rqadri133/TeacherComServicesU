import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import {React, useState} from 'react' 

const ExpenseItem = (props) => 
{
   // revison 
   const [title , setTitle] = useState(props.title);

   const clickHandler= () => {
        setTitle("Updated" );
        console.log('Clicked!!!!');

   };
   // will continue tomorrow very sleepy
   //useState({ setDate, date });
    
    return (
       <Card className="expense-item">
         <div>
          <ExpenseDate date = {props.date} />
              

         </div>
         <div className="expense-item__description">
          <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
         </div>
         <div>
            <button onClick={clickHandler}> Clicked   </button> 
         </div>
       </Card>



    ) ;




}

export default ExpenseItem;