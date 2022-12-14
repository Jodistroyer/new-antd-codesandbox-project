import React from "react";
import { Button, Space } from "antd";

function AntButton() {
  return (
    <div>
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <h1>Hello</h1>
      </Space>
    </div>
  );
}

export default AntButton;
