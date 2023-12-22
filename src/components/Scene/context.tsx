import { createContext, MutableRefObject } from 'react';

interface SceneContextProps {
  container: MutableRefObject<HTMLElement>;
}

const SceneContext = createContext<SceneContextProps>({} as SceneContextProps);

export default SceneContext;
