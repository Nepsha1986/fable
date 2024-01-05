import Fish1 from './components/Fish1';
import Fish2 from './components/Fish2';
import Fish3 from './components/Fish3';
import { IFish } from '@/components/Fish/components/types';

export const Fishes = {
  '1': Fish1,
  '2': Fish2,
  '3': Fish3,
};

interface Props {
  type?: keyof typeof Fishes;
}

const Fish = ({ type = '1', ...fishProps }: Props & IFish) => {
  const Component = Fishes[type];
  return <Component {...fishProps} />;
};

export default Fish;
