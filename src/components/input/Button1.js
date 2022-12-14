import React from "react";
import { Button, Space } from "antd";

function Button1() {
  return (
    <div>
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <h1>Test</h1>
      </Space>
    </div>
  );
}

export default Button1;
