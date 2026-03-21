import '../css/main.css';
import { observer } from "mobx-react-lite"
import WaitStore from "../stores/wait_store";
import React from 'react';

const WaitView = observer(({ waitStore, children  }: { waitStore: WaitStore, children: any }) => {
  if (waitStore.isWaiting === true) {
    console.log("waiting callaed")
    return (<div><div className='waiting'>Please wait</div><div>{children}</div><div className='overlay'></div></div>);
  } else {
    return (<div>{children}</div>);
  }
});

export default WaitView;
