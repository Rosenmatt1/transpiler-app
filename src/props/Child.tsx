interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

// export const Child = ({ color }: ChildProps) => {
//   return <div>Hi there?</div>
// }

export const Child: React.FC<ChildProps> = ({ color }) => {
  return <div> {color} </div>
}