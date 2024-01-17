import Bird1 from './components/Bird1';
import Bird2 from './components/Bird2';
import Bird3 from './components/Bird3';
import Bird4 from './components/Bird4';

export const Birds = {
  '1': Bird1,
  '2': Bird2,
  '3': Bird3,
  '4': Bird4,
};

interface Props {
  type?: keyof typeof Birds;
}

const Bird = ({ type = '1' }: Props) => {
  const Component = Birds[type];
  return <Component />;
};

export default Bird;
