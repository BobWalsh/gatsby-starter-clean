import React from 'react'
import { Button } from 'reactstrap'

class Mailsignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: ''
    };
  }

    render() {
        return (
          <div className="card" >
            <div className="card-body">
                <form action="https://47hats.us2.list-manage.com/subscribe/post" method="POST" noValidate>
                  <input type="hidden" name="u" value="431a23cdea6dbb161fd913873"/>
                <input type="hidden" name="id" value="28d4bffa4c"/>
                <div id="subscribeFormWelcome">Get fresh VS Code Mac news, tips, resources, plugin reviews, and more:</div>  
                <label htmlFor='MERGE0'>
                    Email:
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={this.state.emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                     /> 
                </label>
                <div className="field-help smalltype">We never rent, sell or otherwise share email addresses</div>
                
                  <input type="submit"  value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary"/>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    
                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                </div>
              </form>
            </div>
          </div>
        )
    }
}

export default Mailsignup