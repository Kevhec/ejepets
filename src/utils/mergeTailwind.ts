import { twMerge } from 'tailwind-merge';
import classNames, { type ArgumentArray } from 'classnames';

export default function mergeTailwind(...args: ArgumentArray) {
  return twMerge(classNames(...args));
}
