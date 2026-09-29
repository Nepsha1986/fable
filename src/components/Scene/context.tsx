'use client';
import { createContext, useContext } from 'react';
import { MotionValue, motionValue } from 'framer-motion';

interface SceneContextValue {
  /** 0 when the scene top enters the viewport, 1 when its bottom leaves it. */
  progress: MotionValue<number>;
}

const SceneContext = createContext<SceneContextValue>({
  progress: motionValue(0),
});

export const useSceneProgress = () => useContext(SceneContext).progress;

export default SceneContext;
