import { createContext, ElementRef } from 'react';

interface SceneContextProps {
  container: ElementRef<any>;
}

const SceneContext = createContext<SceneContextProps>({} as SceneContextProps);

export default SceneContext;
