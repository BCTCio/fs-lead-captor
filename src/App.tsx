import React from 'react';
import logo from './logo.svg';
import './App.css';
import LeadCaptureForm from './components/LeadCaptureForm';
import { Channel } from './interfaces';

function App() {
  const [channel, setChannel] = React.useState<Channel>(
    Channel.IN_PERSON_CAPTURE
  );

  return (
    <div className='p-4 w-full max-w-3xl m-auto'>
      <LeadCaptureForm channel={channel} setChannel={setChannel} />
    </div>
  );
}

export default App;
