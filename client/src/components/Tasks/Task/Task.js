import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';

import {deleteTask } from '../../../actions/tasks';
import useStyles from './styles';

const Task = ({ task, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(task);
  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{task.task}</Typography>
      <CardActions className={classes.cardActions}>
        { 
        <Button size="small" color="primary" onClick={() => setCurrentId(task.id)}>
          <EditIcon fontSize="small" /> Edit
        </Button>
        }
        {
        <Button size="small" color="secondary" onClick={() => dispatch(deleteTask(task.id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        }        
      </CardActions>
    </Card>
  );
};

export default Task;
