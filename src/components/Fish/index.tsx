import Fish2 from './components/Fish2';
import Fish3 from './components/Fish3';
import { IFish } from './components/types';

export const Fishes = {
  '2': Fish2,
  '3': Fish3,
};

interface Props extends IFish {
  type?: keyof typeof Fishes;
}

const Fish = ({ type = '2', ...fishProps }: Props) => {
  const Component = Fishes[type];
  return <Component {...fishProps} />;
};

export default Fish;
