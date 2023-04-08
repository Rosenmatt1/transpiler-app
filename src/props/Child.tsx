interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

//In this approach children will need to be in the interface
// export const Child = ({ color }: ChildProps) => {
//   return <div>Hi there?</div>
// }


//this syntax automatically accepts children 
export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return <div> 
    {color} 
    <button onClick={onClick}> Click me</button>
    </div>
}