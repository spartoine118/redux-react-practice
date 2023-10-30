import React from 'react'

interface ListItemInterface {
  name: string
  checked: boolean
}

export function ToDoListItem (props: ListItemInterface): JSX.Element {
  return (
        <li className='item-holder'>
            {props.name}
            <input type='checkbox' defaultChecked={props.checked}></input>
        </li>
  )
}
