// Create dispatch actions for each action and a Class
import React, { Component } from 'react';

function TeacherActionReducer(tasks, action) {
    switch (action.type) {
      case 'load': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      // this will assign a student to a teacher
      case 'assign': {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      // this will select teacher 
      case 'select': {
        return tasks.filter((t) => t.id !== action.id);
      }
      // this will select student language Resources 
      case 'selectresources': {
         return 

      }

      case 'sendtoCustomNeuralGraphs' : {

           return 

      }
      // this will verify submitted student language test study required.
      case 'sendtogoogleAIDocs' :
      {
        return

      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }