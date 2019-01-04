import React, { Component } from 'react';

import ChatBot from 'rechatbot';
import 'rechatbot/dist/index.css';

const options = [
  {
    id: 'welcome',
    text: 'Welcome, to React ChatBot!',
    buttons: [
      {
        label: 'Docs',
        call: 'docs',
      },
      {
        label: 'Github',
        call: () => {
          console.log('on btn github')
          global.location.href = 'https://github.com/Archakov06/react-chatbot';
        },
      },
    ],
  },
  {
    id: 'docs',
    buttons: [
      {
        label: 'Open docs on GitHub',
        callback: () => {
          global.location.href = 'https://github.com/Archakov06/rechatbot';
        },
      },
    ],
  },
  {
    id: null,
    text: 'Sorry, I can not understand what you mean.',
  },
];

export default class App extends Component <any, any>{
  constructor(props:any) {
    super(props);
    this.state = {
      messages: [],
    };
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(obj:any) {
    this.setState({
      messages: [...this.state.messages, obj],
    });
    console.log('on send')
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <ChatBot
          welcomeId="welcome"
          delay={800}
          messages={messages}
          options={options}
          onSendMessage={this.addMessage}
          avatars={{
            user: 'https://pp.userapi.com/c834104/v834104145/5ca01/AsZGGgLNr-4.jpg',
            bot: 'https://pp.userapi.com/c631216/v631216247/21c8b/qF8SubyAdsU.jpg',
          }}
        />
      </div>
    );
  }
}

//export default class extends React.Component{
//    render(){
//        return (<p>hello react!</p>)
//    }
//}