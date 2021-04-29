import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Task from './Task/Task';
import useStyles from './styles';

const Tasks = ({ setCurrentId }) => {
  const tasks = useSelector((state) => state.tasks);
  const classes = useStyles();
  // console.log(tasks);
  return (
     (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {tasks.slice(0).reverse().map((task) => (
          <Grid key={task.id} item xs={12} sm={12} md={12}>
            <Task task={task} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Tasks;
