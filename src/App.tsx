import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeadCaptureForm from './components/LeadCaptureForm';
import { Channel } from './interfaces';

function App() {
  const [channels, setChannels] = React.useState<Channel>(
    Channel.IN_PERSON_CAPTURE
  );

  return (
    <div className='p-4 w-full max-w-3xl'>
      <LeadCaptureForm channel={channels} />
    </div>
  );
}

export default App;
