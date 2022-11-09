import React from "react";
import { Meta, Story } from "@storybook/react";
import { NavigationBar, NavigationProps } from "../components";

const meta: Meta = {
  title: "Navigation Bar",
  component: NavigationBar,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavigationProps> = (args) => <NavigationBar {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
