import { ComponentType } from 'react';
import {
  Args as DefaultArgs,
  Annotations,
  ArgTypes,
  Parameters,
  BaseMeta,
  BaseStory,
  BaseDecorators,
} from '@storybook/addons';
import { StoryFnReactReturnType } from './types';

export { Args, ArgTypes, Parameters, StoryContext, LegacyStoryFn } from '@storybook/addons';

type ReactComponent = ComponentType<any>;
type ReactReturnType = StoryFnReactReturnType;

/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export type Meta<Args = DefaultArgs> = BaseMeta<ReactComponent> &
  Annotations<Args, ReactReturnType>;

/**
 * Story function that represents a component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type Story<Args = DefaultArgs> = BaseStory<Args, ReactReturnType> &
  Annotations<Args, ReactReturnType>;

/**
 * Object representing the preview.ts module
 *
 * Add something descriptive here
 * @see [Unit testing with Storybook](https://storybook.js.org/docs/react/workflows/unit-testing)
 */
export type GlobalConfig = {
  decorators?: BaseDecorators<ReactReturnType>;
  parameters?: Parameters;
  argTypes?: ArgTypes;
  [key: string]: any;
};
