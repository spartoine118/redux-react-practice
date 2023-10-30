/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { checkState, addToDo, changeFilter } from '../slices/to-do-slices'
import { useAppSelector, useAppDispatch } from '../../app/hook'
import { ToDoListItem } from '../components/list-item'
import { useForm, type SubmitHandler } from 'react-hook-form'

export default function ToDo (): JSX.Element {
  const toDo = useAppSelector((state) => state.todo)
  const dispatch = useAppDispatch()
  const { register, formState: { errors }, handleSubmit } = useForm<{ name: string }>()
  const onSubmit: SubmitHandler<{ name: string }> = (data) => { console.log(data) }
  return (
        <div className='todo-holder'>
            <form onSubmit={(e) => handleSubmit(onSubmit)}>
                <input {...register('name', { required: true })}/>
                <button type='submit'>Add to do</button>
            </form>
            <button type='button'>Change Filter</button>
            {toDo.list.map((value, index) => <ToDoListItem key={index} name={value.name} checked={value.checked}/>)}
        </div>
  )
}
