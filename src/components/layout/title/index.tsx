import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo, shadow } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        {collapsed ? (
          <img src={logo} alt="shadow" width="28px" />
        ) : (
          <div style={{ display: "flex", width: "140px" }}>
            <img src={shadow} alt="shadow" width="140px" />
            <h1
              style={{
                background: "transparent",
                marginLeft: "-3.5em",
                color: "#006666",
                fontFamily: "monospace, serif",
                fontSize: "26px",
              }}
            >
              Shadow
            </h1>
          </div>
        )}
      </Link>
    </Button>
  );
};
