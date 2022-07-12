import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import DefaultTemplate from "../DefaultTemplate";
import Style from "./style.js";

// database
import tasks from "../../database/Tasks.json";

export default function Task() {
  const style = Style();

  return (
    <DefaultTemplate
      children={
        <div style={style.bg}>
          <Box sx={style.box}>
            {tasks.map((task, index) => (
              <Card sx={style.card} key={index}>
                <CardContent sx={style.cardContent}>
                  <Typography sx={style.typography}>{task.id}</Typography>
                  <Typography sx={style.typography}>{task.priority}</Typography>
                  <Typography sx={style.typography}>{task.state}</Typography>
                  <Typography sx={style.typography}>{task.responsible.firstName}</Typography>
                  <Typography sx={style.typography}>{task.client.businessName}</Typography>
                  <Typography sx={style.typography}>{task.title}</Typography>
                  <Typography sx={style.typography}>{task.updates[0].createdAt}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </div>
      }
    />
  );
}
