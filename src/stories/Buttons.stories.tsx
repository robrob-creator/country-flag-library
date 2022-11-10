import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "../components";

const meta: Meta = {
  title: "Isaac Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
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

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};