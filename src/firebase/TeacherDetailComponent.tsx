import * as React from "react";
import User from './TeacherProfile'
import TeacherProfile from "./TeacherProfile";
export default class TeacherProfileComponent extends React.Component<User, {}> {
constructor (props: TeacherProfile){
  super(props);
}
render() {
  return (  
    <section>
        Hi my names is <b>{this.props.name} you have requested to register a demo</b>
        <br/>
        My Total Experience is <b>{this.props.YearsOfExperience} </b> 
        <br/>
         Thanks for Submitting Your Goals
       </section>
    );
  }
}