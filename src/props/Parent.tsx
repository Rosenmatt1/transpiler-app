import { Child } from './Child';

export const Parent = () => {
  return <Child  color="red" onClick={() => console.log('clicked')}>
    
  </Child>
}

