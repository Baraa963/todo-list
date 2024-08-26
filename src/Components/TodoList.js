import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Todo from "./Todo";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export default function TodoList() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            مهامي
          </Typography>
          <Divider />

          <ToggleButtonGroup
            style={{
              display: "flex",
              justifyContent: "center",
              direction: "ltr",
              marginTop: "1rem",
            }}
          >
            <ToggleButton>الغير منجز</ToggleButton>
            <ToggleButton>المنجز</ToggleButton>
            <ToggleButton>الكل</ToggleButton>
          </ToggleButtonGroup>
          <Todo />
        </CardContent>
      </Card>
    </Container>
  );
}
